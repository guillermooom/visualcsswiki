// Selecciona todos los botones y establece el estado inicial
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');

    // Establece el estado inicial del contenedor y el botón "row"
    const container = document.querySelector('.flex-container');
    container.style.flexDirection = 'row'; // Dirección por defecto
    buttons[0].classList.add('active'); // Botón de fila activo por defecto

    // Agrega el evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.getAttribute('data-direction');

            // Cambia la dirección del contenedor
            container.style.flexDirection = direction;

            // Eliminar la clase active de todos los botones
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Agregar la clase active al botón pulsado
            this.classList.add('active');
        });
    });
});
