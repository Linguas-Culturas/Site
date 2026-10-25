const idiomas = {
  espanhol: {
    nome: 'Espanhol', efeito: 'Língua, arte e América Latina', cor: '#b63a42',
    apresentacao: 'No Línguas - Culturas, o espanhol é uma porta para as múltiplas vozes da América Latina, da Espanha e das comunidades hispanofalantes. As propostas articulam língua, arte, circulação de ideias e experiências de internacionalização.',
    banner: 'assets/fotos-espanhol/espanhol_abertura.jpeg',
    bannerAlt: 'Ipê-rosa florido no campus da UFMG',
    curiosidades: [
      { numero: 630, prefixo: '+', texto: 'Milhões de usuários potenciais no mundo', icone: 'pessoas' },
      { numero: 500, prefixo: '+', texto: 'Milhões de falantes com domínio nativo', icone: 'dialogo' },
      { numero: 20, texto: 'Países soberanos têm o espanhol como língua oficial', icone: 'globo' },
      { titulo: 'ONU', texto: 'Integra o grupo das seis línguas oficiais da organização', icone: 'onu' },
    ],
    materiais: [{ titulo: 'Internacionalização e aprendizado de espanhol', descricao: 'Leitura de apoio sobre experiências de aprendizagem em espanhol.', capa: 'assets/capas/LIVRO_CONVERSAS.jpeg', link: 'em-construcao.html' }],
    projeto: { titulo: 'Exposição Yo Artista', texto: 'Conheça a exposição de produções artísticas desenvolvidas por estudantes nas aulas de espanhol.', imagem: 'assets/imagens/yo_artista.png', link: 'yoartista2025.html' },
  },
  mandarim: {
    nome: 'Mandarim', efeito: 'Escuta, escrita e encontros culturais', cor: '#9e2c2c',
    apresentacao: 'As atividades de mandarim convidam a conhecer modos de escrita, pronúncia e práticas culturais ligadas às comunidades de língua chinesa. O percurso valoriza curiosidade, escuta e aproximações cuidadosas entre contextos culturais.',
    banner: 'assets/fotos-mandarim/int_china.jpg',
    bannerAlt: 'Estudantes e professores reunidos na Competição de Proficiência em Língua Chinesa de 2025',
    apresentacaoImagem: 'assets/fotos-mandarim/mandarim1.jpeg',
    apresentacaoAlt: 'Aula de mandarim com estudantes do COLTEC',
    ocultarMateriais: true,
    curiosidades: [
      { titulo: '+1 bilhão', texto: 'De falantes nativos', icone: 'pessoas' },
      { titulo: '4 + 1', texto: 'Quatro tons principais e um tom neutro podem alterar o significado das palavras', icone: 'som' },
      { titulo: '汉字', texto: 'Os caracteres representam unidades de significado, não letras de um alfabeto', icone: 'escrita' },
      { titulo: 'ONU', texto: 'O chinês é uma das seis línguas oficiais', icone: 'onu' },
    ],
    materiais: [],
    videos: [
      { id: 'UfIPVEc12aA', embed: 'https://www.youtube.com/embed/UfIPVEc12aA?si=80GwDDz3La_HnPJL', titulo: 'Intercâmbio 2026: teaser', descricao: 'Um minuto para conhecer os primeiros momentos dessa experiência internacional.', destaque: true, etiqueta: 'Em destaque · 1 minuto' },
      { id: 'fsrPLzWOcLc', embed: 'https://www.youtube.com/embed/fsrPLzWOcLc?si=NcH5HbPWdU9OutnF', titulo: 'Intercâmbio 2026: experiência completa', descricao: 'Um registro mais completo das vivências, dos encontros e dos aprendizados do intercâmbio.', etiqueta: 'Intercâmbio' },
      { id: 'tK7rlQSG158', embed: 'https://www.youtube.com/embed/tK7rlQSG158?si=s8ialLlyCq13PC_9', titulo: 'Instituto Confúcio UFMG', descricao: 'Um registro da parceria e das ações de difusão da língua e da cultura chinesas.', etiqueta: 'Acervo' },
      { id: 'iN7JHNAhEtg', embed: 'https://www.youtube.com/embed/iN7JHNAhEtg?si=5tp3cWm_BYO_DOdT', titulo: 'Instituto Confúcio UFMG 2', descricao: 'Mais um registro das atividades e experiências promovidas pelo Instituto Confúcio na UFMG.', etiqueta: 'Acervo' },
      { id: '9i5OOKh5ygo', embed: 'https://www.youtube.com/embed/9i5OOKh5ygo?si=gvQ-QZ8Vw5ftr8ag', titulo: 'Oficina Chinese Knot no COLTEC', descricao: 'Uma oficina cultural realizada com estudantes do COLTEC.', etiqueta: 'Acervo' },
    ],
    galeria: [
      { src: 'assets/fotos-mandarim/mandarim4.jpeg', alt: 'Estudantes utilizando carimbos chineses durante uma atividade em sala', legenda: 'Escrita e cultura em sala', classe: 'foto-grande' },
      { src: 'assets/fotos-mandarim/mandarim2.jpeg', alt: 'Caderno com impressão de um carimbo chinês vermelho', legenda: 'Marcas da aprendizagem', classe: 'foto' },
      { src: 'assets/fotos-mandarim/mandarim3.jpeg', alt: 'Estudante experimentando um carimbo chinês no caderno', legenda: 'Experimentação e descoberta', classe: 'foto' },
      { src: 'assets/fotos-mandarim/mandarim6.jpg', alt: 'Estudante apresentando um texto em mandarim durante competição de proficiência', legenda: 'Mandarim além da sala de aula', classe: 'foto-vertical' },
    ],
  },
  japones: {
    nome: 'Japonês', efeito: 'Escrita, narrativas e culturas do Japão', cor: '#ad3646',
    apresentacao: 'O japonês aproxima estudantes de sistemas de escrita, sonoridades e manifestações culturais do Japão. A aprendizagem combina observação, experimentação e diálogo com produções artísticas, narrativas e práticas do cotidiano.',
    banner: 'assets/banners/banner_japones.jpeg',
    bannerAlt: 'Ipê-rosa florido no campus da UFMG',
    curiosidades: [
      { numero: 3, texto: 'Sistemas de escrita convivem: hiragana, katakana e kanji', icone: 'escrita' },
      { titulo: '≈125 milhões', texto: 'De falantes, principalmente no Japão', icone: 'pessoas' },
      { titulo: 'Keigo', texto: 'A gramática e o vocabulário marcam diferentes níveis de respeito e formalidade', icone: 'dialogo' },
      { titulo: '2,7 milhões', texto: 'De descendentes de japoneses vivem no Brasil, a maior comunidade nikkei fora do Japão', icone: 'globo' },
    ],
    materiais: [{ titulo: 'Japonês I', descricao: 'Material didático do projeto para as primeiras experiências com a língua.', capa: 'assets/capas/Japonês.png', link: 'https://www.canva.com/design/DAGtP_79ueA/U49dBBzpc4t1j-dWX_SzJw/watch' }],
  },
  italiano: {
    nome: 'Italiano', efeito: 'Memória, arte e situações de comunicação', cor: '#16845b',
    apresentacao: 'O italiano permite investigar encontros entre língua, memória, deslocamentos, arte e cotidiano. As propostas de aprendizagem podem partir de situações comunicativas e de repertórios culturais diversos, sempre em diálogo com a experiência dos estudantes.',
    banner: 'assets/banners/banner_italiano.jpeg',
    bannerAlt: 'Estudantes exibindo pinturas produzidas em uma atividade cultural',
    curiosidades: [
      { titulo: 'Origem latina', texto: 'O italiano é uma língua românica desenvolvida a partir do latim falado', icone: 'idiomas' },
      { titulo: 'Dante', texto: 'O prestígio de sua obra em toscano ajudou a formar a base do italiano padrão', icone: 'livro' },
      { titulo: 'Música', texto: 'Allegro, piano, forte e soprano difundiram o italiano nas partituras do mundo', icone: 'musica' },
      { titulo: 'Suíça', texto: 'O italiano é uma das línguas oficiais da Confederação Suíça', icone: 'globo' },
    ],
    materiais: [{ titulo: 'Le mie ricette', descricao: 'Material didático que explora a língua italiana a partir de repertórios culinários.', capa: 'assets/capas/italiano.jpg', link: 'https://canva.link/j2bdy8hd3iyn6xa' }],
  },
  latim: {
    nome: 'Latim', efeito: 'Palavras, histórias e mundos antigos', cor: '#962b2b',
    apresentacao: 'Nas oficinas de latim, a língua é o ponto de partida para uma viagem pela Roma Antiga. Textos, atividades de tradução, literatura, mitologia e situações do cotidiano aproximam os estudantes de um patrimônio que ainda vive no português e em muitas outras línguas. O percurso combina leitura, descoberta e imaginação para mostrar que estudar latim também é compreender melhor as palavras, as ideias e as histórias que chegaram até nós.',
    banner: 'assets/banners/banner_latim.jpeg',
    bannerAlt: 'Área externa do COLTEC cercada por árvores',
    apresentacaoImagem: 'assets/fotos-latim/IMG_4103.webp',
    apresentacaoAlt: 'Estudantes realizando uma atividade de tradução em seus materiais de latim',
    curiosidades: [
      { numero: 2000, prefixo: '+', texto: 'Anos de tradição escrita preservada em inscrições, manuscritos e livros', icone: 'manuscrito' },
      { titulo: 'Línguas românicas', texto: 'Português, espanhol, francês, italiano e romeno se desenvolveram do latim', icone: 'idiomas' },
      { titulo: 'Santa Sé', texto: 'Ainda publica documentos oficiais e mantém uma versão de seu site em latim', icone: 'livro' },
      { titulo: 'Ciência & Direito', texto: 'Expressões e raízes latinas seguem produtivas nessas áreas', icone: 'ciencia' },
    ],
    materiais: [{ titulo: 'Passaporte para a Roma Antiga', descricao: 'Material didático para explorar a cultura e a língua latina.', capa: 'assets/capas/Latim.png', link: 'https://www.canva.com/design/DAG1BTAJ6g4/Dkw4XLGzykUfz0pf45yYiQ/view' }],
    prefacio: {
      titulo: 'Um convite à Roma Antiga',
      trecho: 'Este material é um convite para você, aluno do Coltec, embarcar em rápida e proveitosa viagem rumo à Roma Antiga.',
      contexto: 'O prefácio apresenta o percurso como uma travessia pela língua, pela história, pela literatura e pela cultura — de César e o latim às comédias, aos mitos e aos poetas romanos.',
      autora: 'Heloísa Maria Moraes Moreira Penna',
      credito: 'Professora titular de Latim da FALE/UFMG',
    },
    galeria: [
      { src: 'assets/fotos-latim/IMG_4094.webp', alt: 'Aula de latim com anotações de vocabulário e tradução no quadro', legenda: 'A língua em contexto', classe: 'foto-grande' },
      { src: 'assets/fotos-latim/IMG_4096.webp', alt: 'Professora conduzindo uma explicação de latim diante do quadro', legenda: 'Leitura e mediação', classe: 'foto' },
      { src: 'assets/fotos-latim/IMG_4101.webp', alt: 'Estudante consultando uma atividade de tradução em latim', legenda: 'Do texto à tradução', classe: 'foto' },
      { src: 'assets/fotos-latim/IMG_4097.webp', alt: 'Professora escrevendo palavras em latim no quadro durante a aula', legenda: 'Palavras em movimento', classe: 'foto-vertical' },
    ],
  },
  grego: {
    nome: 'Grego Antigo', efeito: 'Alfabeto, narrativas e pensamento', cor: '#31739c',
    apresentacao: 'O grego antigo aproxima os estudantes de uma tradição que atravessa língua, mitologia, teatro, filosofia e ciência. As oficinas apresentam o alfabeto, aspectos da gramática e histórias do mundo antigo de forma leve e investigativa, com leituras, jogos, imagens e atividades coletivas. Mais do que observar palavras do passado, a proposta é reconhecer ideias e narrativas que continuam circulando no presente.',
    banner: 'assets/banners/banner_grego.jpeg',
    bannerAlt: 'Estojo de aquarela usado em uma atividade artística',
    apresentacaoImagem: 'assets/fotos-grego/IMG-20240701-WA0008.webp',
    apresentacaoAlt: 'Oficina de grego antigo com estudantes acompanhando uma explicação em sala',
    curiosidades: [
      { numero: 3000, prefixo: '+', texto: 'Anos de tradição escrita, desde os registros micênicos até hoje', icone: 'manuscrito' },
      { numero: 24, texto: 'Letras formam o alfabeto grego usado desde a Antiguidade clássica', icone: 'alfabeto' },
      { titulo: 'Ciência', texto: 'Letras e raízes gregas nomeiam conceitos da matemática, medicina e filosofia', icone: 'ciencia' },
      { titulo: 'Vogais', texto: 'O alfabeto grego adaptou o modelo fenício e passou a representar vogais explicitamente', icone: 'escrita' },
    ],
    materiais: [{ titulo: 'Grego Antigo', descricao: 'Material didático do projeto para a iniciação à língua e às culturas gregas.', capa: 'assets/capas/Grego Antigo.png', link: 'https://www.canva.com/design/DAGtP-W00qU/gAGPW6OIVhLmpRs0b24SXg/view' }],
    prefacio: {
      titulo: 'Uma viagem ao Mundo Antigo',
      trecho: 'A viagem ao Mundo Antigo se inicia com uma propedêutica leve, lições e histórias de um mundo fascinante.',
      contexto: 'O prefácio destaca a combinação entre língua, alfabeto, gramática, mitologia e jogos de palavras, com personagens como Héracles, Afrodite e Polifemo acompanhando a aprendizagem.',
      autora: 'Tereza Virgínia Ribeiro Barbosa',
      credito: 'Autora do prefácio do material de Grego Antigo',
    },
    galeria: [
      { src: 'assets/fotos-grego/20240711_164850.webp', alt: 'Mural da oficina de grego com fotografias, atividades e palavras em grego', legenda: 'Memórias da oficina', classe: 'foto-grande' },
      { src: 'assets/fotos-grego/IMG-20240924-WA0025.webp', alt: 'Aula de grego antigo com explicações de vocabulário e declinação no quadro', legenda: 'Alfabeto e gramática', classe: 'foto' },
      { src: 'assets/fotos-grego/IMG-20240924-WA0028.webp', alt: 'Professora de grego diante de uma apresentação sobre o nascimento de Héracles', legenda: 'Mitos em sala de aula', classe: 'foto' },
      { src: 'assets/fotos-grego/IMG-20240827-WA0006.webp', alt: 'Turma reunida em uma confraternização da oficina de grego antigo', legenda: 'Aprender também é conviver', classe: 'foto-vertical' },
    ],
  },
};

