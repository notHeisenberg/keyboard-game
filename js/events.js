function  continueGame(){
    const alphaBate = generateAlphaBate();
    console.log('random value', alphaBate);

    setAlphaBate('current-text',alphaBate)
    // console.log('initial value',document.getElementById('current-text').innerText);

    // const elementText = document.getElementById('current-text');
    // elementText.innerText = alphaBate;

}


function play() {
    hideElement('home-section');
    showElement('play-section')
    continueGame();
}