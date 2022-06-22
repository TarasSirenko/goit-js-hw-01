
// let total = 0

// while (true) {
//     let input = prompt("Введите, пожалуйста, число")
//     // console.log(number);

//     if (input === null) {
//         break
//     }
    

//     input = Number(input);
//     // console.log(input);
//     let checNumber = Number.isNaN(input);

//     if (checNumber) {
//         alert ("Че ты пиешь, число просили!")
//         continue;
//     }
//     total += input
// //    console.log(total);
// }
// // console.log(total);
// console.log (`Вот сколько ты всего написал ${total}, молодец!`)
// // alert



//  Вариант 2 -------------------------------------------------------
// let input 
// let total = 0

// do {
//     input = prompt("Введите число");
//     if (input !== null) {
//         input = Number(input)
//         if (Number.isNaN(input)) {
//              alert("Было введено не число, попробуйте еще раз")     
//         } else {     
//             total += input  
//         }        
//     } 
// } while (input !== null) {
//     alert (`Общая сумма чисел равна ${total}`)
// }

// Вариант 3 ----------------------------------------------------------

// let total = 0 

// while (true) {
//     let input = prompt('Введите пожалуйста число')
//     if (input === null) {
//         break;
//     }
//     input = Number(input)
//     if (Number.isNaN(input)) {
//         alert("Че ты пишешь, москаль не красивый? Число просили")
//         continue;
//     }
//     total += input
// }
// alert(`Общая сумма чисел равна ${total}`)

// Вариант 4 ----------------------------------------------------------


// let input 
// let total = 0 

//  while (true) {
//     let input = prompt("Введите число");
//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     if (Number.isNaN(input)) {
//         alert("Число вводи москалику, а то підешь за русским кораблем")
//         continue;
//     }
//     total+=input
// } 

// alert (`Сумма чисел складае ${total}`)