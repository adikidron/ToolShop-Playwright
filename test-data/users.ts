const users = { 
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },

    user: {
        email: process.env.CUSTOMER_EMAIL,
        password: process.env.CUSTOMER_PASSWORD
    },


}

module.exports = { users };