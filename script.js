const check = document.querySelector('.check'), numberInput = document.querySelector('.number-input'),
    numberBorder = document.querySelector('.guess-message');
let randNumber = Math.trunc(Math.random() * 20) + 1, score = document.querySelector('.score'),
    hightScore = document.querySelector('.highscore');
console.log(randNumber)


check.addEventListener('click', ()=>{
    const valueInput =Number(numberInput.value);
    if (!valueInput) {
        numberBorder.textContent = 'Введіть число'
    }
    else if (score.textContent == 1){
        score.textContent = 20
        randNumber = Math.trunc(Math.random()*20) + 1
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
        if (score.textContent>hightScore.textContent){
            hightScore.textContent = score.textContent
        }
        score.textContent = 20
        randNumber = Math.trunc(Math.random()*20) + 1
        console.log(randNumber)
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
