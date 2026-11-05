(() => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      hamburger.setAttribute('aria-expanded', String(open));
    });
  }

  const gallery = document.getElementById('gallery');
  const count = document.getElementById('count');
  const search = document.getElementById('search');
  const emptyState = document.getElementById('empty-state');
  const audioPlayer = document.getElementById('audio-player');
  const lightbox = document.getElementById('art-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxClose = document.getElementById('lightbox-close');
  let activeButton = null;
  let renderedItems = [];

  const playIcon = () => `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
      <path d="M10 8.8v6.4c0 .5.6.8 1 .5l5-3.2c.4-.3.4-.8 0-1.1l-5-3.2c-.4-.2-1 .1-1 .6Z" fill="currentColor"></path>
    </svg>`;

  function render(items) {
    renderedItems = items;
    gallery.innerHTML = items.map((obra, index) => `
      <article class="art-card">
        <figure class="art-media">
          <button class="art-image-button" type="button" data-image-index="${index}" aria-label="Ampliar pintura de ${obra.autor}">
            <img src="${obra.imagem}" alt="Pintura de ${obra.autor}" loading="lazy">
          </button>
        </figure>
        <div class="art-copy">
          <h2 class="art-title">${obra.autor}</h2>
          <span class="class-chip">${obra.turma ? `Turma: ${obra.turma}` : obra.contexto}</span>
          <button class="audio-button" type="button" data-audio="${obra.audio || ''}" data-empty="${obra.audio ? 'false' : 'true'}" aria-label="Reproduzir áudio da obra de ${obra.autor}">
            ${playIcon()}
            <span>${obra.audio ? 'Ouvir áudio' : 'Áudio em breve'}</span>
          </button>
        </div>
      </article>`).join('');

    count.textContent = `${items.length} ${items.length === 1 ? 'obra' : 'obras'} na galeria`;
    emptyState.classList.toggle('show', items.length === 0);
  }

  function normalize(value) {
    return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  search.addEventListener('input', () => {
    const term = normalize(search.value.trim());
    render(yoArtistaObras2026.filter((obra) => normalize(`${obra.autor} ${obra.turma}`).includes(term)));
  });

  gallery.addEventListener('click', (event) => {
    const imageButton = event.target.closest('.art-image-button');
    if (imageButton) {
      const obra = renderedItems[Number(imageButton.dataset.imageIndex)];
      if (!obra) return;
      lightboxImage.src = obra.imagem;
      lightboxImage.alt = `Pintura de ${obra.autor}`;
      lightboxTitle.textContent = obra.autor;
      lightbox.showModal();
      return;
    }

    const button = event.target.closest('.audio-button');
    if (!button) return;
    const src = button.dataset.audio;
    if (!src) return;

    if (activeButton && activeButton !== button) {
      activeButton.querySelector('span').textContent = 'Ouvir áudio';
    }

    if (audioPlayer.dataset.src === src && !audioPlayer.paused) {
      audioPlayer.pause();
      button.querySelector('span').textContent = 'Ouvir áudio';
    } else {
      audioPlayer.src = src;
      audioPlayer.dataset.src = src;
      audioPlayer.play().catch(() => {
        button.querySelector('span').textContent = 'Não foi possível reproduzir';
      });
      button.querySelector('span').textContent = 'Pausar áudio';
      activeButton = button;
    }
  });

  audioPlayer.addEventListener('ended', () => {
    if (activeButton) activeButton.querySelector('span').textContent = 'Ouvir áudio';
  });

  lightboxClose.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImage.src = '';
    lightboxImage.alt = '';
    lightboxTitle.textContent = '';
  });

  render(yoArtistaObras2026);
})();
