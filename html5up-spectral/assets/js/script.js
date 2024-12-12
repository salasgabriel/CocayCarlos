document.addEventListener('DOMContentLoaded', function () {
    const countdown = document.getElementById('timer');

    function updateCountdown() {
        const eventDate = new Date('2025-01-11T09:30:00');
        const now = new Date();
        const timeDifference = eventDate - now;

        if (timeDifference <= 0) {
            countdown.textContent = '¡Es hoy!';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdown.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
