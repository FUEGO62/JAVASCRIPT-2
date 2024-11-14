
const {multiply,isGreaterThanTwo,addTwo,isGreaterThanSeventy,addFive,square,distribute,timeOfClass,getTotalCost,gradingSystem,filterCostsLessThan100,discountedPrices,addOneToArray} = require("./AdvancedArrays")

test("multiply each element by 2",()=>{
    const array = [1,2,3];
    let result = multiply(array);
    expect(result).toEqual([2,4,6]);
})

test("is greater than 2",()=>{
    const array = [1,2,3,4,5,6];
    let result = isGreaterThanTwo(array);
    expect(result).toEqual([3,4,5,6]);
})

test("add two",()=>{
    const array = [1,2,3,4,5,6];
    let result = addTwo(array);
    expect(result).toEqual([3,4,5,6,7,8]);
})

test("add five",()=>{
    const array = [1,2,3,4,5,6];
    let result = addFive(array);
    expect(result).toEqual([6,7,8,9,10,11]);
})

test("is greater than 70",()=>{
    const array = [1,2,3,400,5,6];
    let result = isGreaterThanSeventy(array);
    expect(result).toEqual([400]);
})

test("square",()=>{
    const array = [1,2,3,4,5,6];
    let result = square(array);
    expect(result).toEqual([1,4,9,16,25,36]);
})

test("time of class",()=>{
    const array = ["1:00 PM","2:00 PM","3:00 PM","9:12 AM","8:20 AM"];
    let result = timeOfClass(array);
    expect(result).toEqual(["1:00 PM","2:00 PM","3:00 PM"]);
})

test("getTotalCost",()=>{
    expect(getTotalCost()).toEqual(380)
})

test("grade scores",()=>{
    const array = [1,2,3,4,5,69];
    let result = gradingSystem(array);
    expect(result).toEqual(["F","F","F","F","F","D"]);
})

test("costs less than $100",()=>{
    const expected = {
        orders:[{id: 1, items: [{price: 25, quantity: 2}, {price: 15, quantity: 3}]}, {id: 3, items: [{price: 30, quantity: 1}]}],
        correspondingTotalCosts: [95,30]
    }
    expect(filterCostsLessThan100()).toEqual(expected);
})

test("discounted prices",()=>{
    const expected = [
        { name: "Laptop", originalPrice: 1200 ,discountedPrice:1080 },
        { name: "Phone", originalPrice: 600 ,discountedPrice:540},
        { name: "Monitor", originalPrice: 200 ,discountedPrice:180}
    ]
    expect(expected).toEqual(discountedPrices())
})

test("add one to array",()=>{
    const array = [-9,9];
    let result = [-9,8];
    expect(result).toEqual(addOneToArray(array));
})