const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');
const notificationSound = new Audio('notif.mp3');
var backgroundColor = ('red', 'yellow');

button.addEventListener('click', () => {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const counter = Number(notification.getAttribute('data-count')) || 0;
    const newCount = counter + 1;

    notification.setAttribute('data-count', newCount);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake');

    if (newCount % 10 === 0) {
        var color = getRandomColor();
        notification.style.setProperty('--circle-color', color);
    }
    
    notificationSound.play();
    button.classList.add('active');
});

bell.addEventListener('animationend', () => {
    bell.classList.remove('shake');
})

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
})

