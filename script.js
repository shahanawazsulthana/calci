let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button");

buttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        let buttonText=e.target.innerHTML;
        if(buttonText=="="){
            input.value=eval(input.value);
        }
        else if(buttonText=="Ac"){
            input.value="";
        }
        else if(buttonText=="DEL"){
            input.value=input.value.slice(0,-1);
        }
        else{
            input.value+=buttonText;
        }
    })
})