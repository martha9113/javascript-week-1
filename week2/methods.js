let person={
    name :"John",
    age:30,
    speak :function (){
        console.log("Hello my name is " + this.name + "I am " +this.age + "years old")
    }
}
console.log(person.name)
person.speak()

let store={
    name :"Karib groceries",
    location:"Maganjo",
    stock :{
        beans:100,
        maize:200,
        peas:250,
    },
    salesProduce:function(){
    console.log("sold successfully")   
 }
}
store.salesProduce()

let calculator={
    add:function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    }
}
console.log(calculator.add(5,4))
console.log(calculator.subtract(10,5))