class User {
    #password; // private field

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    checkPassword(inputPassword) {
        return inputPassword === this.#password;
    }

    changePassword(newPassword) {
        this.#password = newPassword;
    }
}

const user2 = new User("testUser", "123");

console.log(user2.username);                // testUser
console.log(user2.checkPassword("123"));// true

// Direct access not allowed
//console.log(user2.#password); // Syntax Error