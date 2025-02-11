let display = document.getElementById("display");

// function appendToDisplay(value){
//     display.value += value;
// }

function appendToDisplay(value) {
    let lastChar = display.value.slice(-1);

    // Prevent consecutive operators (but allow ^ for exponentiation)
    if ("+-*/^".includes(lastChar) && "+-*/^".includes(value)) {
        return; // Stop process
    }

    // Prevent multiple dots in the same number
    if (value === ".") {
        let parts = display.value.split(/[\+\-\*\/\^]/); // Split by operators to get the last number
        let lastNumber = parts[parts.length - 1];

        if (lastNumber.includes(".")) {
            return; // If the last number already has a dot, stop process
        }
    }

    display.value += value;
}


function clearDisplay(){
    display.value = ""
}

function deleteLast(){
    display.value = display.value.slice(0,-1)
}

function calculateResult(){
    try{
        let expression = display.value // this takes in all the value of the display(input{all the values operators etc})
        let LastChar = expression[expression.length - 1] // expression.length calculates length and -1 givess last character { e.g lets say 88-1+3/ length is 7 and length-1 is 6 which is last character since string starts from 0,1,2,3,4,5,6 == 7 length and 6th position is the last character} 

    // If last character is an operator, remove it
        // if ("+-*/.".indexOf(LastChar) !== -1) {
        //     expression = expression.slice(0, -1);
        // }
        if ("+-*/.^".includes(LastChar)) {
            expression = expression.slice(0, -1);
        }

       // Convert % to /100
       expression = expression.replaceAll("%", "/100");

       // Convert ^ to ** for exponentiation
       expression = expression.replaceAll("^", "**"); // was undone in 

        // expression = expression.split('%').join('/100') // this finds the '%' then cuts the 'string' where and then joins the calculation /100 which does methametically
        
        display.value = eval(expression)
    }
    catch(error){
        display.value = "error"
    }
}


