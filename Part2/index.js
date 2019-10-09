// console.log('fred')

const input1 = document.querySelector('#input1')

const input2 = document.querySelector('#input2')

function setCard(){
    const card = document.getElementById(input1.value)
    console.log(card)
    card.style.color = input2.value
}
