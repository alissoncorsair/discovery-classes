var family = {
    incomes: [0],
    expenses: [320.24, 78, 1000],
}
negativeBalance = family.expenses > family.incomes;

function sum(array) {
    let total = 0;

    for (value of array) {
        total += value
    }

    return total;
}


function calculateBalance() {
    let calculateIncomes = sum(family.incomes)
    let calculateExpenses = sum(family.expenses)
    let negativeBalance = calculateExpenses > calculateIncomes;
    let balanceText = "positivo"
    let result = calculateIncomes - calculateExpenses;


    if (negativeBalance) {
        balanceText = "negativo";
    }

    console.log(`Seu saldo é ${balanceText}.`);
    console.log(`R$ ${result.toFixed(2)}`)
}

calculateBalance();