const normalizeType = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .trim()
  .toLowerCase();

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const publicationTypes = {
  reportagem: {
    section: 'reportagens',
    label: 'Reportagem',
    action: 'Ler reportagem',
    placeholder: '↗',
  },
  podcast: {
    section: 'podcasts',
    label: 'Podcast',
    action: 'Ouvir episódio',
    placeholder: '♪',
  },
  video: {
    section: 'videos',
    label: 'Vídeo',
    action: 'Assistir ao vídeo',
    placeholder: '▶',
  },
};

const localPublications = [
  {
    nome: 'Entrevista com Fernanda Peçanha Carvalho no Podcast Eureka',
    url: 'https://open.spotify.com/episode/46S7SebuBhuCbJe3uKWdA6?si=d69b9ada054c4a45',
    tipo: 'PODCAST',
    briefing: 'A coordenadora do Línguas-Culturas conversa sobre educação, línguas e as experiências desenvolvidas pelo projeto.',
    capa: 'assets/imagens/eurekaPodcast.jpg',
    secondaryUrl: 'https://www.instagram.com/reel/DdBrrhTua5L/?utm_source=ig_web_button_share_sheet&vrfl=MzRlODBiNWFlZA==',
    secondaryLabel: 'Ver trecho no Instagram',
  },
];

function createCard(item, type) {
  const typeConfig = publicationTypes[type];
  const title = escapeHtml(item.nome || 'Publicação sem título');
  const briefing = escapeHtml(item.briefing || 'Acesse a publicação original para saber mais.');
  const url = escapeHtml(item.url || '#');
  const cover = item.capa
    ? `<img src="${escapeHtml(item.capa)}" alt="" loading="lazy" decoding="async">`
    : `<span class="press-card__placeholder" aria-hidden="true">${typeConfig.placeholder}</span>`;

  const secondaryLink = item.secondaryUrl
    ? `<a class="press-card__link press-card__link--secondary" href="${escapeHtml(item.secondaryUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.secondaryLabel || 'Ver também')} <span aria-hidden="true">↗</span></a>`
    : '';

  return `<article class="press-card">
    <a class="press-card__media" href="${url}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">${cover}</a>
    <div class="press-card__content">
      <p class="press-card__type">${typeConfig.label}</p>
      <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
      <p>${briefing}</p>
      <a class="press-card__link" href="${url}" target="_blank" rel="noopener noreferrer">${typeConfig.action} <span aria-hidden="true">↗</span></a>
      ${secondaryLink}
    </div>
  </article>`;
}

function renderGroup(type, items) {
  const sectionId = publicationTypes[type].section;
  const section = document.querySelector(`#${sectionId}`);
  const grid = document.querySelector(`#${sectionId}-grid`);
  const count = document.querySelector(`#${sectionId}-count`);
  if (!items.length) return;

  section.hidden = false;
  grid.innerHTML = items.map((item) => createCard(item, type)).join('');
  count.textContent = `${items.length} ${items.length === 1 ? 'publicação' : 'publicações'}`;
}

function setupHeaderMenu() {
  const button = document.querySelector('#hamburger');
  const menu = document.querySelector('#mobile-menu');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = button.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
}

async function loadPublications() {
  const status = document.querySelector('#press-status');

  try {
    if (window.location.protocol === 'file:') {
      throw new Error('Abra esta página pelo Live Server para carregar o acervo local.');
    }

    const response = await fetch(new URL('data/destaques.json', document.baseURI));
    if (!response.ok) throw new Error(`Não foi possível carregar os dados (HTTP ${response.status}).`);
    const syncedData = await response.json();
    if (!Array.isArray(syncedData)) throw new Error('O arquivo de dados possui um formato inválido.');
    const data = [...localPublications, ...syncedData];

    const reportagens = data.filter((item) => normalizeType(item.tipo) === 'reportagem');
    const podcasts = data.filter((item) => normalizeType(item.tipo) === 'podcast');
    const videos = data.filter((item) => normalizeType(item.tipo) === 'video');
    const total = reportagens.length + podcasts.length + videos.length;

    document.querySelector('#total-publicacoes').textContent = String(total).padStart(2, '0');
    document.querySelector('#total-reportagens').textContent = String(reportagens.length).padStart(2, '0');
    document.querySelector('#total-podcasts').textContent = String(podcasts.length).padStart(2, '0');
    document.querySelector('#total-videos').textContent = String(videos.length).padStart(2, '0');

    renderGroup('reportagem', reportagens);
    renderGroup('podcast', podcasts);
    renderGroup('video', videos);

    status.hidden = total > 0;
    if (!total) status.textContent = 'Ainda não há publicações disponíveis.';
  } catch (error) {
    status.classList.add('press-status--error');
    status.textContent = error.message;
  }
}

setupHeaderMenu();
loadPublications();
