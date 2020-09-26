"use strict";

class Calc {
    constructor(number) {
        this.number = number;
    }

    add(n){
        this.number += n;
    }


    subtract(n) {
        this.number -= n;
    }

    multiply(n) {
        this.number *= n;
    }

     devide(n) {
        this.number /= n; //exception when n=0?
    }

    square() {
        this.number = this.number * this.number;
        return this;
    }

    cube() {
        this.number = this.number * this.number * this.number;
        return this;
    }

    value(){
        return this.number;
    }

}

module.exports = Calc;
