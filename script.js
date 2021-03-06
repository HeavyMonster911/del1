const theame = document.querySelector("body")
document.querySelector("button").onclick = function() {
    this.classList.toggle("dark");
    theame.classList.toggle("dark");
}

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const navigation = document.querySelector("nav");
document.querySelector(".toggle").onclick = function() {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}