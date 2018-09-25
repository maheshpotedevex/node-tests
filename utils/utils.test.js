const expect = require('expect');
const utils = require('./utils');

// it mocha function : BEhavior driven development.
it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');

    // if (res != 44) {
    //     throw new Error(`Expected 44, but got 66 ${res}`);
    // }
});

// Asynchronus testing 
it('should async two numbers', (done) => {
    utils.async(4, 5, (res) => {
        expect(res).toBe(9).toBeA('number');
        done(); // When callback finished.
    });
});


// Async square function
it('Should async square a numeric value', (done) => {
    utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
    });
});

it('Should square a numeric value', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
    // if (res != 81) {
    //     throw new Error(`Expected 81, but got ${res}`);
    // }
});

it('Should set firstname and lastname', () => {
    var user = { location: "Nandurbar", age: 28 };
    var res = utils.setName(user, "Lalit Pote");

    expect(user).toEqual(res);
    expect(user).toInclude({
        firstName: "Lalit",
        lastName: "Pote"
    });
});

/*
it('Should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({ name: "Mahesh" }).toNotEqual({ name: "Maheshs" });
    expect([2, 3, 4]).toExclude(1);
}); 

*/