const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const dice = document.querySelector('.dice')

dice.classList.add('hidden')
const nullScore = (score) => {
  score.textContent = 0;
}
nullScore(score0Element)
nullScore(score1Element)

