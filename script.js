const color=document.getElementById('color');
const btn=document.getElementById("click");
const body=document.querySelector('body');
const colors=[ "red","blue","violet","yellow","indigo","green",];
let i=0;


function colorChange() {
    let currentColor=colors[i];
    color.textContent=currentColor;
    body.style.backgroundColor=currentColor;
    i++;
    if(i==colors.length){
        i=0;
    } 
}

const timerID=setInterval(colorChange, 100);

btn.addEventListener("click", ()=> {
    clearInterval(timerID);
})




/* btn.addEventListener("click", ()=> {
     let currentColor=colors[i];
     color.textContent=currentColor;
     body.style.backgroundColor=currentColor;
     i++;

    if(i==colors.length){
        i=0;
    } 
        
    
        
    
},{once:false}) */