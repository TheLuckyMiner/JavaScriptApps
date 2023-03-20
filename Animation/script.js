let leftOffSet = 0;
let moveHeading = function(){
    $('#list').offset({left: leftOffSet});

    leftOfSet++;

    if(leftOffSet > 200) {
        leftOffSet = 0;
    }
};

setInterval(moveHeading, 3000);