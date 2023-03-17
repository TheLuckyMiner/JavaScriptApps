const imgLinks = [
    'color-1.jpg',
    'color-2.jpg',
    'color-3.jpg'
]

const delay = 5000;
let currentIndex = 0;
setInterval (function(){
    document.getElementById('image').src = imgLinks[currentIndex];
    currentIndex++;
    if(currentIndex >= imgLinks.length){
        currentIndex = 0;
    }
}, delay);
