(() => {
  const slot = document.querySelector('[data-site-header]');
  if (!slot) return;
  slot.outerHTML = `<header>
    <div class="header-inner">

      <!-- LOGO -->
      <a href="index.html" class="logo">
        <svg class="logo-mark" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Línguas - Culturas" role="img">
          <g transform="translate(40,40)">
            <polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#E0196A" stroke-width="2.2" stroke-linejoin="round"/>
            <g transform="rotate(60)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#F27B22" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(120)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#0DC9A2" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(180)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#3B9EE8" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(240)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#8C5CF7" stroke-width="2.2" stroke-linejoin="round"/></g>
            <g transform="rotate(300)"><polygon points="0,-34 10,-12 0,-8 -10,-12" fill="none" stroke="#C2E020" stroke-width="2.2" stroke-linejoin="round"/></g>
            <circle cx="0" cy="0" r="2" fill="#ffffff" stroke="#ccc" stroke-width="0.5"/>
          </g>
        </svg>
        <div>
          <span class="logo-name">Línguas - Culturas</span>
          <span class="logo-sub">COLTEC · UFMG</span>
        </div>
      </a>

      <!-- NAV DESKTOP -->
      <nav>

        <div class="nav-item">
          <div class="nav-link">
            Línguas
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown languages">
            <div class="dd-section-label">Idiomas do projeto</div>
            <div class="lang-grid">
              <a class="lang-chip" href="idioma-espanhol.html">Espanhol</a>
              <a class="lang-chip" href="idioma-mandarim.html">Mandarim</a>
              <a class="lang-chip" href="id-frances.html">Francês</a>
              <a class="lang-chip" href="idioma-japones.html">Japonês</a>
              <a class="lang-chip" href="idioma-italiano.html">Italiano</a>
              <a class="lang-chip" href="idioma-latim.html">Latim</a>
              <a class="lang-chip" href="idioma-grego.html">Grego</a>
            </div>
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-link">
            Tareas de Casa
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown">
            <a class="dropdown-link" href="para-casa.html#trimestre-1">1º Trimestre</a>
            <a class="dropdown-link" href="para-casa.html#trimestre-2">2º Trimestre</a>
            <a class="dropdown-link" href="para-casa.html#trimestre-3">3º Trimestre</a>
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-link">
            Publicações
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown">
            <a class="dropdown-link" href="em-construcao.html">Livro teórico</a>
            <a class="dropdown-link" href="https://sites.google.com/teiacoltec.org/francophonart/accueil?authuser=0">Site Francês</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-link" href="biblioteca_digital.html">E-Books</a>
            <a class="dropdown-link" href="videoblogs.html">Videoblogs</a>
            <a class="dropdown-link" href="reportagens.html">Publicações na mídia</a>
            <a class="dropdown-link" href="premios.html">Prêmios</a>
          </div>
        </div>

        <div class="nav-item">
          <div class="nav-link">
            Exposições
            <svg class="chevron" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="dropdown">
            <a class="dropdown-link" href="yoartista2025.html">Yo Artista 2025</a>
            <a class="dropdown-link" href="yoartista2026.html">Yo Artista 2026</a>
          </div>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="eventos-formacao-docente.html">Eventos de Formação Docente</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="equipe.html">Projeto e equipe</a>
        </div>

        <div class="nav-item">
          <a class="nav-link" href="https://www.instagram.com/espanholcoltec/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do projeto Línguas-Culturas" title="Instagram">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/>
            </svg>
          </a>
        </div>

      </nav>

      <!-- HAMBÚRGUER (só mobile) -->
      <button class="hamburger" id="hamburger" type="button" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- MENU MOBILE -->
    <div class="mobile-menu" id="mobile-menu">

      <details class="mobile-group">
        <summary>
          Línguas
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="idioma-espanhol.html">Espanhol</a>
          <a href="idioma-mandarim.html">Mandarim</a>
          <a href="id-frances.html">Francês</a>
          <a href="idioma-japones.html">Japonês</a>
          <a href="idioma-italiano.html">Italiano</a>
          <a href="idioma-latim.html">Latim</a>
          <a href="idioma-grego.html">Grego</a>
        </div>
      </details>

      <details class="mobile-group">
        <summary>
          Tareas de Casa
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="para-casa.html#trimestre-1">1º Trimestre</a>
          <a href="para-casa.html#trimestre-2">2º Trimestre</a>
          <a href="para-casa.html#trimestre-3">3º Trimestre</a>
        </div>
      </details>

      <details class="mobile-group">
        <summary>
          Publicações
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="em-construcao.html">Livro teórico</a>
          <a href="id-frances.html">Site Francês</a>
          <a href="biblioteca_digital.html">E-Books</a>
          <a href="videoblogs.html">Videoblogs</a>
          <a href="reportagens.html">Publicações na mídia</a>
          <a href="premios.html">Prêmios</a>
        </div>
      </details>

      <details class="mobile-group">
        <summary>
          Exposições
          <svg viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="mobile-sub">
          <a href="yoartista2025.html">Yo Artista 2025</a>
          <a href="yoartista2026.html">Yo Artista 2026</a>
        </div>
      </details>

      <a class="mobile-link" href="eventos-formacao-docente.html">Eventos de Formação Docente</a>

      <a class="mobile-link" href="equipe.html">Projeto e equipe</a>
      <a class="mobile-link" href="https://www.instagram.com/espanholcoltec/" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/>
          <circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/>
        </svg>
        Instagram
      </a>

    </div>
  </header>
  `;
})();
