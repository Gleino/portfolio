// Botão Hamb
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('main-menu');
    const header = document.querySelector('header');
    const menuLinks = menu.querySelectorAll('a');
    
    // Função para atualizar as classes quando o estado do header muda
    function updateMenuClasses() {
        if (header.classList.contains('shrink')) {
            menu.classList.add('menu-shrink');
            menuLinks.forEach(link => {
                link.classList.add('link-shrink');
            });
        } else {
            menu.classList.remove('menu-shrink');
            menuLinks.forEach(link => {
                link.classList.remove('link-shrink');
            });
        }
    }
    
    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('aberto');
        menu.setAttribute('aria-hidden', isExpanded);
        toggle.innerHTML = isExpanded ? '&#9776;' : '&#10005;'; // Hambúrguer ou X
        toggle.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
        
        // Atualiza as classes baseado no estado do header
        updateMenuClasses();
    });

    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('aberto');
            menu.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.innerHTML = '&#9776;';
            toggle.setAttribute('aria-label', 'Abrir menu');
        });
    });

    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('aberto')) {
            menu.classList.remove('aberto');
            menu.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.innerHTML = '&#9776;';
            toggle.setAttribute('aria-label', 'Abrir menu');
        }
    });
    
    // Adicionar evento de scroll para atualizar a classe do menu e dos links
    window.addEventListener('scroll', () => {
        if (menu.classList.contains('aberto')) {
            updateMenuClasses();
        }
    });
});