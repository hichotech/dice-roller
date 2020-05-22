const rollbutton = document.querySelector('#rollbutton')
const inputnumber = document.querySelector('#dice-number')
const list = document.querySelector('#orderlist')
const summary = document.querySelector('#summary')
const clearroll = document.querySelector('#clear-roll')

rollbutton.addEventListener("click", function () {


    let dice = [inputnumber.value]
    for (let index = 0; index < dice; index += 1) {


        let diceRoll = Math.floor(Math.random() * 6) + 1
        result = '<li class="roll-list" >' + diceRoll + "</li>"
        list.innerHTML += result
    }

})
clearroll.addEventListener("click", function () {
    if (inputnumber.innerHTML >= 0) {
        list.innerHTML = ""
        inputnumber.value = ""
        summary.innerHTML = ""

    }

})