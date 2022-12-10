const check = document.querySelector('.check'), numberInput = document.querySelector('.number-input'),
    againGame = document.querySelector('.again'), randBorder = document.querySelector('.question'), dontScore = 1;
let randNumber = Math.trunc(Math.random() * 20) + 1, score = document.querySelector('.score'),
    hightScore = document.querySelector('.highscore');
console.log(randNumber)
const numberBorder = (message) =>{
    document.querySelector('.guess-message').textContent = message
}
const scoreDecrem = () => {
    score.textContent--
}
const scoreReset = () => {
    score.textContent = 20
}

check.addEventListener('click', ()=>{
    const valueInput =Number(numberInput.value);
    if (!valueInput) {
        numberBorder('Введіть число')
    }
    else if (score.textContent == dontScore){
        numberBorder('У вас закінчились спроби')
        console.log(randNumber)
    }
    else if (valueInput > 20){
        numberBorder('Введіть число від 1 до 20')
    }
    else if (valueInput <= 0){
        numberBorder('Введіть число від 1 до 20')
    }
    else if (valueInput === randNumber) {
        numberBorder('Виграш')
        randBorder.textContent = valueInput
        if (Number(score.textContent)>Number(hightScore.textContent)){
            hightScore.textContent = score.textContent
        }
    }
    else if (valueInput > randNumber) {
        numberBorder('Введіть менше число')
        scoreDecrem()
    }
    else if (valueInput < randNumber) {
        numberBorder('Введіть більше число')
        scoreDecrem()
    }
})
    againGame.addEventListener('click', () => {
        randNumber = Math.trunc(Math.random()*20) + 1
        scoreReset()
        randBorder.textContent = '???'
        numberBorder('Начни вгадувати')
        numberInput.value = ''
    })
