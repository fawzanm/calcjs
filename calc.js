"use strict";

class Calc {
    constructor(number) {
        this.number = number;
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
