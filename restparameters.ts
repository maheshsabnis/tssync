class Operations {
  calculate(...value: number[]): number {
    let sum: number = 0;
    if (value.length == 0) {
      return sum;
    }
    value.forEach((v: number, i: number) => {
      sum += v;
    });
    return sum;
  }
}
let oP = new Operations();
console.log(`2 parameters ${oP.calculate(1, 2)}`);
console.log(`3 parameters ${oP.calculate(1, 2, 3)}`);
console.log(`4 parameters ${oP.calculate(1, 2, 3, 4)}`);
console.log(`5 parameters ${oP.calculate(1, 2, 3, 4, 5)}`);
