//Author: Ramazantk3
const clear = document.querySelector(".clear");
const substract = document.querySelector(".substract");
const sum = document.querySelector(".sum");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const number0 = document.querySelector(".zero");
const number1 = document.querySelector(".one");
const number2 = document.querySelector(".two");
const number3 = document.querySelector(".three");
const number4 = document.querySelector(".four");
const number5 = document.querySelector(".five");
const number6 = document.querySelector(".six");
const number7 = document.querySelector(".seven");
const number8 = document.querySelector(".eight");
const number9 = document.querySelector(".nine");
const ans = document.querySelector(".ans");
var displayText=document.querySelector(".displayText").innerHTML;
var var1,var2;
let state;

number0.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number0.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;

    }else {
        displayText =Number(displayText);
        displayText *=10;
        displayText+= Number(number0.innerHTML);
        document.querySelector(".displayText").innerHTML = displayText;
    }
}
number1.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number1.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;

    }else {
        displayText =Number(displayText);
        displayText *=10;
        displayText+= Number(number1.innerHTML);
        document.querySelector(".displayText").innerHTML = displayText;
    }
}
number2.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number2.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number2.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number3.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number3.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number3.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number4.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number4.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number4.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number5.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number5.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number5.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number6.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number6.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number6.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number7.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number7.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number7.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number8.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number8.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number8.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
number9.onclick = function(){
    if(displayText =="0"){
    document.querySelector(".displayText").innerHTML=number9.innerHTML;
    displayText=document.querySelector(".displayText").innerHTML;
    }else {
        displayText =Number(displayText);
         displayText *=10;
         displayText+= Number(number9.innerHTML);
         document.querySelector(".displayText").innerHTML = displayText;
        }
    
}
clear.onclick = function(){
    document.querySelector(".displayText").innerHTML="0";
    displayText=document.querySelector(".displayText").innerHTML;
    state="none";
    document.querySelector(".function").innerHTML="";
}
substract.onclick = function(){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    var1 = displayText;
    state="substract";
    document.querySelector(".function").innerHTML="−";
    document.querySelector(".displayText").innerHTML="0";
    displayText=document.querySelector(".displayText").innerHTML;
}
sum.onclick = function(){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    var1 = displayText;
    state="sum";
    document.querySelector(".function").innerHTML="+";
    document.querySelector(".displayText").innerHTML="0";
    displayText=document.querySelector(".displayText").innerHTML;
}
multiply.onclick = function(){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    var1 = displayText;
    state="multiply";
    document.querySelector(".function").innerHTML="x";
    document.querySelector(".displayText").innerHTML="0";
    displayText=document.querySelector(".displayText").innerHTML;
}
divide.onclick = function(){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    var1 = displayText;
    state="divide";
    document.querySelector(".function").innerHTML="÷";
    document.querySelector(".displayText").innerHTML="0";
    displayText=document.querySelector(".displayText").innerHTML;
}
ans.onclick = function(){
   if(state=="substract"){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    displayText = var1 - displayText;
    document.querySelector(".displayText").innerHTML = "Ans= " + displayText;
   }else if(state=="sum"){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    displayText = var1 + displayText;
    document.querySelector(".displayText").innerHTML = "Ans= " + displayText;
   }else if(state=="multiply"){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    displayText = var1 * displayText;
    document.querySelector(".displayText").innerHTML = "Ans= " + displayText;
   }else if(state=="divide"){
    displayText = document.querySelector(".displayText").innerHTML;
    displayText = Number(displayText);
    displayText = var1 * 1/displayText;
    document.querySelector(".displayText").innerHTML = "Ans= " + displayText;
   }
   state="none";
   document.querySelector(".function").innerHTML="";
   displayText="0";
}
