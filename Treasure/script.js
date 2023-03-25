let getRandomNumber = function (size){
    return Math.floor(Math.random() * size);
    clicks = 0;
};

let getDistance = function (event, target){
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function (distance){
    if (distance < 15){
        return "Победа!";
    } else if (distance < 20) {
        return "Обожжешься!";
    } else if (distance < 40){
        return "Очень горячо!";
    } else if (distance < 80){
        return "Горячо!";
    } else if (distance < 160){
        return "Тепло!";
    } else if (distance < 320){
        return "Холодно!";
    } else if (distance < 400){
        return 'Очень холодно!';
    } else {
        return 'Замерзнешь!';
    }
};

let width = 833;
let height = 500;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$('.map').click(function (event){
    clicks++;

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('.distance').text(distanceHint);

    if(distance < 15){
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});

