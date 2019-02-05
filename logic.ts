class Product {
  constructor(
    public ProductId: number,
    public ProductName: string,
    public Price: number,
    public CategoryName: string,
    public Manufacturer: string
  ) {}
}
class ProductOperations {
  prd: Product;
  products: Array<Product>;
  constructor() {
    this.prd = new Product(0, "", 0, "", "");
    this.products = new Array<Product>();
    this.products.push(
      new Product(101, "Laptop", 120000, "Electronics", "IBM")
    );
    this.products.push(new Product(102, "Desktop", 13400, "Electronics", "HP"));
    this.products.push(
      new Product(103, "Iron", 1200, "Electrical", "Philipse")
    );
  }
  // method to return all products
  getProducts(): Array<Product> {
    return this.products;
  }
  addProduct(p: Product): Array<Product> {
    this.products.push(p);
    return this.products;
  }
}
// class UIPresenter {
//   // generate table based on data from Products array
//   loadData(): void {

//   }
// }
