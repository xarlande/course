const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const current0Element = document.querySelector('#current--0')
const current1Element = document.querySelector('#current--1')
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')
const diceElement = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

diceElement.classList.add('hidden')
const nullScore = (score) => {
    score.textContent = 0
}
nullScore(score0Element)
nullScore(score1Element)

const totalScores = [0, 0]
let currentScore = 0
let activePlayer = 0
const currentPlayer = document.querySelector(`.player--${activePlayer}`)

btnRoll.addEventListener('click', () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    const currentPlayer = document.getElementById(`current--${activePlayer}`)
    diceElement.classList.remove('hidden')
    diceElement.src = `dice${diceNumber}.png`
    if (diceNumber !== 1) {
        currentScore += diceNumber
        currentPlayer.textContent = currentScore
    } else {
        currentScore = 0
        currentPlayer.textContent = currentScore
        activePlayer == 0 ? activePlayer++ : activePlayer = 0
    }
    if (activePlayer == 0) {
        player0Element.classList.add('player--active')
        player1Element.classList.remove('player--active')
    } else {
        player0Element.classList.remove('player--active')
        player1Element.classList.add('player--active')
    }
})
