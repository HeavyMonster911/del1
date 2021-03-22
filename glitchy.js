let bg = document.getElementById("glitchyTitle");
let count = 10;
for (i = 0; i < count; i++) {
    let glitchBox = document.createElement('div');
    glitchBox.className = 'Gtbox';
    bg.appendChild(glitchBox);
}
setInterval(function() {
    let glitch = document.getElementsByClassName('Gtbox');
for (let i = 0; i < glitch.length; i++) {
    glitch[i].style.left = Math.floor(Math.random()*50) + '%'
    glitch[i].style.top = Math.floor(Math.random()*5) + 'em'
    glitch[i].style.width = Math.floor(Math.random()*500) + 'px'
    glitch[i].style.height = Math.floor(Math.random()*100) + 'px'
}
}, 100)

