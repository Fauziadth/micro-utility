var toggle = document.getElementById("toggle");
var bod = document.getElementsByTagName("body");

toggle.addEventListener( 'change', e => {
    document.body.classList.toggle('dark');
})