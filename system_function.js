



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
    // return "Customer created successfully"
}

export function ShowCustomers() {
    console.log(bankAccounts)
}

export function Deposit(customerID, amount) {
    bankAccounts.forEach((bankAcount) => {
        if (bankAcount.id !== customerID) {
            return `We dont have an ID ${customerID} in our system!`
        } else {
            if (bankAcount.isActive !== true) {
                return `This account is not active so you cannot deposit to it!`
            } else {
                if (!amount > 0) {
                    return `A deposit cannot be negative!`
                } else {
                    bankAcount.balance += amount

                }

            }
        }
    })
    return `deposit ${amount} has entered into the account with the id ${customerID}`;
}


export function withdraw(customerID, amount) {
    bankAccounts.forEach((bankAcount) => {
        if (bankAcount.id !== customerID) {
            return `We dont have an ID ${customerID} in our system!`
        } else {
            if (bankAcount.isActive !== true) {
                return `This account is not active so you cannot withdraw from it!`
            } else {
                if (!amount > 0) {
                    return `A withdraw cannot be negative!`
                } else {
                    if (!bankAccounts.balance >= amount) {
                        return `You cannot withdraw more than you already have in your bankaccount`
                    }
                    bankAcount.balance -= amount

                }

            }
        }
    })
    // return `Withdraw completed successfully`;
    return `This ${amount} has been withdraw account with the id ${customerID}`;

}

let bankAccounts1 = [{ id: 1, name: "moshe" }, { id: 2, name: "mimi" }, { id: 3, name: "miri" }]

export function searchCustomer(customerID = 0, name=null) {
    let account = 0;
    if (!name && !customerID) {
        return `You did not anter something to cearch for`
    } else {
        bankAccounts1.forEach((bankAccount) => {
            if (bankAccount.id === customerID || bankAccount.name.toLowerCase() === name) {
                account = bankAccount;
            }
        })
    }

    if (account) {
        return account
    }
    return `${customerID} or ${name} name does not exsits in our system!`
}


const result = searchCustomer("mimi")
console.log(result)







// CreateCustomer("Meir", "Regular", 100)
// console.log(bankAccounts)

















