document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');
        accordionContent.classList.toggle('active');

        // Fecha os outros itens do acordeão
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                content.classList.remove('active');
            }
        });
    });
});