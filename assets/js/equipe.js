// Para adicionar ou remover alguém, edite apenas esta lista.
// Quando as fotos estiverem disponíveis, informe o caminho em `foto`.
const membros = [
  { nome: 'Alexia Miranda Santos', foto: 'assets/fotos-carrossel/alexia.webp', formacao: 'Graduação em Letras — Língua Inglesa', funcao: 'Bolsista PMET e de iniciação científica', projeto: 'Língua Espanhola no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Jéssica Laura Rodrigues Gonçalves', foto: 'assets/fotos-carrossel/jessica.webp', formacao: 'Graduação em Letras — Língua Espanhola', funcao: 'Bolsista PMET — Licenciatura', projeto: 'Língua Espanhola no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Maria Eduarda Sampaio Ferreira', foto: 'assets/fotos-carrossel/duda.webp', formacao: 'Graduação em Letras — Língua Francesa', funcao: 'Bolsista de extensão e de iniciação científica FAPEMIG', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Sarah Carolliny Romão Lima', foto: 'assets/fotos-carrossel/grego.webp', formacao: 'Graduação em Letras — Língua Francesa', funcao: 'Estagiária de Língua Francesa', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Isabella Canuto Bucker Franchini', foto: 'assets/fotos-carrossel/grego2.webp', formacao: 'Graduação em Letras — Linguística', funcao: 'Bolsista de iniciação científica FAPEMIG e de extensão', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Daniele Helena da Silveira', foto: 'assets/fotos-carrossel/daniele.jpg', fotoPosicao: '100% 42%', formacao: 'Mestranda em Literatura e graduada em Letras — Grego', funcao: 'Bolsista de iniciação científica FAPEMIG e de extensão', projeto: 'Línguas-Culturas no COLTEC · Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Fernanda Buldrini Barreto', foto: 'assets/fotos-carrossel/IMG_4451-_1_.png', formacao: 'Graduação em Letras — Latim', funcao: 'Bolsista de extensão', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Henrico Reis Barbosa', foto: 'assets/fotos-carrossel/henrico.webp', fotoPosicao: '82% 43%', formacao: 'Mestrado em Engenharia de Automação — Língua Japonesa', funcao: 'Docente voluntário', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Elisa de Oliveira Silva', foto: 'assets/fotos-carrossel/japones.webp', formacao: 'Graduação em Letras — Língua Japonesa', funcao: 'Docente voluntária', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Ricardo Jianhong Li', foto: 'assets/fotos-carrossel/ricardo.webp', formacao: 'Graduação em Engenharia na UFMG — Mandarim', funcao: 'Bolsista de extensão em parceria com o Instituto Confúcio UFMG', projeto: 'COLTEC–Confúcio UFMG: Mandarim e Summer School' },
  { nome: 'Pan', foto: 'assets/fotos-carrossel/pam.webp', formacao: 'Professora de Mandarim', funcao: 'Parceira internacional do Instituto Confúcio UFMG', projeto: 'COLTEC–Confúcio UFMG: Mandarim e Summer School' },
  { nome: 'Marilina Parziale', foto: 'assets/fotos-carrossel/marilina.webp', formacao: 'Professora de Italiano', funcao: 'Parceira internacional do Consulado da Itália', projeto: 'Línguas-Culturas no COLTEC' },
  { nome: 'Rafael', foto: 'assets/fotos-carrossel/rafael.png', formacao: 'Técnico em Eletrônica', funcao: 'Pesquisador júnior — Bolsista FAPEMIG', projeto: 'Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Anthonela', foto: 'assets/fotos-carrossel/anthonela.webp', formacao: 'Técnica em Desenvolvimento de Sistemas', funcao: 'Pesquisadora júnior — Bolsista FAPEMIG', projeto: 'Pesquisa sobre ensino e aprendizagem de línguas' },
  { nome: 'Jebs Lima', foto: 'assets/fotos-carrossel/jebs.jpg', fotoPosicao: '0% 48%', formacao: 'Cinema — Belas Artes', funcao: 'Bolsista de extensão', projeto: 'Línguas-Culturas no COLTEC' },
];

function iniciais(nome) {
  const partes = nome.trim().split(/\s+/);
  return `${partes[0][0]}${partes.length > 1 ? partes.at(-1)[0] : ''}`.toUpperCase();
}

function retrato(membro) {
  if (membro.foto) {
    const posicao = membro.fotoPosicao ? ` style="object-position: ${membro.fotoPosicao}"` : '';
    return `<img class="member-photo" src="${membro.foto}" alt="Foto de ${membro.nome}"${posicao}>`;
  }
  return `<div class="member-photo member-photo-placeholder" role="img" aria-label="Foto de ${membro.nome} ainda não disponível">${iniciais(membro.nome)}</div>`;
}

document.getElementById('team-grid').innerHTML = membros.map((membro) => `
  <article class="member-card">
    ${retrato(membro)}
    <h3>${membro.nome}</h3>
    <p class="member-function">${membro.funcao}</p>
    <p class="member-education">${membro.formacao}</p>
    <p class="member-project"><span>Atuação</span>${membro.projeto}</p>
  </article>
`).join('');

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const aberto = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', aberto);
    hamburger.setAttribute('aria-expanded', String(aberto));
    hamburger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });
}
function iniciarCarrosselEquipe() {
  const carousel = document.querySelector('[data-team-carousel]');
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll('.destaque-img')];
  const dots = carousel.querySelector('.team-carousel__dots');
  let current = 0;
  let timer;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    [...dots.children].forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  };
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Mostrar foto ${index + 1}`);
    dot.addEventListener('click', () => { show(index); restart(); });
    dots.append(dot);
  });
  const restart = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), 5000); };
  carousel.querySelector('.team-carousel__button--prev').addEventListener('click', () => { show(current - 1); restart(); });
  carousel.querySelector('.team-carousel__button--next').addEventListener('click', () => { show(current + 1); restart(); });
  show(0);
  restart();
}

document.addEventListener('DOMContentLoaded', iniciarCarrosselEquipe);
