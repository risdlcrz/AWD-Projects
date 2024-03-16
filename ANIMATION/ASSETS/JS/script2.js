const carousel = document.querySelector('#carousel');
const characters = Array.from(carousel.children);
const activeCharacterNameElement = document.getElementById('active-character-name'); // Add this line
document.querySelector('.character').classList.add('active');
let theta = 0;
const radius = 500; // Increase the radius



function rotateCarousel() {
    const angle = 2 * Math.PI / characters.length;
    const activeCharacterNameElement = document.getElementById('active-character-name');

    characters.forEach((character, index) => {
        const rotate = theta + index * angle;
        character.style.transform = `rotateY(${rotate}rad) translateZ(${radius}px)`;

        if (Math.abs((rotate + Math.PI) % (2 * Math.PI) - Math.PI) < angle / 2) {
            character.classList.add('active');
            activeCharacterNameElement.textContent = character.dataset.name;
            activeCharacterNameElement.style.opacity = "1";
        } else {
            character.classList.remove('active');
            // Remove the line below to keep the name visible
            // activeCharacterNameElement.style.opacity = "0";
        }

        // Add event listeners for mouseover and mouseout events
        character.onmouseover = function() {
            this.style.transform = `rotateY(${rotate}rad) translateZ(${radius}px) scale(1.2)`;
        }
        character.onmouseout = function() {
            this.style.transform = `rotateY(${rotate}rad) translateZ(${radius}px) scale(1)`;
        }
    });
}

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

rotateCarousel(); // set the initial rotation

characters.forEach(function(character) {
    character.addEventListener('click', function() {
        var name = this.getAttribute('data-name');
        alert('You have chosen ' + name + '!\n' + '\nHaha wala pang animation yung ganyan kaya alert muna\n' + '\nwhat if iperfect mo na sir');
    });
});

prevButton.addEventListener('click', () => {
    theta += 2 * Math.PI / characters.length;
    rotateCarousel();
    document.getElementById('audio-background').play();
});

nextButton.addEventListener('click', () => {
    theta -= 2 * Math.PI / characters.length;
    rotateCarousel();
    document.getElementById('audio-background').play();
});