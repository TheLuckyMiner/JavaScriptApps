const words = [
    'морковь', 'капуста', 'цуккини', 'редис', 'свекла', 'сельдерей', 'петрушка', 'шпинат', 'кабачок', 'брокколи', 'артишок', 'картофель', 'кукуруза'
]

const imgLinks = [
    'images/error0.png',
    'images/error1.png',
    'images/error2.png',
    'images/error3.png',
    'images/error4.png',
    'images/error5.png',
    'images/error6.png',
    'images/error7.png'
]

word = generateWord();

let userWord = []; let string = '';
for (let i = 0; i < word.length; i++) {string += word[i]; userWord[i] = '_';};
displayString(userWord);
let errorAmount = 0;

function generateWord(){
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}

function displayString(text){
    let newString = '';
    for (let i = 0; i < word.length; i++){
        newString += text[i];
    }
    document.getElementById('guessWord').innerHTML = newString;
}

function checkWord(text) {
    let doesntFound = 1;
    for(let i =0; i < word.length; i++){
        if(word[i] === text){
            userWord[i] = word[i];
            doesntFound = 0;
        }
    }
    return doesntFound;
}

function checkVictory(){
    let victory = 1;
    for (let i = 0; i < word.length; i++){
        if (word[i] === userWord[i]){
        } else {
            return 0; 
        }
    }
    if (victory === 1){
        return 1;
    }
}

function displayWarning(status){
    document.querySelector('#warning-img').style.display = status;
    document.querySelector('#warning').style.display = status;
}

function getValue(){
    let text = document.getElementById("input_form").value;
    displayWarning('none');

    //Проверка на длину и символы строки
    if (text.length === 1 && text.match(/^[a-zа-яё]+$/i)){
        text = text.toLowerCase();

        //Если такой буквы нет
        if(checkWord(text)){ 
            errorAmount++; 
            document.getElementById("errors").innerHTML = errorAmount;
            if (errorAmount > 7){
                alert("Вы проиграли! Загаданное слово: " + string);
                errorAmount = 0;
                document.getElementById("errors").innerHTML = errorAmount;
            };
            document.getElementById('image').src = imgLinks[errorAmount]
        } 
        //Если такая буква есть
        else { 
            displayString(userWord);
            if(checkVictory() === 1){
               alert("Победа! Загаданное слово: " + string);
               document.getElementById('victory').innerHTML = "Победа!";}
            }
    } else {
        displayWarning('block');
    }
}