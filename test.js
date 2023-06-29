function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Сколько добавить?', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
} 

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

// describe("validate", function() {
//     function makeTest(x) {
//         let expected = prompt ("Введите число > 0");
//         it ("") {
//             assert 
//         }
//     }
// });

// describe("pow", function() {
//     // it ("2 в степени 3 будет 8", function() {
//     //     assert.equal(pow(2, 3), 8); 
//     // });

//     // it ("3 в степени 3 будет 27", function() {
//     //     assert.equal(pow(3, 3), 27); 
//     // });
//     it("для отрицательных n возвращает NaN", function() {
//         assert.isNan(pow(2, -1));
//     });

//     it("для дробных n возвращает NaN", function() {
//         assert.isNaN(pow(2, 1.5));
//     });

//     describe("возводит x в степень 3", function() {

//         function makeTest(x) {
//             let expected = x * x * x;
//             it (`${x} в степени 3 будет ${expected}`, function() {
//                 assert.equal(pow(x, 3), expected);
//             });
//         }

//         for (let x = 1; x <= 5; x++) {
//             makeTest(x);
//         }
//     });
        
//     });

