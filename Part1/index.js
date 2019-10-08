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

    const topLeft = board[0]
    const topCenter = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleCenter = board[4]
    const middleRight = board[5]
    const botLeft = board[6]
    const botCenter = board[7]
    const botRight = board[8]

    const winner = document.querySelector('#winner')
    
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === botRight) {
      // alert(`${topLeft} is the winner`);
      winner.innerText = `${topLeft}`
      return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === botRight) {
      // alert(`${topRight} is the winner`);
      winner.innerText = `${topRight}`
      return;
    }
    if (topLeft !== undefined && topLeft ===topCenter && topLeft=== topRight){
        // alert(`${topLeft} wins!`)
        winner.innerText = `${topLeft}`
        return
    }

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        // alert(`${middleLeft} is the winner`);
        winner.innerText = `${topLeft}`
        return;
      }
      if (botLeft !== undefined && botLeft === botCenter && botLeft === botRight) {
        // alert(`${bottomLeft} is the winner`);
        winner.innerText = `${botLeft}`
        return;
      }
      if (topLeft !== undefined && topLeft === middleLeft && topLeft === botLeft) {
        // alert(`${topLeft} is the winner`);
        winner.innerText = `${topLeft}`
        return;
      }
      if (topCenter !== undefined && topCenter === middleCenter && topCenter === botCenter) {
        // alert(`${topCenter} is the winner`);
        winner.innerText = `${topCenter}`
        return;
      }
      if (botLeft !== undefined && botLeft === middleCenter && botLeft === topRight) {
        // alert(`${bottomLeft} is the winner`);
        winner.innerText = `${botLeft}`
        return;
      }
}
