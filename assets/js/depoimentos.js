const depoimentosCursos = [
  {
    idioma: 'grego', idiomaNome: 'Grego', imagem: 'assets/depoimentos/1_grego.png',
    autor: 'Chaylla Mariângela Fraga Silva',
    texto: 'Apesar de ter sido apresentada ao grego através de um material bem redigido e uma professora apaixonada pelo assunto, acredito que o curso abriu portas para uma vontade maior de consumir conteúdos da língua e praticá-la.',
  },
  {
    idioma: 'grego', idiomaNome: 'Grego', imagem: 'assets/depoimentos/2_grego.png',
    autor: 'Inaê Dutra',
    texto: 'Eu gosto muito da cultura grega. Durante a pandemia, li Percy Jackson e me apaixonei. Quando vi no COLTEC que teria oficina de grego antigo, achei que seria maravilhoso. E foi.',
  },
  {
    idioma: 'italiano', idiomaNome: 'Italiano', imagem: 'assets/depoimentos/1_italiano.png',
    autor: 'Isabel Colen',
    texto: 'A professora é muito querida, auxilia no aprendizado e fala em italiano durante todo o curso.',
  },
  {
    idioma: 'italiano', idiomaNome: 'Italiano', imagem: 'assets/depoimentos/2_italiano.png',
    autor: 'Kamila Ramos Silva',
    texto: 'A professora sempre se esforçou para falar até mesmo português, tem uma ótima proficiência e é uma ótima professora. A cada aula eu entendia cada vez mais e adorava a professora.',
  },
  {
    idioma: 'japones', idiomaNome: 'Japonês', imagem: 'assets/depoimentos/1_japones.png',
    autor: 'Estudante da turma de japonês (2025/1)',
    texto: 'Participar das oficinas de Japonês no COLTEC foi muito interessante. Gostei do clima amigável da turma e de compartilhar os aprendizados. Cada aula me deixava com vontade de aprender mais.',
  },
  {
    idioma: 'latim', idiomaNome: 'Latim', imagem: 'assets/depoimentos/1_latim.png',
    autor: 'Noemy Batista da Silva',
    texto: 'Foi bem didático e divertido. Perceber o modo como o latim interfere na nossa vida até os dias de hoje é curioso e bastante interessante.',
  },
];

const depoimentosEmVideo = [
  {
    idioma: 'frances', idiomaNome: 'Francês', videoId: 'VRfMf7fcbqo',
    autor: 'Lorena', curso: 'Estudante · Desenvolvimento de Sistemas', grupo: 'estudantes',
  },
  {
    idioma: 'frances', idiomaNome: 'Francês', videoId: '90Rvchsx7vo',
    autor: 'Cauã', curso: 'Estudante · Eletrônica', grupo: 'estudantes',
  },
  {
    idioma: 'frances', idiomaNome: 'Francês', videoId: 'ukZgR2x6pYo',
    autor: 'Tatiane', curso: 'Ex-aluna do COLTEC · estudante de francês aos 49 anos', grupo: 'estudantes', destaque: true,
  },
  {
    idioma: 'frances', idiomaNome: 'Francês', videoId: 'szzoTTNc6hI',
    autor: 'Sarah', curso: 'Professora de francês', grupo: 'professoras',
  },
  {
    idioma: 'frances', idiomaNome: 'Francês', videoId: 'ghA5-FEz4yY',
    autor: 'Caroliny', curso: 'Professora de francês', grupo: 'professoras',
  },
  {
    idioma: 'italiano', idiomaNome: 'Italiano', videoId: 'b5ljQosrz5s',
    autor: 'Marilina', curso: 'Professora de italiano', grupo: 'professoras',
  },
];

