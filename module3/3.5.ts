{
  //
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance += amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {}

  const goribAccount = new BankAccount(111, "mr. goribs", 20);
  goribAccount.addDeposit(56);
  const myBal = goribAccount.getBalance();
  console.log(myBal);
  //
}
