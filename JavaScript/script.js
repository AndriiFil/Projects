'use strict'

let money = prompt("What is your month budget?",  '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: { },
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++) {
    let a = +prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется?");

    console.log(`a = ${a}, typeof(a): ` + typeof(a) + ", is null: " + (a === null));
    console.log(`b = ${b}, typeof(b): ` + typeof(b) + ", is null: " + (b === null));

    if(a && b && a.length < 50) {
        appData.expenses["val" + i] = b;
    }
}

let dayBudget = appData.budget / 30;

console.log(`Days budget is ${dayBudget} USD`);


function exercise1() {
    //prompt("What is your month budget?");
    appData.budget = prompt("What is your month budget?", 10000);
    //appData.timeData = prompt("Введите дату в формате YYYY-MM-DD");

    appData.expenses.resp1 = prompt("Введите обязательную статью расходов в этом месяце");
    appData.expenses.resp2 = prompt("Во сколько обойдется?");

    let dayBudget = appData.budget / 30;

    alert(`Days budget is ${dayBudget} USD`);
    //console.log(appData.expenses.resp1 + "   " + appData.expenses.resp2);
    console.log(`${appData.expenses.resp1}    ${appData.expenses.resp2}`);
}

function runTest() {
    let y = [ ] + 1 + 2;
    let tp = typeof(y);
    console.log("-----------");
    console.log(y);
    console.log(`Type of y: ${tp}-----`);

}