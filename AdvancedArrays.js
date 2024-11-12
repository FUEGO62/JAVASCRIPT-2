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

function getTotalCost(){
    let total = 0;
    const costs = { "groceries": 150,
                        "dining out": 100,
                        "transportation": 50,
                        "entertainment": 80
                        }

    for(let item in costs){
        total +=  costs[item]
    }
    return total;
}

function gradingSystem(scores){

    const finalResult = scores.map((num)=>{

        if(num>=90 && num <=100)return "A";
        if(num>=80 && num <=89)return "B";
        if(num>=70 && num <=79)return "C";
        if(num>=60 && num <=69)return "D";
        if(num<60)return "F";
    });

    return finalResult;
}

function getHealthySnacks(){
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ]

    let healthyItems = []

    for(let item of shoppingList){
        if(item.isHealthy === true){
            healthyItems.push(item)
        }
    }
    healthyItems.forEach(healthyItem=>{
        console.log(healthyItem.name)
    })
}

getHealthySnacks();

function filterCostsLessThan100() {

    let result = []
    let resultTotalCosts = []

    const orders = [
        {id: 1, items: [{price: 25, quantity: 2}, {price: 15, quantity: 3}]},
        {id: 2, items: [{price: 100, quantity: 1}, {price: 25, quantity: 2}]},
        {id: 3, items: [{price: 30, quantity: 1}]},
    ];

    let totalCost = 0;
   for(let i = 0; i < orders.length; i++){
       for (j = 0; j < orders[i].items.length; j++){
           totalCost += orders[i].items[j].price * orders[i].items[j].quantity;
       }

       if(totalCost <= 100){
           result.push(orders[i]);
           resultTotalCosts.push(totalCost);
       }
       totalCost = 0;
   }
   let summary ={
       orders: result,
       correspondingTotalCosts: resultTotalCosts
   }
   return summary
}

function discountedPrices(){
    let result = []

    const products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 600 },
        { name: "Mouse", price: 25 },
        { name: "Monitor", price: 200 }
        ]
    for(let item of products){
        if(item.price >50){
            let object = {
                name: item.name, originalPrice:item.price, discountedPrice : 0.9*(item.price)
            }
            result.push(object);
        }
    }

    return result;
}

module.exports = {multiply,isGreaterThanTwo,addTwo,isGreaterThanSeventy,addFive,square,distribute,timeOfClass,getTotalCost,gradingSystem,filterCostsLessThan100,discountedPrices};