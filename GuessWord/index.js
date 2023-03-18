
let words = ["один","два","три"];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while(remainingLetters > 0){ 
    alert(answerArray.join(" "));

    let guess = prompt("Угадайте буквы или нажмите отмена для выхода из игры");
    if (guess === null){
        break;
    } else if(guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву");
    } else {
        for (let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }}
}

alert(answerArray.join(" "));
alert("Отлично! Было загадано слово: " + word);


/*
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

let message = document.querySelector('.subscription-message');

let form = document.querySelector('.subscription');
form.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();
  message.textContent = 'Форма отправлена!';
};

form.onsubmit = function(evt) {
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  message.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.';
};

*/