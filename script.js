const disp = document.querySelector("#display");
let btnn = document.querySelectorAll(".btn");

function clearDisplay(){
    disp.value='';
}
function clearLast(){
    disp.value=disp.value.slice(0,-1);
}
 function appendToDisplay(value){
    disp.value+= value;
}





