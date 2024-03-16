var audio = document.getElementById('audio-background');

function toggleSound() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hexToRGBA(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

function changeColor() {
    var h3s = document.getElementsByTagName('h3');
    for (var i = 0; i < h3s.length; i++) {
        var newColor = getRandomColor();
        var dimColor = hexToRGBA(newColor, 0.5); 
        h3s[i].style.color = newColor;
        h3s[i].style.textShadow = `0 0 10px ${dimColor}, 0 0 20px ${dimColor}, 0 0 30px ${dimColor}, 0 0 40px ${dimColor}`;
    }
}

setInterval(changeColor, 1000);