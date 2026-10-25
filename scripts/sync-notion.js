#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

const NOTION_API_VERSION = '2026-03-11';
const API_URL = 'https://api.notion.com/v1/data_sources';
const outputPath = path.resolve(__dirname, '..', 'data', 'destaques.json');

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} não está configurada.`);
  return value;
}

function plainText(property) {
  return (property ?? []).map((item) => item.plain_text ?? '').join('').trim();
}

function fileUrl(property) {
  const file = property?.[0];
  if (!file) return '';
  if (file.type === 'file') return file.file?.url ?? '';
  if (file.type === 'external') return file.external?.url ?? '';
  return '';
}

function mapEntry(page) {
  const properties = page.properties ?? {};
  const nome = plainText(properties.NOME?.title);
  const url = properties.URL?.url?.trim() ?? '';

  if (!nome || !url) {
    console.warn(`Ignorando entrada ${page.id}: NOME e URL são obrigatórios.`);
    return null;
  }

  return {
    nome,
    url,
    tipo: properties.TIPO?.select?.name ?? '',
    briefing: plainText(properties.BRIEFING?.rich_text),
    capa: fileUrl(properties.CAPA?.files),
    ordem: properties.ORDEM?.number ?? Number.MAX_SAFE_INTEGER,
    destaque: properties.DESTAQUE?.checkbox === true,
  };
}

async function queryDataSource(token, dataSourceId) {
  const entries = [];
  let cursor;

  do {
    const body = {
      page_size: 100,
      sorts: [{ property: 'ORDEM', direction: 'ascending' }],
      result_type: 'page',
    };
    if (cursor) body.start_cursor = cursor;

    const response = await fetch(`${API_URL}/${encodeURIComponent(dataSourceId)}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Notion-Version': NOTION_API_VERSION,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(`Consulta ao Notion falhou (${response.status}): ${error.message ?? 'erro desconhecido'}`);
    }

    const payload = await response.json();
    if (!Array.isArray(payload.results)) throw new Error('Resposta inválida da API do Notion.');

    entries.push(...payload.results);
    cursor = payload.has_more ? payload.next_cursor : undefined;
  } while (cursor);

  return entries;
}

async function writeJson(items) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.tmp`;
  await fs.writeFile(temporaryPath, `${JSON.stringify(items, null, 2)}\n`, 'utf8');
  await fs.rename(temporaryPath, outputPath);
}

async function main() {
  const token = requiredEnv('NOTION_TOKEN');
  const dataSourceId = requiredEnv('NOTION_DATA_SOURCE_ID');
  const pages = await queryDataSource(token, dataSourceId);
  const publishedPages = pages.filter((page) => page.properties?.PUBLICADO?.checkbox === true);
  const items = publishedPages.map(mapEntry).filter(Boolean).sort((a, b) => a.ordem - b.ordem);

  await writeJson(items);
  console.log(`${pages.length - publishedPages.length} registro(s) não publicado(s) foram mantidos fora do site.`);
  console.log(`${items.length} publicação(ões) sincronizada(s) em data/destaques.json.`);
}

main().catch((error) => {
  console.error(`Sincronização não concluída: ${error.message}`);
  process.exitCode = 1;
});
