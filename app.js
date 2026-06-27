import rl from "readline-sync"
import { CreateCustomer, ShowCustomers, Deposit, withdraw, searchCustomer, closeAccount, showStatistics } from "./system_function.js"

const bankAccounts = [];


function Bank() {
    let choice;
    const options = {
        menu: function () {
            const menu = "option-1: create_customer";
            return menu;
        },
        add: this.menu
    }
}


let choice;

do {
    const menu = "option-1: Create Customer\noption-2: Show Customers\noption-3: Deposit\noption-4: Withdraw\noption-5: Search Customer\noption-6: Close Account\noption-7: Show Statistics";
    console.log(menu);
    choice = rl.question("Please enter your choice: ");
    if (choice === "1") {

        const name = rl.question("Enter a name: ");
        const accountType = rl.question("Enter a account type choose: (regular, premium, student): ");
        const amount = rl.questionInt("Enter an amount: ");

        console.log(CreateCustomer(name, accountType, amount));

    } else {
        if (choice === "2") {
            ShowCustomers();
        } else {
            if (choice === "3") {
                const CustomerID = rl.questionInt("Please enter an ID: ");
                const depositAmount = rl.questionInt("Please enter the amount: ");
                console.log(Deposit(CustomerID, depositAmount));
            } else {
                if (choice === "4") {
                    const CustomerID = rl.questionInt("Please enter an ID: ");
                    const withdrawAmount = rl.questionInt("Please enter the amount: ");
                    console.log(withdraw(CustomerID, withdrawAmount));

                } else {
                    if (choice === "5") {
                        const customerID = rl.questionInt("Please enter an id to search for: ");
                        console.log(searchCustomer(customerID));
                    } else {
                        if (choice === "6") {
                            const customerID = rl.questionInt("Please enter an id for account you want to deactivate: ");
                            console.log(closeAccount(customerID));
                        } else {
                            if (choice === "7") {
                                console.log(showStatistics());
                            }
                        }
                    }
                }
            }
        }
    }
} while (choice !== "stop");




