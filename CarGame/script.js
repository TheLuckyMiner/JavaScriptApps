let Car = function (x,y){
    this.x = x;
    this.y = y;
    this.speed = 10;
};

Car.prototype.draw = function(){
    let carHTML = "<img style='width: 95px' src='Car2.png'>";

    this.carElement = $(carHTML);

    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y
    });
    $('.road').append(this.carElement);
   
};

Car.prototype.moveRight = function() {
    this.x += this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y,
        transform: 'rotate(0)'

    });
};

Car.prototype.moveLeft = function () {
    this.x -= this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y,
    transform: 'rotate(180deg)'
    });
};

Car.prototype.moveUp = function () {
    this.y -= this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y,
    transform: 'rotate(270deg)'
    });
};

Car.prototype.moveDown = function () {
    this.y += this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y,
    transform: 'rotate(90deg)'
    });
};

let tesla = new Car(300,370);

tesla.draw();

document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowLeft':
            tesla.moveLeft();
            break;
        case 'ArrowUp':
            tesla.moveUp();
            break;
        case 'ArrowRight':
            tesla.moveRight();
            break;
        case 'ArrowDown':
            tesla.moveDown();
            break;
    }
});
