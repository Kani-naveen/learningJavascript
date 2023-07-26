
// console.log(element)

let totalExpense = 0;

function addExpenseTotal(){
    const inputElement = document.querySelector("#inputAmount")
    const textAmount = inputElement.value;
    // console.log(textAmount);

    const expense = parseInt(textAmount, 10);
    // console.log({expense})

    totalExpense = totalExpense + expense;
    // console.log({totalExpense})
}


//Get button element
const element = document.querySelector("#btnAddExpense");

// Listen to click event
element.addEventListener("click", addExpenseTotal, false)

