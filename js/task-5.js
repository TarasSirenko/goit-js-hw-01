// let countryName = prompt("Укажите страну получателя")
// countryName = countryName.toLowerCase();
// let deliveryPrice
// // console.log(countryName);

// switch (countryName) {
//     case "китай":
//         deliveryPrice = 100
//         console.log(`Доставка в Китай будет стоить ${deliveryPrice} кредитов`);
//         break;
//     case "чили":
//         deliveryPrice = 250
//         console.log(`Доставка в Чили будет стоить ${deliveryPrice} кредитов`);
//         break;
//     case "австралия":
//         deliveryPrice = 170
//         console.log(`Доставка в Австралию будет стоить ${deliveryPrice} кредитов`);
//         break;
//     case "индия":
//         deliveryPrice = 80
//         console.log(`Доставка в Индию будет стоить ${deliveryPrice} кредитов`);
//         break;
//     case "ямайка":
//         deliveryPrice = 120
//         console.log(`Доставка в Ямайку будет стоить ${deliveryPrice} кредитов`);
//         break;
//     case "украина":
//         deliveryPrice = "почки романа кретина"
//         console.log(`Доставка в Украину будет стоить ${deliveryPrice}`);
//         break;
//     default:
//         alert ("В вашей стране доставка не доступна!")
// }


// Вариант 2 ---- добавил дом и вариант с пустой строкой


// const inputRef = document.querySelector(".country") 
// const buttonRef = document.querySelector('.button')

// buttonRef.addEventListener('click', () => {
//     let country = inputRef.value
//     country = country.toLowerCase()
//     switch (country) {
//         case 'китай':
//             alert(`Отель в Китае будет стоить 100 рублей `);
//             break;
//         case 'чили':
//             alert(`Отель в Чили будет стоить 250 рублей `);
//             break;
//         case 'австралия':
//             alert(`Отель в Австралию будет стоить 170 рублей `);
//             break;
//         case 'индия':
//             alert(`Отель в Индию будет стоить 80 рублей `);
//             break;
//         case 'ямайка':
//             alert(`Отель в Ямайку будет стоить 120 рублей `);
//             break;
//         case '':
//             alert(`Вы не указали страну получателя`);
//             break;
//         default: alert(`В ${country} доставка не доступна`);
//     }
// })