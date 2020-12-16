window.onscroll = () => { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// var footer = document.getElementById("playMusicBar")
// // Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const myFunction = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        footer.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        footer.classList.remove("sticky")
    }
}