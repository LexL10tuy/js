document.getElementById('button').addEventListener('click', function(){
    // const name = prompt("Введите свое имя: ")
    const year = document.getElementById('nameInput').value;

    if (year) {
        message.textContent = `Вам ${2025 - year} года!`;
    } else {
        message.textContent = 'Пожалуйста, введите год рождения!';
    }

});