function criarCardDepoimento(depoimento) {
  return `<figure class="depoimento-card">
    <img src="${depoimento.imagem}" alt="" loading="lazy" decoding="async">
    <figcaption>
      <span class="depoimento-idioma">${depoimento.idiomaNome}</span>
      <span class="depoimento-autor">${depoimento.autor}</span>
      <span class="sr-only">Depoimento: ${depoimento.texto}</span>
    </figcaption>
  </figure>`;
}

function criarCardVideo(depoimento) {
  const urlYoutube = `https://www.youtube.com/watch?v=${depoimento.videoId}`;
  const midia = window.location.protocol === 'file:'
    ? `<a class="depoimento-video-preview" href="${urlYoutube}" target="_blank" rel="noopener noreferrer" aria-label="Assistir ao depoimento de ${depoimento.autor} no YouTube">
        <img src="https://img.youtube.com/vi/${depoimento.videoId}/hqdefault.jpg" alt="Miniatura do depoimento de ${depoimento.autor}" loading="lazy">
        <span aria-hidden="true">▶</span>
      </a>`
    : `<iframe src="https://www.youtube.com/embed/${depoimento.videoId}?rel=0&origin=${encodeURIComponent(window.location.origin)}" title="Depoimento de ${depoimento.autor} sobre as oficinas de francês" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

  return `<article class="depoimento-video-card${depoimento.destaque ? ' depoimento-video-card--destaque' : ''}">
    <div class="depoimento-video-media">${midia}</div>
    <div class="depoimento-video-copy">
      ${depoimento.destaque ? '<span class="depoimento-inspirador">Uma história inspiradora</span>' : ''}
      <span class="depoimento-idioma">${depoimento.idiomaNome}</span>
      <p>Depoimento em vídeo</p>
      <h3>${depoimento.autor}</h3>
      <span>${depoimento.curso}</span>
      <a href="${urlYoutube}" target="_blank" rel="noopener noreferrer">Assistir no YouTube <b aria-hidden="true">↗</b></a>
    </div>
  </article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-depoimentos-section]').forEach((marcador) => {
    const idioma = marcador.dataset.idioma;
    const selecionados = idioma === 'todos'
      ? depoimentosCursos
      : depoimentosCursos.filter((depoimento) => depoimento.idioma === idioma);
    const videosSelecionados = idioma === 'todos'
      ? depoimentosEmVideo
      : depoimentosEmVideo.filter((depoimento) => depoimento.idioma === idioma);
    if (!selecionados.length && !videosSelecionados.length) {
      marcador.remove();
      return;
    }
    const titulo = idioma === 'todos' ? 'Quem participa, conta' : 'Depoimentos do curso';
    const introducao = idioma === 'todos'
      ? 'Conheça algumas experiências de estudantes que participaram das oficinas do projeto.'
      : 'Veja como estudantes descrevem sua experiência com as oficinas deste idioma.';
    marcador.outerHTML = `<section class="depoimentos-section" aria-labelledby="depoimentos-${idioma}">
      <h2 id="depoimentos-${idioma}" class="subtitulo">${titulo}</h2>
      <p class="depoimentos-intro">${introducao}</p>
      ${videosSelecionados.length ? (idioma === 'todos'
        ? ['estudantes', 'professoras'].map((grupo) => {
            const itens = videosSelecionados.filter((video) => video.grupo === grupo);
            if (!itens.length) return '';
            return `<div class="depoimentos-grupo"><h3>${grupo === 'estudantes' ? 'Vozes de estudantes' : 'Vozes de professoras'}</h3><div class="depoimentos-videos">${itens.map(criarCardVideo).join('')}</div></div>`;
          }).join('')
        : `<div class="depoimentos-videos">${videosSelecionados.map(criarCardVideo).join('')}</div>`) : ''}
      ${selecionados.length && videosSelecionados.length ? '<h3 class="depoimentos-subheading">Mais experiências compartilhadas</h3>' : ''}
      ${selecionados.length ? `<div class="depoimentos-grid">${selecionados.map(criarCardDepoimento).join('')}</div>` : ''}
    </section>`;
  });
});
