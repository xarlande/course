const check = document.querySelector('.check'), numberInput = document.querySelector('.number-input'),
    numberBorder = document.querySelector('.guess-message'), againGame = document.querySelector('.again'), randBorder = document.querySelector('.question'), dontScore = 1;
let randNumber = Math.trunc(Math.random() * 20) + 1, score = document.querySelector('.score'),
    hightScore = document.querySelector('.highscore');
console.log(randNumber)

check.addEventListener('click', ()=>{
    const valueInput =Number(numberInput.value);
    if (!valueInput) {
        numberBorder.textContent = 'Введіть число'
    }
    else if (score.textContent == dontScore){
        numberBorder.textContent = 'У вас закінчились спроби'
        console.log(randNumber)
    }
    else if (valueInput > 20){
        numberBorder.textContent = 'Введіть число від 1 до 20'
    }
    else if (valueInput <= 0){
        numberBorder.textContent = 'Введіть число від 1 до 20'
    }
    else if (valueInput === randNumber) {
        numberBorder.textContent = 'Виграш'
        randBorder.textContent = valueInput
        if (Number(score.textContent)>Number(hightScore.textContent)){
            hightScore.textContent = score.textContent
        }
    }
    else if (valueInput > randNumber) {
        numberBorder.textContent = 'Введіть менше число'
        score.textContent--
    }
    else if (valueInput < randNumber) {
        numberBorder.textContent = 'Введіть більше число'
        score.textContent--
    }
})
    againGame.addEventListener('click', () => {
        randNumber = Math.trunc(Math.random()*20) + 1
        score.textContent = 20
        randBorder.textContent = '???'
        numberBorder.textContent = 'Начни вгадувати'
        numberInput.value = ''
    })
