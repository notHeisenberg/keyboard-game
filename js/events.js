document.addEventListener('keyup', afterPressWork)

function afterPressWork(event) {

    console.log(event.key);

    const keyPressed = event.key;

    const expectedKey = document.getElementById('current-text').innerText.toLocaleLowerCase();
    console.log(expectedKey)
    // if ( keyPressed === "Escape"){
    //     score()
    // }

    if (keyPressed === expectedKey) {

        continueGame()

        removeBackgroundColor(expectedKey);

        let scoreValue = getElementValueById('score-btn');
        console.log(scoreValue)
        
        scoreValue += 1;
        console.log(scoreValue)
        setElementValueById('score-btn',scoreValue);


    }
    else{


        let lifeValue = getElementValueById('life-btn');
        console.log(lifeValue)
        lifeValue-=1;
        setElementValueById('life-btn',lifeValue);
        if (lifeValue <= 0 || keyPressed === "Escape"){
            removeBackgroundColor(expectedKey);
            score()
        }

    }
}


function continueGame() {
    const alphaBate = generateAlphaBate();
    console.log('random value', alphaBate);

    setAlphaBate('current-text', alphaBate);
    // const elementText = document.getElementById('current-text');
    // elementText.innerText = alphaBate;

    setBackgroundColor(alphaBate);

}


function play() {
    hideElement('home-section');
    hideElement('score-section');
    setElementValueById('life-btn',5)
    setElementValueById('score-btn',0)
    showElement('play-section');
    continueGame();
}

function score(){
    hideElement('play-section');
    showElement('score-section');
    const lastScore =getElementValueById('score-btn');
    setElementValueById('final-score',lastScore);
}