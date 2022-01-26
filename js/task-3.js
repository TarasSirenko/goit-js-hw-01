const ADMIN_PASSWORD = "12345"
let massage = prompt("Введите пароль")

if (massage === null) {
    massage = "Отменено пользователем!"
    // console.log(massage);
} else if (massage === ADMIN_PASSWORD) {
    massage = "Добро пожаловать!"
    // console.log(massage);
} else {
    massage = "Доступ запрещен, неверный пароль"
    // console.log(massage);
}
alert(massage)

