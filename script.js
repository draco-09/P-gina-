
document.getElementById('sessionButton').addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.getElementById('sessionForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    var calendarLink = document.querySelector('a[href="#calendario"]');
    var calendarForm = document.querySelector('.calendar-form');
    var calendarSubmit = document.querySelector('#calendarSubmit');
    var calendarContainer = document.querySelector('.calendar-container');

    // Mostrar el formulario cuando se hace clic en la opción de Calendario
    calendarLink.addEventListener('click', function(event) {
        event.preventDefault();
        calendarForm.style.display = 'block';
        calendarContainer.innerHTML = ''; // Limpiar el contenido del contenedor del calendario
    });

    // Manejar el envío del formulario
    calendarSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        var zone = document.querySelector('#zone').value;
        var city = document.querySelector('#city').value;

        // Aquí deberías implementar la lógica para generar el calendario
        // basado en la zona y la ciudad ingresadas por el usuario
        var currentMonth = new Date().getMonth(); // Obtener el mes actual
        var currentYear = new Date().getFullYear(); // Obtener el año actual

        // Generar el calendario
        generateCalendar(currentMonth, currentYear);
    });

    // Función para generar el calendario
    function generateCalendar(month, year) {
        var firstDay = new Date(year, month, 1).getDay(); // Día de la semana del primer día del mes
        var daysInMonth = new Date(year, month + 1, 0).getDate(); // Número de días en el mes
        var calendarHTML = '<div class="calendar">';

        // Agregar espacios en blanco para los días anteriores al primer día del mes
        for (var i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="day"></div>';
        }

        // Agregar los días del mes
        for (var day = 1; day <= daysInMonth; day++) {
            calendarHTML += '<div class="day">' + day + '</div>';
        }

        calendarHTML += '</div>';
        calendarContainer.innerHTML = calendarHTML;
    }
});
