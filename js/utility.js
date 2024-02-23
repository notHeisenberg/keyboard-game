function setBackgroundColor(elementID){
    const elementText = document.getElementById(elementID);
    elementText.classList.add('bg-[#FFA500]')
}
function removeBackgroundColor(elementID){
    const elementText = document.getElementById(elementID);
    elementText.classList.remove('bg-[#FFA500]')
}


function setAlphaBate(elementID,value){
    const elementText = document.getElementById(elementID);
    elementText.innerText = value;
}

function getElementValueById(elementID){
    const getKey = document.getElementById(elementID)
    const getValue = getKey.innerText;
    return parseInt(getValue);
}

function setElementValueById(elementID,value){
    const setKey = document.getElementById(elementID);
    setKey.innerText = value;
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