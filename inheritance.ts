class Customer1 {
  public CustomerCode: string;

  constructor() {
    this.CustomerCode = "Default Customer";
  }
}

class GoldCustomer1 extends Customer1 {
  CustomerCode = "Gold Customer";
}
