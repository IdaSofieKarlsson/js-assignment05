//object, a general bank account
const account = {
    accountName: "Ida-Sofie Karlsson",
    loggedIn: true,
    balanceCheckAccount: 1234.56,
    balanceSavingsAccount: 1.23,
    //function: basic error message, whenever you type incorrectly
    accountError() {
        prompt("General error, probably incorrect input!");
    },
    //function: display balance on all accounts
    getBalance() {
        const { balanceCheckAccount, balanceSavingsAccount } = this;
        prompt(`The balance on your check account is ${balanceCheckAccount} and the balance on your savings account is ${balanceSavingsAccount}. The total balance is ${balanceCheckAccount + balanceSavingsAccount}.`);
    },
    //function: display account holders name
    getAccountName() {
        prompt(`The name of the account holder is ${this.accountName}`);
    },
    //function: make a deposit, choose which account and how much
    deposit() {
        let optionDeposit = parseFloat(prompt("Which account would you like to deposit to? 1: your check account. 2: your savings account"));
        let amountDeposit = parseFloat(prompt("How much would you like to deposit?"));

        if (isNaN(amountDeposit)) {
            this.accountError();
        } else {
            //switch for two options is a bit over the top, but it enables easier expanding the code if later changing to more account options
            //there are no break in the switch statement, because return does the same thing: exits the code
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
     //function: make a withdrawel, choose which account and how much. Same as deposit(), except you can't withdrawel more than the balance on the account
    withdrawal() {
        let optionWithdrawal = parseFloat(prompt("Which account would you like to withdrawal from? 1: your check account. 2: your savings account."));
        let amountWithdrawal = parseFloat(prompt("How much would you like to withdrawal?"));

        if (isNaN(amountWithdrawal)) {
            this.accountError();
        } else {
            //switch for two options is a bit over the top, but it enables easier expanding the code if later changing to more account options
            //there are no break in the switch statement, because return does the same thing: exits the code
            switch(optionWithdrawal) {             
                case 1: 
                    if (this.balanceCheckAccount < amountWithdrawal) {
                        prompt("Sorry, not enough on your account...");
                        break;
                    } else {
                        this.balanceCheckAccount = this.balanceCheckAccount - amountWithdrawal;
                        prompt(`Your new balans on your check account is ${this.balanceCheckAccount}`);
                        return this.balanceCheckAccount;
                    }
                case 2: 
                    if (this.balanceSavingsAccount < amountWithdrawal) {
                        prompt("Sorry, not enough on your account...");
                        break;
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
    //function: exits the account
    exitAccount() {
        this.loggedIn = false;
        prompt("You have now exited your account. Have a nice day!");
        return this.loggedIn;
    },
    //function: the whole interface, includes all other functions
    atmInterface() {
        while (this.loggedIn) {
            const atmOption = parseFloat(prompt
                ("Hello and welcome to Evil Bank of Påarp! Select a choice. 1: See balance. 2: Make a deposit. 3: Make a withdrawel. 4: Get account name. 5: Exit account."));
            switch (atmOption) {
                 case 1: 
                    this.getBalance();
                    break;
                case 2: 
                    this.deposit();
                    break;
                case 3: 
                    this.withdrawal();
                    break;
                case 4: 
                    this.getAccountName();
                    break;
                case 5:
                    this.exitAccount();
                    break;
                default: 
                    this.accountError();
                    break;
            }
        }
    },
} //here ends the object

console.log(account.loggedIn); //checking if exit function works

account.atmInterface();

console.log(account.loggedIn);  //checking if exit function works
