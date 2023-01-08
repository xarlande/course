const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
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

btnRoll.addEventListener('click', () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    diceElement.classList.remove('hidden')
    diceElement.src = `dice${diceNumber}.png`
    const currentPlayer = document.getElementById(`current--${activePlayer}`)

    if (diceNumber !== 1) {
        currentScore += diceNumber
        currentPlayer.textContent = currentScore
    } else {
        currentScore = 0
        currentPlayer.textContent = currentScore
        activePlayer = activePlayer === 0 ? 1 : 0
    }
    if (activePlayer === 0) {
        player0Element.classList.add('player--active')
        player1Element.classList.remove('player--active')
    } else {
        player0Element.classList.remove('player--active')
        player1Element.classList.add('player--active')
    }
})

btnNew.addEventListener('click', () =>{
    const currentPlayer = document.getElementById(`current--${activePlayer}`)
    diceElement.classList.add('hidden')
    diceElement.src = ''
    currentScore = 0
    currentPlayer.textContent = '0'
    activePlayer = 0
    player0Element.classList.remove('player--active')
    player1Element.classList.remove('player--active')
    totalScores[0] = 0
    totalScores[1] = 0
    score0Element.textContent = '0'
    score1Element.textContent = '0'
    console.log(totalScores)
})

btnHold.addEventListener('click', () => {
    const currentPlayer = document.getElementById(`current--${activePlayer}`)
    const score = document.getElementById(`score--${activePlayer}`)
    totalScores[activePlayer] += currentScore
    score.textContent = `${totalScores[activePlayer]}`
    currentScore = 0
    currentPlayer.textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    if (activePlayer === 0) {
        player0Element.classList.add('player--active')
        player1Element.classList.remove('player--active')
    } else {
        player0Element.classList.remove('player--active')
        player1Element.classList.add('player--active')
    }
})
