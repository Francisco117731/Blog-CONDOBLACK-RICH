 document.addEventListener('DOMContentLoaded', () => {
    const botoesLike = document.querySelectorAll('.btn-like');

    botoesLike.forEach(botao => {
      botao.addEventListener('click', () => {
        const gostou = botao.getAttribute('data-liked') === 'true';

        if (gostou) {
          botao.src = 'imagens/laink -preto.jpg';
          botao.setAttribute('data-liked', 'false');
        } else {
          botao.src = 'imagens/laink -vermelo.jpg';
          botao.setAttribute('data-liked', 'true');
        }
      });
    });
  });


   document.addEventListener('DOMContentLoaded', () => {
    const botoesComentario = document.querySelectorAll('.icon-comentario');

    botoesComentario.forEach(botao => {
      botao.addEventListener('click', () => {
        const containerMusica = botao.closest('.botoes-musica');
        const textarea = containerMusica.querySelector('.caixa-comentario');

        // Alterna visibilidade
        if (textarea.style.display === 'none' || textarea.style.display === '') {
          textarea.style.display = 'block';
          textarea.focus();
        } else {
          textarea.style.display = 'none';
        }
      });
    });
  });

   // Tocar som na entrada da página
    window.addEventListener('DOMContentLoaded', () => {
      const audio = new Audio('sons/intro.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    });

    // Modo claro automático se o sistema não for escuro
    window.addEventListener('DOMContentLoaded', () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (!prefersDark) {
        document.body.classList.add('modo-claro');
      }
    });
