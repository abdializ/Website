const text = document.getElementById('p-text');
const initialText = '';
const texts = [
    '在建中', // Chinese
    'In costruzione', // Italian
    'قيد الإنشاء', // Arabic
    'Socodka dhismaha', // Somali
    'Under Construction'  // English
];
let textIndex = 0;
let index = 0;

function type() {
    if (index < initialText.length) {
        text.innerHTML += initialText.charAt(index);
        index++;
        setTimeout(type, 100);
    } else {
        setTimeout(changeText, 5000); // Start changing text after a short delay
    }
}

function changeText() {
    text.style.color = '#928585'; // Set the color you want

    text.innerHTML = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;

    setTimeout(changeText, 3000); // Change text every 3 seconds
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});

// dark.light modes 
// script.js

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});


