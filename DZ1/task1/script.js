document.getElementById('button').addEventListener('click', function(){
    // const name = prompt("Введите свое имя: ")
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('message');

    if (name) {
        message.textContent = `Привет, ${name}!`;
    } else {
        message.textContent = 'Пожалуйста, введите свое имя!';
    }
    // if (name) {
    //     alert(`Привет, ${name}!`);
    // } else {
    //     ('Пожалуйста, введите свое имя!');
    // }

});