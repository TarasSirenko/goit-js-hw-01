// const total = 100
// const ordered = 120

// if (total > ordered) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//     console.log("На складе недостаточно товаров!");
// }


// вариант второй

const inputRef = document.querySelector('.add-number')
const buttonRef = document.querySelector('.button')
const total = 100;
let ordered;

buttonRef.addEventListener('click', () => {
    ordered = Number(inputRef.value);
    if (ordered <= total) {
         alert('Заказ оформлен, с вами свяжется менеджер')
    } else {
       alert('На складе недостаточно твоаров!')
    }
})

