let actionCol = document.getElementsByClassName("action-collection")[0];

actionCol.children[0].addEventListener( 'click', e => {
    actionCol.classList.toggle('showing');
    console.log('Action ', 0) ;
    
})
actionCol.children[1].addEventListener( 'click', e => {
    console.log('Action ', 1) ;
})
actionCol.children[2].addEventListener( 'click', e => {
    console.log('Action ', 2) ;
})