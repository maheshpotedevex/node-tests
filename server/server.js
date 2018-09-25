const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.status(404).send('hello world');
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    /* res.status(200).send({
         firstName: 'mahesh',
         lastName: 'pote',
         age: 29
     });*/

    // Make an users array
    res.send([{
        name: 'Mahesh',
        age: 29
    }, {
        name: 'Sham',
        age: 29
    }, {
        name: 'Rahul',
        age: 30
    }]);
});

app.listen(3000, () => {
    console.log('Server started with port 3000');
});

module.exports.app = app;