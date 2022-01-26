let countryName = prompt("Укажите страну получателя")
countryName = countryName.toLowerCase(); 
let deliveryPrice
// console.log(countryName);

switch (countryName) {
    case "китай":
        deliveryPrice = 100
        console.log(`Доставка в Китай будет стоить ${deliveryPrice} кредитов`);
        break;
    case "чили":
        deliveryPrice = 250 
        console.log(`Доставка в Чили будет стоить ${deliveryPrice} кредитов`);
        break;
    case "австралия":
        deliveryPrice = 170 
        console.log(`Доставка в Австралию будет стоить ${deliveryPrice} кредитов`);
        break;
    case "индия":
        deliveryPrice = 80 
        console.log(`Доставка в Индию будет стоить ${deliveryPrice} кредитов`);
        break;
    case "ямайка":
        deliveryPrice = 120 
        console.log(`Доставка в Ямайку будет стоить ${deliveryPrice} кредитов`);
        break;
    case "украина":
        deliveryPrice = "почки романа кретина" 
        console.log(`Доставка в Украину будет стоить ${deliveryPrice}`);
        break;
    default:
        alert ("В вашей стране доставка не доступна!")
}

