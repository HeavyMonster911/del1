var percent = document.getElementById("percent");
var preogressbar = document.getElementById("preogressbar");

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page scrolled " + Math.round(progress) + "%";
}