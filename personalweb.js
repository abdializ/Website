function toggleMenu() { 
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const h2Text = document.querySelector('#Welcome','#blockquote'); // Target h2 by its ID

    menu.classList.toggle('open');
    icon.classList.toggle('open');

    // Toggle h2 visibility
    if (menu.classList.contains('open')) {
        h2Text.style.display = 'none'; // Hide if menu is open
    } else {
        h2Text.style.display = 'block'; // Show if menu is closed
    }
}
