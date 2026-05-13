class acct_details{
    start(){
        console.log("Account is started")
    }

    #checkBalance(){                            //makes the function private
        console.log("Balance is being checked")
    }

    withdrawal(){
        this.#checkBalance()
        console.log("Withdrawal is initialized")
    }
}

let user1 = new acct_details()      //Always advised to give empty brackets if no constructor is defined
user1.start()           
//user1.checkBalance()        //syntax error as checkBalance is a private function
user1.withdrawal()