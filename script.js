// Select the single elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Debug: Check if elements are selected correctly
console.log(menuIcon, navbar, navLinks);

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

menuIcon.addEventListener('click', () => {
    // Debug: Check if click event is triggered
    console.log('Menu icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});
