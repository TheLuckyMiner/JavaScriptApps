let leftCoord = 0;
let topCoord = 0; 

let maxWidth = 200;
let gameSpeed = 10;

let moveHeading = function() {
    $('p').offset({left: leftCoord, top: topCoord});
    if (leftCoord < maxWidth && topCoord === 0){
        leftCoord++;
    } else
    if (leftCoord === maxWidth && topCoord < maxWidth){
        topCoord++;
    } else
    if (topCoord === maxWidth && leftCoord > 0){
        leftCoord--;
    } else
    if (leftCoord === 0 && topCoord > 0){
        topCoord--;
    }
}

let finish = setInterval(moveHeading, gameSpeed);

/*

let moveHeading = function() {
    $('p').offset ({left: leftCoord, top: topCoord});

    if (lastDirection === 'top'){
        leftCoord++;
    } else if (lastDirection === 'right'){

    }

    leftOffSet++;
    if (leftOffSet > 200) {
        leftOffSet = 0;
    }
}
setInterval(moveHeading, 30);



let clickHandler = function (event){
    $('p').offset( { 
        left: event.pageX,
        top: event.pageY
    });
}
$('html').click(clickHandler);

$('html').mousemove(function (event){
    $('p').offset( { 
        left: event.pageX,
        top: event.pageY
    });
});

let clickHandler = function (event) {
    console.log("Click!" + event.pageX + ' ' + event.pageY);
};

$('p').click(clickHandler);

let leftOffSet = 0;
let moveHeading = function(){
    $('#list').offset({left: leftOffSet});

    leftOfSet++;

    if(leftOffSet > 200) {
        leftOffSet = 0;
    }
};

setInterval(moveHeading, 3000);*/