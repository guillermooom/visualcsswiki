// Selecciona todos los botones y establece el estado inicial
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

    // Establece el estado inicial del contenedor y el botón "Arriba"
    const container = document.querySelector('.flex-container');
    container.style.alignItems = 'flex-start'; // Alineación por defecto
    buttons[0].classList.add('active'); // Botón de "flex-start" activo por defecto

    // Agrega el evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const alignment = this.getAttribute('data-alignment');

            // Cambia la alineación del contenedor
            container.style.alignItems = alignment;

            // Eliminar la clase active de todos los botones
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Agregar la clase active al botón pulsado
            this.classList.add('active');
        });
    });
});
