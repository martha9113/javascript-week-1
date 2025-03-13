//1

document.getElementById("firstpara").style.color="red";

document.getElementById("secondpara").style.color="green";

document.getElementById("thirdpara").style.color="blue";

document.getElementById("fourthpara").style.color="purple";


const paragraph=document.querySelectorAll("p")
for(i=0; i<allParagraphs; i++){
if(i===0 ||i===2){
    paragraphs[i].style.color="green";
}else{ 
    paragraphs[i].style.color="red";
}

    
}

