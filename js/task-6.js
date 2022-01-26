
let total = 0

while (true) {
    let input = prompt("Введите, пожалуйста, число")
    // console.log(number);

    if (input === null) {
        break
    }
    

    input = Number(input);
    // console.log(input);
    let checNumber = Number.isNaN(input);

    if (checNumber) {
        alert ("Че ты пиешь, число просили!")
        continue;
    } 
    total += input
//    console.log(total);
}
// console.log(total);
console.log (`Вот сколько ты всего написал ${total}, молодец!`)
// alert 
 
