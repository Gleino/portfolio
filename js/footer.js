document.addEventListener('DOMContentLoaded', function() {
    // Ano atual no footer
    const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }

    // Animação ícones sociais
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        // Adiciona um delay progressivo para cada ícone
        icon.style.animationDelay = `${index * 0.1}s`;
        icon.classList.add('fade-in');

        // Efeito hover com ondulação
        icon.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });

        icon.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
            // Remover a classe após a animação terminar
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 300);
        });
    });

    // Tratamento do formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter os valores dos campos
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aqui você adicionaria o código para enviar o formulário
            // Por exemplo, usando fetch para uma API
            
            // Feedback visual de envio (simulado)
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            // Simular uma resposta do servidor após 2 segundos
            setTimeout(() => {
                // Resetar o formulário
                contactForm.reset();
                
                // Restaurar o botão
                submitBtn.textContent = 'Mensagem Enviada!';
                
                // Após mais 2 segundos, voltar ao estado original
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 2000);
                
                // Mostrar uma notificação de sucesso
                showNotification('Mensagem enviada com sucesso!');
            }, 2000);
        });
    }

    // Função para mostrar notificações
    function showNotification(message) {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        // Adicionar ao DOM
        document.body.appendChild(notification);
        
        // Mostrar com animação
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Detectar quando o footer entra na viewport para animar
    const footer = document.querySelector('.contact');
    const footerContent = document.querySelector('.footer-content');
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    function animateFooter() {
        if (isElementInViewport(footer)) {
            footerContent.classList.add('animated');
            window.removeEventListener('scroll', animateFooter);
        }
    }
    
    // Verificar na carga inicial e adicionar evento de scroll
    animateFooter();
    window.addEventListener('scroll', animateFooter);
});