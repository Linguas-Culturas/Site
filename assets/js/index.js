document.addEventListener('DOMContentLoaded', () => {
  //JS do cabecalho
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    btn.setAttribute('aria-expanded', String(open));
    });
  }

  //JS do Seletor
  document.querySelectorAll(".circulo").forEach(el => {
            el.addEventListener("mouseenter", () => {
                el.classList.add("animando");
            });
            el.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    el.classList.remove("animando");
                }, 600);
            });
        });

  //JS do Carrossel
  const track = document.querySelector(".custom-track");
    const slides = document.querySelectorAll(".carousel-slide");
    const dotsContainer = document.querySelector(".carousel-dots");

  if (track && dotsContainer && slides.length) {
    let index = 0;
    let interval;

    slides.forEach((_, i) => { 
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para a foto ${i + 1}`);
      dot.addEventListener("click", () => {
        index = i;
        updateSlide();
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    function updateSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
      document.querySelectorAll(".carousel-dots button")
        .forEach((dot, dotIndex) => {
          const active = dotIndex === index;
          dot.classList.toggle("active", active);
          dot.setAttribute("aria-current", active ? "true" : "false");
        });
    }

    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");

    if (nextButton) {
    nextButton.onclick = () => {
      index = (index + 1) % slides.length;
      updateSlide();
      resetAutoplay();
    };
    }

    if (prevButton) {
    prevButton.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
      resetAutoplay();
    };
    }

    function startAutoplay() {
      interval = setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlide();
      }, 4000);
    }
    function resetAutoplay() {
      clearInterval(interval);
      startAutoplay();
    }

    updateSlide();
    startAutoplay();
  }

  const listaDestaques = document.getElementById('lista-destaques');

  if (listaDestaques) {
    fetch(new URL('data/destaques.json', document.baseURI))
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((destaques) => {
        if (!Array.isArray(destaques)) throw new Error('Formato de dados inválido.');

        const marcadosComoDestaque = destaques.filter((item) => item.destaque === true);
        const destaquesPrincipais = marcadosComoDestaque.length
          ? marcadosComoDestaque.slice(0, 3)
          : destaques.slice(0, 3);

        destaquesPrincipais.forEach((destaque) => {
          const card = document.createElement('a');
          card.className = 'destaque';
          card.href = destaque.url;
          card.target = '_blank';
          card.rel = 'noopener noreferrer';
          card.setAttribute('aria-label', `Abrir destaque: ${destaque.nome || 'sem título'}`);

          if (destaque.capa) {
            const imagem = document.createElement('img');
            imagem.className = 'imgMain';
            imagem.src = destaque.capa;
            imagem.alt = `Capa do destaque: ${destaque.nome || 'sem título'}`;
            card.append(imagem);
          } else {
            card.classList.add('destaque--sem-capa');
          }

          const conteudo = document.createElement('div');
          conteudo.className = 'destaque-content';

          if (destaque.tipo) {
            const categoria = document.createElement('div');
            categoria.className = 'categoria';
            const iconesPorTipo = {
              reportagem: 'assets/icons/reportagem-icon.png',
              podcast: 'assets/icons/podcast-icon.png',
              video: 'assets/icons/video-icon.png',
            };
            const chaveTipo = destaque.tipo
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase();
            const caminhoIcone = iconesPorTipo[chaveTipo];

            if (caminhoIcone) {
              const icone = document.createElement('span');
              icone.className = 'icon';
              const imagemIcone = document.createElement('img');
              imagemIcone.src = caminhoIcone;
              imagemIcone.alt = '';
              icone.append(imagemIcone);
              categoria.append(icone);
            }
            const tipo = document.createElement('p');
            tipo.className = 'nomeCat';
            tipo.textContent = destaque.tipo;
            categoria.append(tipo);
            conteudo.append(categoria);
          }

          const titulo = document.createElement('h3');
          titulo.textContent = destaque.nome || 'Destaque';
          conteudo.append(titulo);

          if (destaque.briefing) {
            const descricao = document.createElement('p');
            descricao.className = 'descricao';
            descricao.textContent = destaque.briefing;
            conteudo.append(descricao);
          }

          card.append(conteudo);
          listaDestaques.append(card);
        });
      })
      .catch((error) => {
        console.warn('Não foi possível carregar os destaques:', error.message);
      });
  }
  //Aqui, adicionarei a proxima secao JS
  });
