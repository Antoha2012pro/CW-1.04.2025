//               0 2 4 6 8 1012 14
//                1 3 5 7 9 1113 15
const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reprehenderit rerum accusamus soluta repellendus labore veritatis, dolor placeat eaque id modi quae dolore error. Delectus nesciunt beatae et quos neque.`;
// console.log(message.length);
// console.log(message[0]); // Повертає перший символ рядка по його індексу
// console.log(message[message.length-1]); // Повертає останній символ рядка по його індексу

// console.log(message.toLowerCase()); // Повертає змінну нижнього регістру
// console.log(message.toUpperCase()); // Повертає змінну верхнього регістру
// console.log("Антон" === "антон"); // Буде false

// console.log(message.indexOf("dolor sit amet")); // Повертає індекс знайденого елемента 
// console.log(message.indexOf("qwe")); // Повертає -1 якщо не знайдено входження
// console.log(message.includes("qwe")); // Повертає true або false якщо рядка не знайдено
// console.log(message.indexOf("alias") === -1); // Якщо alias нема, то буде true

// console.log(message.startsWith("Lorem, ipsum dolor")); // Перевіряє, чи починається рядок з шукаємого рядка, повертає true або false
// console.log(message.endsWith("facilis voluptas accusamus!")); // Перевіряє, чи закінчується рядок з шукаємого рядка, повертає true або false
// const picture = "image.svg";
// console.log(picture.endsWith(".svg")); // Перевіряє, чи закінчується рядок з шукаємого рядка, повертає true або false

// const userName = prompt("Введіть ім'я").trim().toLowerCase(); // Метод .trim() обрізає пробіли на кінці та початку рядка
// const user = "Олександр";
// console.log(userName === user);

// const contact = "0974345663";
// console.log(contact.length);
// const renameContact = contact.padStart(13, "+38");
// console.log(renameContact.length);

// console.log(contact.padStart(17, "(+380) ")); // На початок рядка підставляє значення яке треба додати
// console.log(contact.padEnd(17, "(+380) ")); // Теж саме що і .padStart, тільки додає в кінці

console.log(message.slice(0, -1)); // З якого індекса до якого треба віризати. Якщо треба з кінця то 0, -1. Якщо поставити один індекс то буде просто обріз з кінця, якщо просто мінусове число то обрізається все, крім кінця.
