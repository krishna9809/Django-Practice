document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const toggle = faqItem.querySelector('.faq-toggle');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                toggle.textContent = '+'; // Show plus sign
                faqItem.classList.remove('faq-open');
            } else {
                answer.style.display = 'block';
                toggle.textContent = '×'; // Show cross sign
                faqItem.classList.add('faq-open');
            }
        });
    });
});

