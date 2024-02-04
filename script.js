let input=document.getElementById("text");
let boxes= document.querySelectorAll(".box");
let modebtn=document.getElementById("toggle");
let str="";
let body= document.querySelector("body");
let currMode="dark";
let arr= Array.from(boxes);
let img=document.getElementById("myImg");
arr.forEach( box=>{
  box.addEventListener('click', (e)=>
  {
    if(e.target.innerHTML == '=')
    {
        str = eval(str);
        input.value= str;

    }
    else if(e.target.innerHTML=="C")
    {
        input.value="";
        str="";
    }
    else if(e.target.innerHTML== "DEL"){
        str= str.substring(0, str.length-1);
        input.value=str;
    }
    else{
    str += e.target.innerHTML;
    input.value=str;
    }

  })
}
);
modebtn.addEventListener("click",()=>{
  if(currMode==="light")
  {
    currMode="dark";
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    img.src="sunicon.png";
    
  }
  else
  {
    currMode="light";
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    img.src="moonicon.png";
    
  }
})
