//////methode1//////////

class car {
    constructor (make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed = +10;
    }

    break(){
        this.speed = -5;
    }
}
const car1 = new car ('BMW', 120);
const car2 = new car ('mercedes', 95);
console.log(car1)
console.log(car2)


/////////methode2///////

// const Car = function (make, speed){
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function () {
//     console.log(10+ this.make)
// }
// Car.prototype.break = function () {
//     console.log(5- this.speed)
// }
// const car1 = new Car ('BMW', 120);
// const car2 = new Car ('mercedes', 95);
// console.log(car1)
// console.log(car2)

