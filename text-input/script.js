var input = document.getElementById("textinput");
var placeholder = document.getElementsByClassName("placeholder");

input.addEventListener( 'focusin', e => {
    placeholder[0].classList.add('top');
});

input.addEventListener( 'focusout', e => {
    if (e.path[0].value == '') placeholder[0].classList.toggle('top');
});