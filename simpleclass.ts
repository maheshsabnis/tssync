class MyClass {
  //   private x: number = 0;
  //   private y: number = 0;
  constructor(public x: number, public y: number) {
    // this.x = x;
    // this.y = y;
  }

  mult(): number {
    return this.x * this.y;
  }
  div(): number {
    return this.x / this.y;
  }
}
let oC = new MyClass(10, 20);
console.log(`Res = ${oC.mult()}`);
console.log(`Res = ${oC.div()}`);
