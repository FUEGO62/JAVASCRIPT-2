//FOR EACH

function multiply(arr) {
    let newArr = [];
    arr.forEach((num)=>{
        let result = num*2;
        newArr.push( result);
    })
    return newArr;
}

//FILTER

function isGreaterThanTwo(arr){
    let result = arr.filter((num)=>num>2);
    return result;
}

//MAP

function addTwo(arr){
    let result = arr.map((num)=>num+2);
    return result;
}

function isGreaterThanSeventy(arr){
    let result = arr.filter((num)=>num>70);
    return result;
}

function addFive(arr){
    let result = arr.map((num)=>num+5);
    return result;
}

function square(arr){
    let result = arr.map((num)=>num*num);
    return result;
}

function distribute(arr){
    for(const item of arr){
        console.log(item+"!");
        console.log("This book belongs to you");
    }
}


function timeOfClass(arr){
    let result = arr.filter((time)=>time.charAt(time.length-2)==='P');
    return result;
}



module.exports = {multiply,isGreaterThanTwo,addTwo,isGreaterThanSeventy,addFive,square,distribute,timeOfClass};