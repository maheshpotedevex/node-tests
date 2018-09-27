const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    //app.__set__('db', db);    
    app.__set__('db', db);
    it('It should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Mahesh', 29);
        expect(spy).toHaveBeenCalledWith('Mahesh', 29);
    });

    it('Should call saveUser with user object', () => {
        var email = 'mpote97@gmail.com';
        var password = '123457';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});