let player = {
    name: "Dave",
    chips: 0
}
let cards = []
let sum = 0 
let sumEl = document.querySelector("#sum-el")
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": " + "$" + player.chips 


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard >= 11) {
        return 10
    }
    return randomCard
} 


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    if (sum <= 20) {
        message = "Draw a card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "Bust!"
        isAlive = false
    }   
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
//counting out the first two cards and new card and displaying them next to each other
    for (i = 0; i < cards.length ; i ++) {
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}
