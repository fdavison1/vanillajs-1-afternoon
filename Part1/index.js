// console.log('fred')

const game = []
const board = []

function play(clicked){
    const clickedElement =  document.getElementById(clicked) 
    const playerSpan = document.getElementById('player')
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        game.push('X')
        board[clicked] = 'X'
        console.log(game)
        // console.log(board)
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = '0'
        game.push('O')
        board[clicked] = 'O'
        console.log(game)
        // console.log(board)
    }
    function done(){
        const status = document.querySelector('#status')
        if (game.length >= 9){
            console.log('DONE')
            status.innerText = 'DONE'
        } else {
            console.log('PLAYING')
        }
    } done(game)
}

const topLeft = board[0]
const topCenter = board[1]
const topRight = board[2]
const middleLeft = game[3]
const middleCenter = game[4]
const middleRight = game[5]
const botLeft = game[6]
const botCenter = game[7]
const botRight = game[8]

if (topLeft !== undefined && topLeft ===topCenter && topLeft=== topRight){
    alert('hmm')
    // return
}