const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const current0Element = document.querySelector('#current--0')
const current1Element = document.querySelector('#current--1')
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

let currentScore = 0

btnRoll.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1
  diceElement.classList.remove('hidden')
  diceElement.src = `dice${diceNumber}.png`
  if (diceNumber !== 1){
    currentScore += diceNumber
    current0Element.textContent = currentScore
    // todo: later
  }
  if (diceNumber == 1){
    currentScore = 0
    current0Element.textContent = currentScore
  }
})
