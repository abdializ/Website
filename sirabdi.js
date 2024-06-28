const text = document.getElementById('text');
const textContent = 'Under-Construction';
let index = 0;

function type() {
    if (index < textContent.length) {
        text.innerHTML += textContent.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});
