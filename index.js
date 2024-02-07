document.getElementById('yesBtn').addEventListener('click', function() {
    var iframe = document.querySelector('iframe');
    iframe.src = 'https://giphy.com/embed/YD1lpj9gv5CbS';

    // Wait for 3 seconds before triggering celebration
    setTimeout(function() {
        celebrate();
    }, 3000);
});

function celebrate() {
    // Hide or remove all existing elements from the screen
    var elements = document.querySelectorAll('.container, h1, iframe, #yesBtn, #noBtn');
    elements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Create a full-screen overlay
    var overlay = document.createElement('div');
    overlay.classList.add('celebration-overlay');

    // Create the celebratory message as an iframe
    var celebrationMessage = document.createElement('iframe');
    celebrationMessage.src = 'https://giphy.com/embed/3o752k5H19mo1pnpkc';
    celebrationMessage.width = '100%';
    celebrationMessage.height = '100%';
    celebrationMessage.frameBorder = '0';
    celebrationMessage.classList.add('giphy-embed');
    celebrationMessage.allowFullScreen = true;

    // Append the celebratory message to the full-screen overlay
    overlay.appendChild(celebrationMessage);

    // Append the full-screen overlay to the body
    document.body.appendChild(overlay);
}


document.getElementById('noBtn').addEventListener('mouseover', function() {
    var iframe = document.querySelector('.container > div > iframe');
    var iframeRect = iframe.getBoundingClientRect();

    var maxX = window.innerWidth - iframeRect.width - 100; // Subtracting extra 100 to keep space
    var maxY = window.innerHeight - iframeRect.height - 100; // Subtracting extra 100 to keep space

    var randomX, randomY;
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (isOverlapping(randomX, randomY, iframeRect));

    document.getElementById('noBtn').style.position = 'absolute';
    document.getElementById('noBtn').style.left = randomX + 'px';
    document.getElementById('noBtn').style.top = randomY + 'px';

    iframe.src = 'https://giphy.com/embed/9Y5BbDSkSTiY8';
});

function isOverlapping(x, y, iframeRect) {
    return (
        x < iframeRect.right &&
        x + 50 > iframeRect.left &&
        y < iframeRect.bottom &&
        y + 20 > iframeRect.top
    );
}


document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('audioPlayer');
    var startAt = 22; // Start time in seconds
    var endAt = 65;   // End time in seconds
    
    audio.currentTime = startAt;

    audio.addEventListener('timeupdate', function() {
        if (this.currentTime >= endAt) {
            this.currentTime = startAt;
            this.play();
        }
    });
});