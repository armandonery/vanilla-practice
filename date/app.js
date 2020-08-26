const btn = document.getElementById('btn');
const date = document.getElementById('date');

btn.addEventListener('click', () => {
    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    var text = 'Hoy es ';

    date.style.fontSize = "35px";
    date.innerHTML = text+fecha.toLocaleDateString("es-ES", options);
})



