
const {multiply,isGreaterThanTwo,addTwo,isGreaterThanSeventy,addFive,square,distribute,timeOfClass} = require("./AdvancedArrays")

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

test("time of class",()=>{
    const array = ["1:00 PM","2:00 PM","3:00 PM","9:12 AM","8:20 AM"];
    let result = timeOfClass(array);
    expect(result).toEqual(["1:00 PM","2:00 PM","3:00 PM"]);
})