// Obtiene la fecha y hora actual
var now = new Date();

// Calcula la fecha y hora 30 días a partir de ahora
var endDate = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));

// Configura la cuenta regresiva con SimplyCountdown
simplyCountdown('#cuenta', {
    year: endDate.getUTCFullYear(),  // Año de la fecha final
    month: endDate.getUTCMonth() + 1, // Mes de la fecha final (sumar 1 porque los meses en JavaScript son 0-indexados)
    day: endDate.getUTCDate(),       // Día del mes de la fecha final
    hours: endDate.getUTCHours(),    // Hora del día en formato UTC
    minutes: endDate.getUTCMinutes(),// Minutos en formato UTC
    seconds: endDate.getUTCSeconds(),// Segundos en formato UTC
    words: {
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true, // Usa plurales
    inline: false, // Muestra la cuenta regresiva en bloque
    enableUtc: true, // Usa UTC como referencia
    onEnd: function() {
        document.getElementById('portada').classList.add('oculta'); // Oculta el elemento con id 'portada' al finalizar
    },
    refresh: 1000, // Actualiza cada segundo
    sectionClass: 'simply-section', // Clase CSS para las secciones
    amountClass: 'simply-amount', // Clase CSS para los valores
    wordClass: 'simply-word', // Clase CSS para las palabras
    zeroPad: false, // No rellena con ceros
    countUp: false // Cuenta hacia abajo
});
