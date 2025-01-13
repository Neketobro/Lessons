class BankAccount {
  constructor(money) {
      this.money = money;
  }
  getBalance() {
      return this.money;
  }
  
  deposit(amount) {
      if (amount <= 0) {
          console.log("Сума внеску повинна бути більшою за нуль.");
          return;
      }
      this.money += amount;
  }

  withdraw(amount) {
      if (amount <= 0) {
          console.log("Сума зняття повинна бути більшою за нуль.");
          return;
      }
      if (amount > this.money) {
          console.log("Недостатньо коштів для зняття.");
          return;
      }
      this.money -= amount;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300