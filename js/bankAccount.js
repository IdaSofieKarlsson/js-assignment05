prompt("Hello and welcome to Evil Bank of Påarp!");

const account = {
    accountName: "Ida-Sofie Karlsson",
    balanceCheckAccount: 1234.56,
    balanceSavingsAccount: 1.23,

    accountError() {
        prompt("General error, probably incorrect input!");
    },

    getBalance() {
        const { balanceCheckAccount, balanceSavingsAccount } = this;
        prompt(`The balance on your check account is ${balanceCheckAccount} and the balance on your savings account is ${balanceSavingsAccount}. 
            The total balance is ${balanceCheckAccount + balanceSavingsAccount}.`);
    },

    getAccountName() {
        prompt(`The name of the account holder is ${this.accountName}`);
    },

    deposit() {
        let optionDeposit = parseFloat(prompt("Which account would you like to deposit to? 1: your check account. 2: your savings account"));
        let amountDeposit = parseFloat(prompt("How much would you like to deposit?"));

        if (isNaN(amountDeposit)) {
            this.accountError();
        } else {
            //switch for two options is a bit over the top, but it enables easier expanding the code if later changing to more account options
            switch(optionDeposit) {             
                case 1: 
                    this.balanceCheckAccount = this.balanceCheckAccount + amountDeposit;
                    prompt(`Your new balans on your check account is ${this.balanceCheckAccount}`);
                    return this.balanceCheckAccount;
                case 2: 
                    this.balanceSavingsAccount = this.balanceSavingsAccount + amountDeposit;
                    prompt(`Your new balans on your savings account is ${this.balanceSavingsAccount}`);
                    return this.balanceSavingsAccount;
                default: 
                    this.accountError();
                    break;    
            }
        }
    },

    withdrawal() {
        let optionWithdrawal = parseFloat(prompt("Which account would you like to withdrawal from? 1: your check account. 2: your savings account"));
        let amountWithdrawal = parseFloat(prompt("How much would you like to withdrawal?"));

        if (isNaN(amountWithdrawal)) {
            this.accountError();
        } else {
            //switch for two options is a bit over the top, but it enables easier expanding the code if later changing to more account options
            switch(optionWithdrawal) {             
                case 1: 
                    if (this.balanceCheckAccount < amountWithdrawal) {
                        prompt("Sorry, not enough on your account...");
                        return this.balanceCheckAccount;
                    } else {
                        this.balanceCheckAccount = this.balanceCheckAccount - amountWithdrawal;
                        prompt(`Your new balans on your check account is ${this.balanceCheckAccount}`);
                        return this.balanceCheckAccount;
                    }
                case 2: 
                    if (this.balanceSavingsAccount < amountWithdrawal) {
                        prompt("Sorry, not enough on your account...");
                        return this.balanceSavingsAccount;
                    } else {
                        this.balanceSavingsAccount = this.balanceSavingsAccount - amountWithdrawal;
                        prompt(`Your new balans on your savings account is ${this.balanceSavingsAccount}`);
                        return this.balanceSavingsAccount;
                    }
                default: 
                    this.accountError();
                    break; 
            }
        }
    },
} //here ends the object


account.deposit();

account.getBalance();

account.withdrawal();

account.getBalance();

account.getAccountName();
