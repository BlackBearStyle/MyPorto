// Initialize 3D background
VANTA.NET({
    el: "#pixel-scene",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3e56ff,
    backgroundColor: 0x121212,
    points: 12.00,
    maxDistance: 22.00,
    spacing: 18.00
});

// Pixel animation effects
document.querySelectorAll('.pixel-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.borderImageSource = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\'><rect width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff3eff\' stroke-width=\'2\'/></svg>")';
    });
    
    box.addEventListener('mouseleave', function() {
        this.style.borderImageSource = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\'><rect width=\'12\' height=\'12\' fill=\'none\' stroke=\'white\' stroke-width=\'2\'/></svg>")';
    });
});

// Typewriter effect for terminal-like text
const terminalTexts = [
    "> Machine Learning Engineer _",
    "> Data Scientist _",
    "> Python Developer _",
    "> AI Enthusiast _"
];

let currentTextIndex = 0;
const terminalElement = document.querySelector('.pixel-cursor').parentNode;

function typeWriter(text, i, cb) {
    if (i < text.length) {
        terminalElement.innerHTML = text.substring(0, i+1) + '<span class="pixel-cursor">_</span>';
        setTimeout(() => typeWriter(text, i + 1, cb), 100);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
    }
}

function eraseText(cb) {
    let text = terminalElement.textContent.replace('_', '');
    if (text.length > 0) {
        terminalElement.innerHTML = text.substring(0, text.length - 1) + '<span class="pixel-cursor">_</span>';
        setTimeout(() => eraseText(cb), 50);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 500);
    }
}

function cycleTerminalTexts() {
    typeWriter(terminalTexts[currentTextIndex], 0, () => {
        eraseText(() => {
            currentTextIndex = (currentTextIndex + 1) % terminalTexts.length;
            cycleTerminalTexts();
        });
    });
}

// Start the typewriter effect
setTimeout(cycleTerminalTexts, 1000);

// Add pixel animation to skills on hover
document.querySelectorAll('.skill-pixel').forEach(pixel => {
    pixel.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    pixel.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});