class Customer {
  public CustomerCode: string;

  constructor() {
    this.CustomerCode = "Default Customer";
  }
}

class GoldCustomer extends Customer {
  CustomerCode = "Gold Customer";
}

let cust = new Customer();
console.log(cust.CustomerCode);

let goldcust = new GoldCustomer();
console.log(goldcust.CustomerCode);
