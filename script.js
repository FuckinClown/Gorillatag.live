// hiiiiii, this was all painfully made by fclown
// discord: fuckinclown

// btw you can see all the source code on my github
// it would be pretty cool if you starred the repo ;)

var xOs = 5;
var yOS = 5;
var xP = 400;
var yP = -100;
var canRun = 1;

const privacyLink = document.getElementById('privacy-link');
const privacyModal = document.getElementById('privacy-modal');
const closeModal = document.getElementById('close-modal');

// Privacy Policy so it looks real-ish
privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.classList.remove('hidden');
});
  
closeModal.addEventListener('click', () => {
    privacyModal.classList.add('hidden');
});

// When you click the accept or decline it switches pages
/// Originally it didn't play audio because I just loaded
/// a different .html file, so instead we hide the normal
/// stuff and show the idiot stuff, now we can play audio
document.addEventListener('DOMContentLoaded', () => {
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');
    const agreementContainer = document.getElementById('agreement-container');
    const mainContainer = document.getElementById('main-container');
    const idiotAudio = document.getElementById('lobbyMusic');
    const wordsElement = document.getElementById('words');

    // so that people can't easily inspect element and see this
    wordsElement.textContent = 'you are an idiot';

    function switchTomainScene() {
      agreementContainer.style.display = 'none';
      mainContainer.style.display = 'block';
      idiotAudio.play().catch(error => console.error('Error playing audio:', error));
      flipFace();
    }
    acceptBtn.addEventListener('click', () => {
      switchTomainScene();
      loadNextWindow();
      //document.body.addEventListener('click', loadNextWindow);
    });
  
    declineBtn.addEventListener('click', () => {
      switchTomainScene();
      loadNextWindow();
      //document.body.addEventListener('click', loadNextWindow);
    });
});


// flip.js

async function flipFace(){
    img1 = document.getElementById("image1");
    img2 = document.getElementById("image2");
    img3 = document.getElementById("image3");
    words = document.getElementById("words");
    while(true){
        document.getElementById("lobbyMusic").play();
        img1.src = "assets/stock_woman.png"
        img2.src = "assets/stock_woman.png"
        img3.src = "assets/stock_woman.png"
        document.body.style.background = "black";
        words.style.color = "white";
        await delay(350);
        img1.src = "assets/stock_man.png"
        img2.src = "assets/stock_man.png"
        img3.src = "assets/stock_man.png"
        document.body.style.background = "white";
        words.style.color = "black";
        await delay(350);
    }
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function loadNextWindow(){
    openWindow('main.html');
}

function openWindow(url) {
    window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=350, height=400, titlebar=no, alwaysRaised=yes');
}

// animation shtuff
function posXleft() {
    xOs = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus()
}
  
function posXright() {
    xOs = Math.ceil(7 * Math.random()) * 5 - 10;
}
  
function posYup() {
    yOS = Math.ceil(-6 * Math.random()) * 5 - 10;
}
  
function posYdown() {
    yOS = Math.ceil(7 * Math.random()) * 5 - 10;
}
  
  
function anim() {

    xP += xOs;
    yP += yOS;
  
    if (xP > screen.width - 357) {
      posXleft();
    }
  
    if (xP < 0) {
      posXright();
    }
  
    if (yP > screen.height - 330) {
      posYup();
    }
  
    if (yP < 0) {
      posYdown();
    }
  
    if (canRun == 1) {
      window.moveTo(xP, yP);
      setTimeout('anim()', 1);
    }
}