const icones = {
  globo: 'assets/icons/noun-globe-8346924.png',
  pessoas: 'assets/icons/noun-people-6426018.png',
  formacao: 'assets/icons/noun-graduation-2626819.png',
  onu: 'assets/icons/Logo_of_the_United_Nations_(B&W).svg.png',
  dialogo: '<svg viewBox="0 0 64 64" fill="none"><path d="M10 15h44v29H29L17 54V44h-7V15Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M20 26h24M20 34h16" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  som: '<svg viewBox="0 0 64 64" fill="none"><path d="M13 36h10l13 11V17L23 28H13v8Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M44 25c4 4 4 10 0 14M50 19c8 8 8 18 0 26" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  escrita: '<svg viewBox="0 0 64 64" fill="none"><path d="M15 49h34M20 42l5-18 14-9 10 10-9 14-18 5-2-2Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="m25 24 15 15M22 44l10-10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  idiomas: '<svg viewBox="0 0 64 64" fill="none"><circle cx="24" cy="27" r="16" stroke="currentColor" stroke-width="4"/><path d="M8 27h32M24 11c4 4 7 10 7 16s-3 12-7 16c-4-4-7-10-7-16s3-12 7-16Z" stroke="currentColor" stroke-width="4"/><path d="M38 35h16M46 30v19M40 47l6-12 7 12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  livro: '<svg viewBox="0 0 64 64" fill="none"><path d="M10 14h16c5 0 8 3 8 8v30c0-5-3-8-8-8H10V14Zm44 0H42c-5 0-8 3-8 8v30c0-5 3-8 8-8h12V14Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>',
  musica: '<svg viewBox="0 0 64 64" fill="none"><path d="M27 45V17l25-5v28" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="18" cy="46" rx="9" ry="6" stroke="currentColor" stroke-width="4"/><ellipse cx="43" cy="41" rx="9" ry="6" stroke="currentColor" stroke-width="4"/><path d="M27 25l25-5" stroke="currentColor" stroke-width="4"/></svg>',
  manuscrito: '<svg viewBox="0 0 64 64" fill="none"><path d="M18 10h31v35c0 6-4 9-9 9H18c-5 0-9-4-9-9s4-9 9-9h31" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M18 10v34M26 21h15M26 29h12" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  ciencia: '<svg viewBox="0 0 64 64" fill="none"><path d="M24 10h16M28 10v16L15 48c-2 4 1 7 5 7h24c4 0 7-3 5-7L36 26V10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 42h22M27 35h10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',
  alfabeto: '<svg viewBox="0 0 64 64" fill="none"><path d="M12 50 27 14l15 36M18 37h18M40 18h13M47 18v32" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

function iconeCuriosidade(curiosidade) {
  const icone = icones[curiosidade.icone];
  if (icone?.startsWith('<svg')) return `<span class="info-icone info-icone-vetor" aria-hidden="true">${icone}</span>`;
  if (icone) return `<img src="${icone}" alt="" class="info-icone">`;
  if (curiosidade.simbolo) return `<span class="info-icone info-icone-texto" aria-hidden="true">${curiosidade.simbolo}</span>`;
  return `<span class="info-icone info-icone-vetor" aria-hidden="true">${icones.livro}</span>`;
}

function cardInfo(curiosidade) {
  const titulo = curiosidade.numero === undefined
    ? `<h3>${curiosidade.titulo}</h3>`
    : `<h3 class="numero" data-final="${curiosidade.numero}" data-prefixo="${curiosidade.prefixo || ''}" data-sufixo="${curiosidade.sufixo || ''}">0</h3>`;
  return `<div class="info">${iconeCuriosidade(curiosidade)}${titulo}<p>${curiosidade.texto}</p></div>`;
}

function materiais(idioma) {
  if (!idioma.materiais.length) return '<p class="materiais-vazios">Os materiais didáticos deste idioma estão em preparação. Acompanhe as novidades por aqui.</p>';
  const principal = idioma.materiais[0];
  const miniaturas = idioma.materiais.map((material, indice) => `<a class="miniatura${indice === 0 ? ' ativa' : ''}" href="${material.link}" data-titulo="${material.titulo}" data-img="${material.capa}" data-link="${material.link}" data-desc="${material.descricao}"><img class="capa-miniatura" src="${material.capa}" alt="Capa de ${material.titulo}"><h3>${material.titulo}</h3></a>`).join('');
  return `<div class="material-destaque"><div class="capa-container"><a id="link-destaque" href="${principal.link}" target="_blank" rel="noopener noreferrer"><img id="img-destaque" class="capa-destaque" src="${principal.capa}" alt="Capa de ${principal.titulo}"><div class="overlay"><span class="button">Ver material</span></div></a></div><div class="texto-destaque"><h3 id="titulo-destaque">${principal.titulo}</h3><p id="descricao-destaque">${principal.descricao}</p><a id="botao-destaque" class="botao-destaque" href="${principal.link}" target="_blank" rel="noopener noreferrer">Acessar material</a></div></div><div class="grade-miniaturas">${miniaturas}</div>`;
}

function galeria(idioma) {
  if (idioma.galeria?.length === 4) {
    const [grande, quadradaUm, quadradaDois, vertical] = idioma.galeria;
    const foto = (item) => `<figure class="${item.classe}"><img src="${item.src}" alt="${item.alt}" loading="lazy"><figcaption class="overlay"><h3>${item.legenda}</h3></figcaption></figure>`;
    return `<section class="galeria"><h1 class="subtitulo">Galeria</h1><div class="galeria-grid">${foto(grande)}<div class="galeria-coluna">${foto(quadradaUm)}${foto(quadradaDois)}</div>${foto(vertical)}</div></section>`;
  }
  const placeholder = (classe, texto) => `<div class="${classe}"><div class="idioma-placeholder-foto">${texto}</div><div class="overlay"><h3>Registro em breve</h3></div></div>`;
  return `<section class="galeria"><h1 class="subtitulo">Galeria</h1><div class="galeria-grid">${placeholder('foto-grande', 'Imagem grande em atualização')}<div class="galeria-coluna">${placeholder('foto', 'Imagem quadrada em atualização')}${placeholder('foto', 'Imagem quadrada em atualização')}</div>${placeholder('foto-vertical', 'Imagem vertical em atualização')}</div></section>`;
}

function videos(idioma) {
  if (!idioma.videos?.length) return '';
  const cards = idioma.videos.map((video) => `<article class="video-card${video.destaque ? ' video-card--destaque' : ''}"><div class="video-embed"><iframe width="560" height="315" src="${video.embed || `https://www.youtube.com/embed/${video.id}`}" title="${video.titulo}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="video-copy"><p>${video.etiqueta}</p><h3>${video.titulo}</h3><span>${video.descricao}</span><a href="https://youtu.be/${video.id}" target="_blank" rel="noopener noreferrer">Assistir no YouTube <b aria-hidden="true">↗</b></a></div></article>`).join('');
  return `<section class="videos-idioma" aria-labelledby="videos-title"><div class="videos-cabecalho"><div><p class="videos-kicker">Encontros em movimento</p><h2 id="videos-title">Vivências em vídeo</h2></div><p>Do cotidiano das aulas ao intercâmbio internacional, acompanhe alguns momentos da trajetória do mandarim no projeto.</p></div><div class="videos-grid">${cards}</div></section>`;
}

function prefacio(idioma) {
  if (!idioma.prefacio) return '';
  const { titulo, trecho, contexto, autora, credito } = idioma.prefacio;
  return `<section class="prefacio-livro" aria-labelledby="prefacio-title"><div class="prefacio-marca" aria-hidden="true">“</div><div class="prefacio-conteudo"><p class="prefacio-kicker">Do prefácio do material</p><h2 id="prefacio-title">${titulo}</h2><blockquote><p>${trecho}</p></blockquote><p class="prefacio-contexto">${contexto}</p><p class="prefacio-autoria"><strong>${autora}</strong><span>${credito}</span></p></div></section>`;
}

function imagemBanner(idioma) {
  if (idioma.banner) return `<img class="imgBanner" src="${idioma.banner}" alt="${idioma.bannerAlt || ''}">`;
  return '<div class="imgBanner idioma-banner-placeholder">Imagem do idioma em atualização</div>';
}

function imagemApresentacao(idioma) {
  if (idioma.apresentacaoImagem) return `<img src="${idioma.apresentacaoImagem}" alt="${idioma.apresentacaoAlt || `Atividade de ${idioma.nome}`}">`;
  return '<div class="idioma-placeholder-foto">Imagem e registros das atividades<br>em atualização</div>';
}

function explorar(idAtual) {
  const destinos = [['espanhol', 'Espanhol'], ['mandarim', 'Mandarim'], ['frances', 'Francês'], ['japones', 'Japonês'], ['italiano', 'Italiano'], ['latim', 'Latim'], ['grego', 'Grego']].filter(([id]) => id !== idAtual);
  return destinos.map(([id, nome]) => `<a href="${id === 'frances' ? 'id-frances.html' : `idioma-${id}.html`}" class="circulo ${id}"><div class="circulo-inner"><div class="frente">${nome}</div><div class="verso"></div></div></a>`).join('');
}

function iniciarCuriosidades(raiz) {
  const cards = raiz.querySelectorAll('.curiosidades .info');
  const revelar = (card) => {
    card.classList.add('visivel');
    const numero = card.querySelector('.numero');
    if (!numero) return;
    const final = Number(numero.dataset.final);
    const prefixo = numero.dataset.prefixo || '';
    const sufixo = numero.dataset.sufixo || '';
    const inicio = performance.now();
    const atualizar = (agora) => {
      const progresso = Math.min((agora - inicio) / 1200, 1);
      numero.textContent = `${prefixo}${Math.round(final * progresso)}${sufixo}`;
      if (progresso < 1) requestAnimationFrame(atualizar);
    };
    requestAnimationFrame(atualizar);
  };
  if (!('IntersectionObserver' in window)) {
    cards.forEach(revelar);
    return;
  }
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      revelar(entrada.target);
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.2 });
  cards.forEach((card) => observador.observe(card));
}

