// let credits = 23580
// const pricePerDroid = 3000
// let numberOfDroids = prompt("Сколько ремонтных дроидов вы хотите купить?")

// let totalPrice

// if (numberOfDroids === null) {
//     console.log("Отменено пользователем!");
// } else {
//     numberOfDroids = Number(numberOfDroids)
//     // console.log(numberOfDroids);
//     totalPrice = numberOfDroids * pricePerDroid
//     // console.log(totalPrice);
// }
// // console.log(totalPrice);
// if (totalPrice > credits) {
//     // console.log("Недостаточно средств на счету!");
// } else  if (totalPrice <= credits){
//     credits = credits - totalPrice
//     console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`);
// }33


// Вариант 2 - добавил работу с дом. Вариант с отрицательным количеством и предупреждение о недостаточном балансе


// const inputRef = document.querySelector('.amount')
// const buttonRef = document.querySelector('.button')

// let credits = 29000;
// const pricePerDroid = 3000;


// buttonRef.addEventListener('click', () => {
//     let amount = Number(inputRef.value)
//     if (amount === 0) {
//         alert('Вы не заказали ни одного дроида, заказ анулирован')
//     } 
//     if (amount < 0) {
//         alert('Количество дроидов не может быть отрицательным')
//      }
//     let totalPrice = amount * pricePerDroid
//     if ( 0 < totalPrice && totalPrice <= credits) {
//         credits -= totalPrice
//         alert(`Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`)
//         console.log(`Вы купили ${amount} дроидов, на счету осталось ${credits} кредитов.`);
//     } else if (totalPrice > credits) {
//         alert ('Средств на счету недостаточно!')
//     }
//     if (credits < pricePerDroid) {
//         alert ('Недостаточно средств для продолжения покупок')
//     }
// })
