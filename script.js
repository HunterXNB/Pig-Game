const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")
const current0 = document.querySelector("#current--0")

const current1 = document.querySelector("#current--1")

const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

const dice = document.querySelector(".dice")
let currentScore = 0
//start state
score0.textContent = 0
score1.textContent = 0
dice.classList.add("hidden")
//rolling dice 
btnRoll.addEventListener("click", (event) => {
    //generate a random number
    const diceVal = Math.ceil(Math.random() * 6)
    const activePlayer = document.querySelector(".player--active")
    const activePlayerCurrentScore = activePlayer.children[2].children[1]
    //display the dice
    dice.src = `dice-${diceVal}.png`
    dice.classList.remove("hidden")
    //game core
    if (diceVal !== 1) {
        currentScore += diceVal
        activePlayerCurrentScore.textContent = currentScore
    } else {
        currentScore = 0
        activePlayerCurrentScore.textContent = currentScore
        player0.classList.toggle("player--active")
        player1.classList.toggle("player--active")

    }
})
btnHold.addEventListener("click", (event) => {
    const activePlayer = document.querySelector(".player--active")
    const activePlayerScore = activePlayer.children[1]
    const activePlayerCurrentScore = activePlayer.children[2].children[1]
    if (activePlayerCurrentScore.textContent != 0) {
        activePlayerScore.textContent = +activePlayerScore.textContent + +activePlayerCurrentScore.textContent
        activePlayerCurrentScore.textContent = 0
        currentScore = 0
        player0.classList.toggle("player--active")
        player1.classList.toggle("player--active")
        if (activePlayerScore.textContent >= 100) {
            alert(`${activePlayer.children[0].textContent} is the winner.`)
            btnNew.click()
        }


    }
})
btnNew.addEventListener("click", () => {
    score0.textContent = 0
    score1.textContent = 0
    dice.classList.add("hidden")
    currentScore = 0
    current0.textContent = 0
    current1.textContent = 0
    player0.classList.add("player--active")
    player1.classList.remove("player--active")
})