function renderizarPaginaIdioma() {
  const id = document.body.dataset.idioma;
  const idioma = idiomas[id];
  const raiz = document.getElementById('conteudo-idioma');
  if (!idioma || !raiz) return;
  document.documentElement.style.setProperty('--accent', idioma.cor);
  document.title = `${idioma.nome} — Línguas e Culturas`;
  const projeto = idioma.projeto ? `<section class="projeto-destaque"><a href="${idioma.projeto.link}"><img src="${idioma.projeto.imagem}" alt="Imagem da ${idioma.projeto.titulo}"><div><p>Projeto em destaque</p><h2>${idioma.projeto.titulo}</h2><p>${idioma.projeto.texto}</p></div></a></section>` : '';
  const secaoMateriais = idioma.ocultarMateriais ? '' : `<section class="materiais"><h1 class="subtitulo">Materiais e publicações</h1>${materiais(idioma)}</section>`;
  const iconePessoas = '<svg viewBox="0 0 24 24" fill="none"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.8"/><path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 19c.6-3.2 2.1-5 4.5-5s3.9 1.8 4.5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M11.5 19c.6-3.2 2.1-5 4.5-5s3.9 1.8 4.5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
  const iconeGlobo = '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 12h17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 3c2.3 2.4 3.4 5.4 3.4 9S14.3 18.6 12 21c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3Z" stroke="currentColor" stroke-width="1.8"/></svg>';
  raiz.innerHTML = `<section class="banner">${imagemBanner(idioma)}<h1 class="titulo">${idioma.nome}</h1></section><section class="descricao"><h1 class="subtitulo">Sobre o idioma</h1><div class="presentation"><div class="presImg">${imagemApresentacao(idioma)}</div><div class="presContent"><p class="presEffect">${idioma.efeito}</p><p class="text">${idioma.apresentacao}</p></div></div></section><section class="curiosidades">${idioma.curiosidades.map(cardInfo).join('')}</section>${projeto}${secaoMateriais}${prefacio(idioma)}${videos(idioma)}${galeria(idioma)}<div data-depoimentos-section data-idioma="${id}"></div><section class="cta-inscricao"><div class="cta-card"><div class="cta-icone" aria-hidden="true">${iconePessoas}</div><div class="cta-texto"><h2>Gostou do ${idioma.nome}?</h2><p>Participe gratuitamente das oficinas do projeto Línguas e Culturas. Aprenda, compartilhe experiências e descubra o mundo pelo idioma.</p></div><a class="cta-botao" href="em-construcao.html">Quero participar</a></div></section><section class="explorar-idiomas"><div class="explorar-card"><div class="idiomas-icone" aria-hidden="true">${iconeGlobo}</div><div class="explorar-texto"><h2>Explore outros idiomas</h2><p>Cada língua abre uma nova janela para o mundo. Conheça também as outras frentes do projeto.</p></div><div class="filtro-idiomas">${explorar(id)}</div></div></section>`;
  iniciarCuriosidades(raiz);
  raiz.querySelectorAll('.miniatura').forEach((miniatura) => miniatura.addEventListener('click', (evento) => {
    evento.preventDefault();
    raiz.querySelector('.miniatura.ativa')?.classList.remove('ativa');
    miniatura.classList.add('ativa');
    raiz.querySelector('#titulo-destaque').textContent = miniatura.dataset.titulo;
    raiz.querySelector('#descricao-destaque').textContent = miniatura.dataset.desc;
    raiz.querySelector('#img-destaque').src = miniatura.dataset.img;
    raiz.querySelector('#img-destaque').alt = `Capa de ${miniatura.dataset.titulo}`;
    ['#link-destaque', '#botao-destaque'].forEach((seletor) => raiz.querySelector(seletor).href = miniatura.dataset.link);
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarPaginaIdioma();
  const botao = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (botao && menu) botao.addEventListener('click', () => { const aberto = menu.classList.toggle('open'); botao.classList.toggle('open', aberto); botao.setAttribute('aria-expanded', String(aberto)); });
});
