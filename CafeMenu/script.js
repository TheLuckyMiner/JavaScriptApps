function showMain(){
    document.getElementById("main").style.zIndex = 1;
    document.getElementById("drinks").style.zIndex = 0;
    document.getElementById("takeaway").style.zIndex = 0;
}

function showDrinks(){
    document.getElementById("main").style.zIndex = 0;
    document.getElementById("drinks").style.zIndex = 1;
    document.getElementById("takeaway").style.zIndex = 0;
}

function showTakeaway(){
    document.getElementById("main").style.zIndex = 0;
    document.getElementById("drinks").style.zIndex = 0;
    document.getElementById("takeaway").style.zIndex = 1;
}