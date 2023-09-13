module.exports = {auth}

// some sample users, this could be a database
const users = [
    { id: 1, status: "user", username: "sith4ever", password: "father", firstName: "darth", lastName: "vader"},
    { id: 2, status: "admin", username: "luky", password: "alderaan", firstName: "luke", lastName: "skywalker"}
]

// async to return promise
async function auth( {username, password} ) {
    // Array.prototype.find() returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
    const user = users.find( elem => elem.username === username && elem.password === password)
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword
    }
}