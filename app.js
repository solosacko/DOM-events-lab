
// constants ? complex data [] {} ?
// variables
    // tbd
    // num1 = number(button text)
    // num2 = number(button text)
    // operator - "+", "-", "/", "*"
    // result = "3.14"
    let num1
    let num2
    let operator
    let result = 0
// dom elements - 


const numberBtnEls = document.querySelectorAll('.number');
const operatorBtnEls = document.querySelectorAll('.operator');
const equalBtnEl = document.querySelector('.equal');
const displayEl = document.querySelector('.display')
// buttons
    //   div.number
    //   div.operator
    //   div.equal
    // result - .display

// functions

const render = () => {
    // render is updating the textContent of display
    displayEl.textContent = result
    console.log(result)
}
const updateResult = () => {
    result = num1
    render()
}

const updateNumbers = (event) => {
    console.log(event.target.textContent)

    

// if the operator is undefined
if (operator === undefined) {
    if (num1 === undefined) {
        num1 = event.target.textContent
    
    }
    else {
        
        num1 = num1+event.target.textContent
    
    }
    result = num1
} else {
    if (num2 === undefined) {
        num2 = event.target.textContent
       } else {
        num2 = num2+event.target.textContent
       }
       result = num2
}
render ()
       console.log("num1 ", num1, "num2 ", num2);
}

// event handler -

numberBtnEls.forEach((numBtnEl)=> {
    // console.log(numBtnEl)

    // Goal: add an event listener to the button?
    numBtnEl.addEventListener('click', updateNumbers)
})
   // click handler for each group of elements
   // functionality will be tied to its button

   const updateOperator = (event) => {
    console.log(operatorBtnEls)
    operator = event.target.textContent
   }

   operatorBtnEls.forEach((operatorBtnEl) => {
    operatorBtnEl.addEventListener('click', updateOperator)
   })