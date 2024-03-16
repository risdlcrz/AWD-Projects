let tries = 3;
let aceCard = Math.floor(Math.random() * 7);
const cardsDiv = document.getElementById('cards');
const buttonsDiv = document.getElementById('buttons');
const counterDiv = document.getElementById('counter');
const messageDiv = document.createElement('div');
messageDiv.id = 'message'; 

const cardImages = [
    'ASSETS/IMAGES/ate.jpg',
    'ASSETS/IMAGES/foive.jpg',
    'ASSETS/IMAGES/joker.jpg',
    'ASSETS/IMAGES/kweenka.jpg',
    'ASSETS/IMAGES/reverse.jpg',
    'ASSETS/IMAGES/sigs.jpg'
];

document.body.appendChild(messageDiv);


const tryAgainButton = document.getElementById('tryAgain');


let gameOver = false; 

function createButton(i) {
    const button = document.createElement('button');
    button.textContent = `Button ${i + 1}`;
    button.className = 'button';
    button.addEventListener('click', function() {
        if (gameOver) return; 

        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            activeCard.classList.remove('active');
            activeCard.classList.remove('flipped'); 
        }
        const newCard = document.getElementById(`card${i}`);
        newCard.classList.add('active');
        setTimeout(() => newCard.click(), 1200);

        if (tries === 0 || i === aceCard) {
            gameOver = true; 
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(button => button.classList.add('no-hover'));
        }
    });
    return button;
}

//creates the cards (only three cards will appear)
function createCard(i) {
    const card = document.createElement('div');
    card.id = `card${i}`;
    card.className = 'card';
    card.innerHTML = `
        <div class="card__face card__face--front"></div>
        <div class="card__face card__face--back" style="background-image: url('${i === aceCard ? 'ace.jpg' : cardImages[i]}');">${i === aceCard ? 'ACE' : ''}</div>
    `;

card.addEventListener('click', () => {
    if (tries === 0) return;
    card.classList.add('flipped');
    if (i === aceCard) {
        messageDiv.textContent = 'You win!';
        setTimeout(() => {
            tryAgainButton.style.display = 'block'; 
        }, 1400); 
    } else {
        tries--;
        counterDiv.textContent = `Tries: ${tries}`;
        if (tries === 0) {
            messageDiv.textContent = 'You lost';
            setTimeout(() => {
                tryAgainButton.style.display = 'block'; 
            }, 1400); 
        }
    }
});
    return card;
}

for (let i = 0; i < 7; i++) {
    buttonsDiv.appendChild(createButton(i));
    cardsDiv.appendChild(createCard(i));
}

tryAgainButton.addEventListener('click', () => {
    tries = 3;
    aceCard = Math.floor(Math.random() * 7);
    messageDiv.textContent = '';
    cardsDiv.innerHTML = '';
    for (let i = 0; i < 7; i++) {
        const card = createCard(i);
        cardsDiv.appendChild(card);
    }
    tryAgainButton.style.display = 'none';
    gameOver = false; 
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.classList.remove('no-hover'));
});

