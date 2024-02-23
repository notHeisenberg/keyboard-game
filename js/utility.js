
function setAlphaBate(elementID,value){
    const elementText = document.getElementById(elementID);
    elementText.innerText = value;
}

function generateAlphaBate(){
    const keys = 'abcdefghijklmnopqrstuvwxyz/'.split('');
    const index = parseInt(Math.random()*26)
    const randomAlphaBate = keys[index];
    return randomAlphaBate ;

}

function hideElement(elementID){
    const ElementText = document.getElementById(elementID);
    ElementText.classList.add('hidden') 
}

function showElement(elementID){
    const ElementText = document.getElementById(elementID);
    ElementText.classList.remove('hidden') 
}