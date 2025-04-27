
  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow');
    });
  });

  cards.forEach(card => {
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow');
    });
  });

  // header-shrink
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const shrinkClass = 'shrink';
    const scrollTrigger = 50;
    
    // Verificar a posição
    function shrinkHeader() {
        if (window.scrollY > scrollTrigger) {
            header.classList.add(shrinkClass);
        } else {
            header.classList.remove(shrinkClass);
        }
    }
    
    // Verifica no carregamento inicial
    shrinkHeader();
    
    // Adiciona o evento de scroll
    window.addEventListener('scroll', shrinkHeader);
  });

  // Animação cards
document.addEventListener('DOMContentLoaded', function() {
  const secaoHabilidades = document.querySelector('.habilidades');
  const cards = document.querySelectorAll('.card-habilidade');
  
  // Elemento visivel?
  function isElementInViewport(elVisivel) {
      const rect = elVisivel.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.25
      );
  }
  
  // Animar os cards
  function animateCardsOnScroll() {
      if (isElementInViewport(secaoHabilidades)) {
          cards.forEach(card => {
              card.classList.add('animado');
          });
          
          window.removeEventListener('scroll', animateCardsOnScroll);
      }
  }
  
  // Verifica na carga inicial
  animateCardsOnScroll();
  
  // Adiciona um evento de scroll para verificar quando a seção entrar na viewport
  window.addEventListener('scroll', animateCardsOnScroll);
});

//Home Parag
document.addEventListener('DOMContentLoaded', function() {
  const paragHome = document.querySelectorAll('.LefToo');
  
  // Elemento visível?
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
      );
  }
  
  // Animar
  function animateElementOnScroll() {
      paragHome.forEach(homePar => {
          if (isElementInViewport(homePar)) {
              homePar.classList.add('LefToRig');
          }
      });
      
      // Verificar
      const todosAnimados = Array.from(paragHome).every(p => p.classList.contains('LefToRig'));
      
      // remover o event listener
      if (todosAnimados) {
          window.removeEventListener('scroll', animateElementOnScroll);
      }
  }
  
  // Verificar na carga inicial
  animateElementOnScroll();
  window.addEventListener('scroll', animateElementOnScroll);
});

// Barra de Habs
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateSkillBars() {
  const skillsSection = document.querySelector('.skills');
  const fillBars = document.querySelectorAll('.fill');
  
  if (isElementInViewport(skillsSection)) {
      fillBars.forEach((bar) => {
          bar.classList.add('animate');
      });
      window.removeEventListener('scroll', animateSkillBars);
  }
}

window.addEventListener('scroll', animateSkillBars);

document.addEventListener('DOMContentLoaded', animateSkillBars);