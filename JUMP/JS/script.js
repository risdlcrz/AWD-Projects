document.querySelector('#sun').addEventListener('click', () => {
    document.querySelector('#sun').classList.toggle('rotate-sun');
});

document.querySelector('#earth').addEventListener('click', () => {
    document.querySelector('#earth').classList.toggle('rotate-earth');
});

document.querySelector('#moon').addEventListener('click', () => {
    const moon = document.querySelector('#moon');
    moon.classList.toggle('rotate-moon');

    const cometShower = document.querySelector('.comet-shower');
    cometShower.style.visibility = moon.classList.contains('rotate-moon') ? 'visible' : 'hidden';
    document.querySelectorAll('.comet').forEach(comet => {
        comet.style.left = Math.random() * window.innerWidth + 'px';
        comet.classList.toggle('comet-fall'); // Toggle the comet fall animation
    });
});