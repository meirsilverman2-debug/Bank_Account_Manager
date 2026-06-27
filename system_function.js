



const accountTyps = ["regular", "premium", "student"]
const bankAccounts = []


function genretAccountID() {
    let bankAcountID = 0
    function genrateID() {
        return ++bankAcountID
    }
    return genrateID
}

const bankIdManager = genretAccountID()

// 1. Create Customer:
export function CreateCustomer(name, accountType, balance = 0) {
    const bankAcount = {}
    if (!name || typeof (name) !== "string") {
        return ` ${name} is empty!`
    } else {
        if (typeof (balance) !== "number") {
            return ` ${balance} is not a number!`
        } else {
            if (balance < 0) {
                return `Balance: ${balance} cannot be negative`
            } else {
                if (!accountTyps.includes(accountType.toLowerCase())) {
                    return `Account type: ${accountType} is not valid!`
                } else {
                    bankAcount.id = bankIdManager()
                    bankAcount.fullName = name
                    bankAcount.accountType = accountType
                    bankAcount.balance = balance
                    bankAcount.isActive = true


                    bankAccounts.push(bankAcount);
                    console.log(`Customer created successfully`)
                    console.log(bankAcount)
                }
            }
        }
    }
    return "Customer created successfully"
}


// 2. Show Customers:
export function ShowCustomers() {
    console.log(bankAccounts)
}


// 3. Deposit:
export function Deposit(customerID, amount) {
    let response = `deposit ${amount} has entered into the account with the id ${customerID}`;

    bankAccounts.forEach((bankAcount) => {
        if (bankAcount.id !== customerID) {
            response = `We dont have an ID ${customerID} in our system!`
        } else {
            if (bankAcount.isActive !== true) {
                response = `This account is not active so you cannot deposit to it!`
            } else {
                if (!amount > 0) {
                    response = `A deposit cannot be negative!`
                } else {
                    bankAcount.balance += amount

                }

            }
        }
    })
    return response;
}


// 4. Withdraw:
export function withdraw(customerID, amount) {
    let response = `This ${amount} has been withdraw account with the id ${customerID}`;
    bankAccounts.forEach((bankAcount) => {
        if (bankAcount.id !== customerID) {
            response = `We dont have an ID ${customerID} in our system!`
        } else {
            if (bankAcount.isActive !== true) {
                response = `This account is not active so you cannot withdraw from it!`
            } else {
                if (!amount > 0) {
                    response = `A withdraw cannot be negative!`
                } else {
                    if (!bankAccounts.balance >= amount) {
                        response = `You cannot withdraw more than you already have in your bankaccount`
                    }
                    bankAcount.balance -= amount

                }

            }
        }
    })
    // return `Withdraw completed successfully`;
    return response

}


// For testing
// let bankAccounts1 = [{ id: 1, name: "moshe" }, { id: 2, name: "mimi" }, { id: 3, name: "miri" }]


// 5. Search Customer:


// export function searchCustomer(customerID = 0) {

//     let account = null
//     bankAccounts.find((bankAccount) => {
//         if (bankAccount.id === customerID) {
//             account = bankAccount
//             return b
//         }
//     })

//     if (account === null) {
//         account = `there is not any account with the ID ${customerID}`
//     }
//     return account
// }

// This is also for testing
// const result = searchCustomer()
// console.log(result)


// CreateCustomer("Meir", "Regular", 100)
// console.log(bankAccounts)

// improved version that use find method
export function searchCustomer(customerID) {
    const response = bankAccounts.find((bankAccount) => { return bankAccount.id === customerID })
    if (response) {
        return response
    } else {
        return `there is not any account with the ID ${customerID}`
    }
}


// 6. Close Account:
export function closeAccount(id) {
    let isexsits = false;
    bankAccounts.forEach((bankAcount) => {
        if (id === bankAcount.id) {
            bankAcount.isActive = false;
            isexsits = true;
        }
    })

    if (isexsits) {
        return `Account closed successfully`;
    } else {
        return `This account does not exsits in our system`
    }

}


// 7. Show Statistics:

export function showStatistics() {

    const statistics = bankAccounts.reduce((statistics, bankAccount) => {
        statistics.Total_Customers = bankAccounts.length;

        if (bankAccount.isActive) {
            statistics.Active_Accounts += 1;
        }

        statistics.Total_Money += bankAccount.balance;
        statistics.Average_Balance = statistics.Total_Money / statistics.Total_Customers;

        return statistics;

    }, {
        Total_Customers: 0,
        Active_Accounts: 0,
        Total_Money: 0,
        Average_Balance: 0,
        Highest_Balance: 0
    })

    let bankAccounts2 = [...bankAccounts].sort((a, b) => a.balance - b.balance);
    statistics.Highest_Balance = bankAccounts2.pop(bankAccounts2.balance);


    return statistics;
}












