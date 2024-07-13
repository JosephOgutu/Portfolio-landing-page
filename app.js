//Typing 
let typingText = new Typed("#text", {
    strings: ["Health Manager", "Healthcare Leader", "Quality Improvement Expert"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
});

//Dark mode
let body = document.querySelector('body');
let darkmode = document.querySelector('.darkmode');

darkmode.onclick = function () {
    body.classList.toggle('night');
};

const darkModeToggle = document.querySelector('.darkmode');
darkModeToggle.addEventListener('click', () => {
document.body.classList.toggle('dark-mode');
});

//icons
const icons = document.querySelectorAll('.icon');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconTop = iconRect.top;
    const iconHeight = iconRect.height;
    if (scrollPosition + window.innerHeight > iconTop && scrollPosition < iconTop + iconHeight) {
        icon.classList.add('show');
    } else {
        icon.classList.remove('show');
    }
    });
});

