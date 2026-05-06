document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu Mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navUl = document.querySelector('nav ul');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navUl.classList.toggle('show');
        });
    }

    // Jam Digital
    function updateDigitalClock() {
        const clockElement = document.getElementById('digital-clock');
        if (clockElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
            clockElement.textContent = timeString;
        }
    }
    
    if (document.getElementById('digital-clock')) {
        setInterval(updateDigitalClock, 1000);
        updateDigitalClock();
    }
});

// Fungsi Global untuk Notifikasi (bisa dipanggil dari file JS lain)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}