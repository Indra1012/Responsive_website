// let burger = document.querySelector(".burger");
// let navbar = document.querySelector(".navbar");
// let navList = document.querySelector(".nav-list");
// let rightNav = document.querySelector(".rightNav");
// let navLinks = document.querySelectorAll("#home");

// burger.addEventListener("click", function () {
//     rightNav.classList.toggle("v-class-resp");
//     navList.classList.toggle("v-class-resp");
//     navbar.classList.toggle("h-nav-resp");
// });
let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".nav-list");
let rightNav = document.querySelector(".rightNav");
let navLinks = document.querySelectorAll(".close");

// Toggle menu function
function toggleMenu() {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
}

// Toggle menu when burger is clicked
burger.addEventListener("click", toggleMenu);

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Simply close the menu when any nav link is clicked
        rightNav.classList.add('v-class-resp');
        navList.classList.add('v-class-resp');
        navbar.classList.add('h-nav-resp');
    });
});

