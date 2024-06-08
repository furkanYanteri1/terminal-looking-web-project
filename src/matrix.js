let animationInterval;

function startMatrixAnimation() {
    const matrixDiv = document.querySelector('.matrix');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createTextNode(letter) {
        const span = document.createElement('span');
        span.textContent = letter;
        if (Math.random() > 0.8) { // 20% chance of glowing effect
            span.classList.add('glow');
            span.style.animationDuration = `${getRandomBetween(1, 3)}s`; // Random glow duration between 1 and 3 seconds
        }
        return span;
    }

    function draw() {
        matrixDiv.innerHTML = '';
        
        for (let i = 0; i < drops.length; i++) {
            const columnDiv = document.createElement('div');
            columnDiv.style.position = 'absolute';
            columnDiv.style.left = `${i * fontSize}px`;

            for (let j = 0; j < 5; j++) { // Adding 5 characters per column
                const text = letters[Math.floor(Math.random() * letters.length)];
                const textNode = createTextNode(text);
                textNode.style.position = 'absolute';
                textNode.style.top = `${(drops[i] - j) * fontSize}px`;
                columnDiv.appendChild(textNode);
            }
            
            matrixDiv.appendChild(columnDiv);

            if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 2; // Increase the speed
        }
    }

    animationInterval = setInterval(draw, 25); // Reduce the interval time for faster animation
}

function stopMatrixAnimation() {
    console.log('Stopping matrix animation...');
    clearInterval(animationInterval);
    const matrixDiv = document.querySelector('.matrix');
    matrixDiv.innerHTML = '';
}

// Exporting the functions for use in other files
window.startMatrixAnimation = startMatrixAnimation;
window.stopMatrixAnimation = stopMatrixAnimation;
