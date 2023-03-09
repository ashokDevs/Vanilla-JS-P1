const color=document.getElementById('color');
const btn=document.getElementById("click");
const body=document.querySelector('body');
const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click", ()=> {
    let hexColor="#";
    for(i=0;i<6;i++){
        hexColor+=hex[Math.floor(Math.random()*hex.length)];
    }
    color.textContent=hexColor;
    body.style.backgroundColor=hexColor;
})
