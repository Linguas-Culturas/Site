# Destaques alimentados pelo Notion

Esta integração atualiza a seção **Destaques** da página inicial e o acervo de
**Publicações na mídia** (reportagens, podcasts e vídeos).
O navegador lê o arquivo público `data/destaques.json`; ele nunca recebe o token
do Notion nem chama a API do Notion diretamente.

## Arquivos envolvidos

- `scripts/sync-notion.js`: consulta a data source `DESTAQUES`, filtra os itens
  publicados e produz o JSON simplificado.
- `.github/workflows/sync-notion.yml`: executa a sincronização manualmente ou
  todos os dias e só cria um commit quando o JSON mudou.
- `data/destaques.json`: acervo publicado que a página inicial e a página de
  publicações consomem.
- `index.html`, `assets/css/index.css` e `assets/js/index.js`: contêiner,
  aparência e renderização dos cards.

## Configuração obrigatória no GitHub

1. Em **Settings → Secrets and variables → Actions**, crie o secret
   `NOTION_TOKEN` com o token da Internal Connection.
2. Na mesma tela, em **Variables**, crie `NOTION_DATA_SOURCE_ID` com o ID da
   data source `DESTAQUES` (não o ID da página que apenas contém a tabela).
3. Adicione à database uma propriedade de checkbox chamada `DESTAQUE`. Marque
   apenas os itens que devem aparecer na home. Se nenhum estiver marcado, a home
   usa os três primeiros itens definidos por `ORDEM`. Mesmo que mais itens sejam
   marcados, a home exibe no máximo três; todos continuam disponíveis na página
   de publicações.
4. No Notion, abra a database original, use **••• → Add connections** e compartilhe
   a database com essa Internal Connection. Ela precisa da capacidade **Read content**.

## Executar manualmente

No GitHub, abra **Actions → Sincronizar destaques do Notion → Run workflow** e
confirme a execução na branch `main`. Ao fim, abra o commit criado pelo bot para
verificar `data/destaques.json`. O GitHub Pages publica a nova versão depois desse
commit chegar à branch de publicação.

## Diagnóstico

- **401**: token inválido, ausente ou colado com caracteres extras.
- **403**: a conexão não possui a capacidade **Read content**.
- **404**: o ID está incorreto ou a database original não foi compartilhada com a
  conexão.
- **Item ausente**: confirme que `PUBLICADO` está marcado e que o item possui
  `NOME` e `URL`. A sincronização consulta somente registros publicados, e itens
  sem um desses dois campos são ignorados com aviso no log.

As URLs de arquivos hospedados pelo Notion podem expirar. Como o workflow é diário,
ele atualiza essas URLs sempre que o Notion fornecer uma nova versão.
