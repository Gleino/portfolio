document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os parágrafos com a classe 'pAnim'
    const parags = document.querySelectorAll('.animList');
    
    // Elemento visível?
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
        );
    }
    
    // Animar os parags
    function animateParagOnScroll() {
        parags.forEach(parag => {
            // Verificamos cada parágrafo individualmente
            if (isElementInViewport(parag)) {
                parag.classList.add('BotToTop');
            }
        });
        
        // Verifica se todos os parágrafos foram animados
        const todosAnimados = Array.from(parags).every(p => p.classList.contains('BotToTop'));
        
        // Se todos já foram animados, remove o event listener
        if (todosAnimados) {
            window.removeEventListener('scroll', animateParagOnScroll);
        }
    }
    
    // Verifica na carga inicial
    animateParagOnScroll();
    
    // Adiciona um evento de scroll para verificar quando os elementos entrarem na viewport
    window.addEventListener('scroll', animateParagOnScroll);
});