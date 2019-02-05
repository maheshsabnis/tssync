// generic class
class GenericStack<T> {
  private top: number = 0;
  // generic member declaration
  private data: Array<T> = null;
  constructor() {
    this.data = new Array<T>();
  }

  // generic method
  push(item: T): void {
    this.data.push(item);
  }

  // generic method to return data from stack
  print(): Array<T> {
    return this.data;
  }
}

let stkNumber = new GenericStack<number>();
stkNumber.push(10);
stkNumber.push(20);
stkNumber.push(30);
stkNumber.push(50);

stkNumber.print().forEach((v: number, i: number) => {
  console.log(v);
});

let stkString = new GenericStack<string>();
stkString.push("A");
stkString.push("B");
stkString.push("C");
stkString.print().forEach((v: string, i: number) => {
  console.log(v);
});
