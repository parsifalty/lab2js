const transactions = require("./transactions");
const functions = require("./functions");

console.log("=== Анализ транзакций ===\n");

console.log("Уникальные типы транзакций:", functions.getUniqueTransactionTypes(transactions));
console.log("Общая сумма транзакций:", functions.calculateTotalAmount(transactions));
console.log("Дебетовые транзакции:", functions.getTransactionByType(transactions, "debit"));
console.log("Кредитовые транзакции:", functions.getTransactionByType(transactions, "credit"));
console.log("Транзакции с 2019-01-01 по 2019-01-03:", 
    functions.getTransactionsInDateRange(transactions, "2019-01-01", "2019-01-03"));
console.log("Транзакции в магазине 'SuperMart':", 
    functions.getTransactionsByMerchant(transactions, "SuperMart"));
console.log("Средняя сумма транзакций:", functions.calculateAverageTransactionAmount(transactions));
console.log("Транзакции в диапазоне 50-100:", 
    functions.getTransactionsByAmountRange(transactions, 50, 100));
console.log("Общая сумма дебетовых транзакций:", functions.calculateTotalDebitAmount(transactions));
console.log("Месяц с наибольшим числом транзакций:", functions.findMostTransactionsMonth(transactions));
console.log("Каких транзакций больше (debit/credit):", functions.mostTransactionTypes(transactions));
console.log("Транзакции до 2019-01-04:", 
    functions.getTransactionsBeforeDate(transactions, "2019-01-04"));
console.log("Транзакция с ID 3:", functions.findTransactionById(transactions, "3"));
console.log("Описание всех транзакций:", functions.mapTransactionDescriptions(transactions));

console.log("\nТестирование завершено!");
