let stocks = {
    fruits : ["strawberry","banana","grapes","apple"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]
};

let isShopOpen = true;

function time(ms){
    return new Promise ((resolve,reject) =>{
        if(isShopOpen){
            setTimeout(resolve,ms)
        }else{
            reject(console.log("i'm sorry,the shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} was chosen`);
        await time(0);
        console.log("production was started");
        await time(2000);
        console.log("cut the fruit");
        await time(3000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        await time(1000);
        console.log("start the machine");
        await time(2000);
        console.log(`ice cream is placed on ${stocks.holder[2]}`);
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`);
        await time(2000);
        console.log("serve the ice cream");
    }
    catch{console.log("customer left")}
    finally{console.log("day ended,shop is closed")};
}

kitchen();