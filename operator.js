//add
//subtraction
//multiplication
//division
//less than
//greater than
//square root
//invrement
//exponential
//modullus
//inequality
//parenthesis
//percentages
//equal
//not
//decrement
//unary negation
//cube root
//strict equality
//xor

//comparison operator
//equal
//less than or equal to
//greater than or equal too

//arithmetic operator
//divide
//multiplication
//addition
//subtraction

let pricePerKg =3000;
let quantity = 10;
let totalcost = pricePerKg*quantity
console.log(totalcost);
console.log("The price of 10kg of beans is:"  +totalcost);
console.log("The price of beans is: ${totalcost}$");

let discount =500;
let discountedPrice =totalcost-discount;
console.log(discountedPrice);

let buyerMoney =5000;
let priceOfMaizePerKg=5000;
console.log(buyerMoney===priceOfMaizePerKg);

//logical operators
let stockIsAvailable = true;
let buyerIsLegit=false;
console.log(stockIsAvailable&&buyerIsLegit);

//concatination
let buyerName ="Martha"
let productName ="greens"
let receiptMessage="Thank you !!"+buyerName + "You have just purchased" +quantity+"kgs of" +productName;
console.log(receiptMessage)

//Assignment operators
let stock =100;
let sales =20;
 stock=stock-sales;
 stock-=sales
 console.log(stock)

 let salesRevenue=0;
 salesRevenue=salesRevenue+totalcost
salesRevenue+=totalcost
console.log(salesRevenue)


//order of precedence 
let value=3+4*5;
console.log(value);

let value=10/2*4+5-3
console.l