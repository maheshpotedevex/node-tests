var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if email exist
    // Save the user to the database
    /* db.saveUser({
        email: email,
        password: password
    });*/
    // es6 syntax
    db.saveUser({ email, password });
    // Send the welcome email
};