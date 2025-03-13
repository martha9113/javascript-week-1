//1
const firstParagraph=document.querySelector("p");
console.log(firstParagraph);

//2
const firstPara=document.querySelector("#firstParagraph")
const secondPar=document.querySelector("#secondParagraph")
const thirdPar=document.querySelector("third paragraph")
const fourthPar =document.querySelector("fourth paragrah")

console.log(firstPara,secondPar,thirdPar,fourthPar)

//3
const allParagraphs=document.querySelectorAll("p")

console.log(allParagraphs)

//4
console.log(allParagraphs.length)

for (i=0; i <allParagraphs.length ; i++){
    console.log(allParagraphs[i])
};

//5
let paragraphs = document.querySelectorAll("p")
if(paragraphs.length>=4){
    paragraphs[3].textContent="fourth paragraph"
}
console.log(paragraphs)

//6
allParagraphs[3].setAttribute=("class","paragraph")

allParagraphs[3].setAttribute=("id", "fourth paragraph")

allParagraphs[3].setAttribute=("fourth paragraph")