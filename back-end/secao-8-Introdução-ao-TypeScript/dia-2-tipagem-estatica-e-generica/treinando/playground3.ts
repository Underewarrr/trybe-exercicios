class Calculadora {
  num1: number;
  num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() { console.log(this.num1 + this.num2) };
  sub() { console.log(this.num1 - this.num2) };
  div() { console.log(this.num1 / this.num2) };
  mul() { console.log(this.num1 * this.num2) };
}

const calculadora1 = new Calculadora(2, 2);
console.log(calculadora1);

calculadora1.sum()
calculadora1.sub()
calculadora1.div()
calculadora1.mul()