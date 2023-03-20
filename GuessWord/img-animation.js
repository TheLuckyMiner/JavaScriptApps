let word = ['a','b','c','d']; let string = '';
for (let i = 0; i < word.length; i++) {string += word[i]}
document.querySelector('.guessWord').textContent = string;
let errorAmount = 0;
let doesntFound = 1;

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


function getValue(){
    let text = document.getElementById("input_form").value;
    text = text.toLowerCase();
    text = text[0];
    doesntFound = 1;
    

    for(let i =0; i < word.length; i++){
        if(word[i] === text){
            console.log('Found!', word[i]);
            doesntFound = 0;
        }
    }


    if(doesntFound){
        errorAmount++; 
        console.log(errorAmount);
        if (errorAmount > 7){
            alert("Вы проиграли! Загаданное слово: " + string);
            errorAmount = 0;
        };
        document.getElementById('image').src = imgLinks[errorAmount]
        
    }
    
}
