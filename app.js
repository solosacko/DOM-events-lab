
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
const equalBtnEl = document.querySelector('.equals');
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
if (!operator) {
    if (!num1) {
        num1 = event.target.textContent
    
    }
    else {
        
        num1 = num1+event.target.textContent
    
    }
    result = num1
} else {
    if (!num2) {
        num2 = event.target.textContent
       } else {
        num2 = num2+event.target.textContent
       }
       result = num2
}
render ()
       console.log("num1 ", num1, "num2 ", num2);
}
// Goal: add an event listener to the equal button

        equalBtnEl.addEventListener('click', (event) => {
            // let's assign a value forEach operator
            const number1 = Number(num1);
            const number2 = Number(num2);
            if (number1 && number2)
                if(number1 && number2) {
            if (operator === '+')
                    result = (number1 + number2)
            if (operator === '-') {
                    result = (number1 - number2)
            } if (operator === '/') {
                    result = (number1 / number2)
            } if (operator === '*') {
                    result = (number1 * number2)
            }
        }
            render()
        })
// event handler -

numberBtnEls.forEach((numBtnEl)=> {
    // console.log(numBtnEl)

    // Goal: add an event listener to the button?
    numBtnEl.addEventListener('click', updateNumbers)
})
   // click handler for each group of elements
   // functionality will be tied to its button

   const updateOperator = (event) => {
    operator = event.target.textContent
    console.log(operator)
    if (operator === 'C') {
    num1 = '';
    num2 = '';
    operator = '';
    result = 0;
    render()
    }
    
   }

   operatorBtnEls.forEach((operatorBtnEl) => {
    operatorBtnEl.addEventListener('click', updateOperator)
   })
