let Car = function (x,y){
    this.x = x;
    this.y = y;
    this.speed = 5;
};

Car.prototype.draw = function(){
    let carHTML = "<img style='width: 300px' src='car.png'>";

    this.carElement = $(carHTML);

    this.carElement.css({
        position: 'absolute',
        left: this.x,
        top: this.y
    });
    $('body').append(this.carElement);
   
};

Car.prototype.moveRight = function() {
    this.x += this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
};

Car.prototype.moveUp = function () {
    this.y -= this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += this.speed;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
};

let tesla = new Car(20,20);
let nissan = new Car(100,200);

tesla.draw();
nissan.draw();

