'use strict'

var money;
var time;

var appData = {
    budget: null,
    timeData: "",
    expenses: { resp1: 0, resp2:0 },
    optionalExpenses: "",
    income: null,
    savings: false
};

//prompt("What is your month budget?");
appData.budget = prompt("What is your month budget?", 10000);
appData.timeData = prompt("Введите дату в формате YYYY-MM-DD");

appData.expenses.resp1 = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses.resp2 = prompt("Во сколько обойдется?");

alert(appData.budget / 30);
console.log(appData.expenses.resp1 + "   " + appData.expenses.resp2);

