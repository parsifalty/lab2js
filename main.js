const transactions = require("./transactions");
const functions = require("./functions");

console.log("система анализа транзакци");


require("./test");


/*
 * Методы массивов для обработки объектов в JavaScript:
 * - map(): Применяет функцию к каждому элементу массива и возвращает новый массив с измененными элементами.
 * - filter(): Создает новый массив, содержащий только те элементы, которые удовлетворяют условию.
 * - reduce(): Выполняет функцию редукции, обрабатывая элементы массива и возвращая одно значение.

const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

// map() - Преобразуем массив объектов, увеличив возраст каждого на 1
const updatedAges = data.map(person => ({ ...person, age: person.age + 1 }));
console.log(updatedAges);

// filter() - Получаем только тех, кто старше 30 лет
const olderThan30 = data.filter(person => person.age > 30);
console.log(olderThan30);

// reduce() - Считаем суммарный возраст всех людей
const totalAge = data.reduce((sum, person) => sum + person.age, 0);
console.log(totalAge);

 * Сравнение дат в строковом формате (например, "YYYY-MM-DD")


const date1 = "2024-03-01";
const date2 = "2024-03-05";

// Преобразуем строки в объекты Date и сравниваем
if (new Date(date1) < new Date(date2)) {
    console.log("date1 раньше date2");
} else if (new Date(date1) > new Date(date2)) {
    console.log("date1 позже date2");
} else {
    console.log("date1 и date2 одинаковы");
}

*/