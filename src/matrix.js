document.addEventListener('DOMContentLoaded', () => {
    const matrixDiv = document.querySelector('.matrix');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = Array(columns).fill(1);

    function createTextNode(letter) {
        const span = document.createElement('span');
        span.textContent = letter;
        return span;
    }

    function draw() {
        matrixDiv.innerHTML = '';
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            const textNode = createTextNode(text);
            textNode.style.position = 'absolute';
            textNode.style.top = `${drops[i] * fontSize}px`;
            textNode.style.left = `${i * fontSize}px`;
            matrixDiv.appendChild(textNode);

            if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 2; // Increase the speed
        }
    }

    setInterval(draw, 10); // Reduce the interval time for faster animation
});
