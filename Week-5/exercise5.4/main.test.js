const mathOperations = require('./main');
test('math operation ',()=>{
expect(mathOperations.sum(1,2)).toBe(3),
expect(mathOperations.diff(2,2)).toBe(0),
expect(mathOperations.product(1,2)).toBe(2)
});



