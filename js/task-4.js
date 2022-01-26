let credits = 23580
const pricePerDroid = 3000 
let numberOfDroids = prompt("Сколько ремонтных дроидов вы хотите купить?")

let totalPrice

if (numberOfDroids === null) {
    console.log("Отменено пользователем!");
} else {
    numberOfDroids = Number(numberOfDroids) 
    // console.log(numberOfDroids);
    totalPrice = numberOfDroids * pricePerDroid
    // console.log(totalPrice);
}
// console.log(totalPrice);
if (totalPrice > credits) {
    // console.log("Недостаточно средств на счету!");
} else  if (totalPrice <= credits){
    credits = credits - totalPrice
    console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`);
}