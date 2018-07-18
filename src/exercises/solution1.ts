// Add types to everything
type BankAccountSchema = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccountSchema = {
  money: 2000,
  deposit(value: number) {
      this.money += value;
  }
};

let myself: { name: string, bankAccount: BankAccountSchema, hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);