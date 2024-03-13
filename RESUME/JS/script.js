var gifs = ['url(stars.gif)', 'url(sunrise.gif)'];
var currentGifIndex = 0;
var colors = ['white', '#390b4c'];
var profilePics = ['idpic.jpg', 'idpic1.jpg'];
var containerColors = ['#132c58', '#ffdcee'];
var linecolors = ['white', '#390b4c'];
var buttonHoverColors = ['#58047c', '#a3b3fb']; 

document.getElementById('colorButton').addEventListener('click', function() {
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    document.body.style.backgroundImage = gifs[currentGifIndex];

    var color = colors[currentGifIndex];
    document.body.style.color = color; 

    var profilePic = document.querySelector('.profile-pic'); 
    profilePic.src = profilePics[currentGifIndex]; 

    var container = document.querySelector('.center');
    container.style.backgroundColor = containerColors[currentGifIndex];

    var line = document.querySelector('.custom-hr'); 
    line.style.backgroundColor = linecolors[currentGifIndex]; 

    if (containerColors[currentGifIndex] == '#ffdcee') {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
        #colorButton:hover{
            background-color: #58047c;
        }
        `;
        document.head.appendChild(styleElement);
    } else {
        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
        #colorButton:hover{
            background-color: #a3b3fb;
        }
        `;
        document.head.appendChild(styleElement);
    }
    
    }
);