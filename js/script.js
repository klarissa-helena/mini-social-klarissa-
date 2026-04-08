let likeCount =0;
let curtido= false;

function curtir (){
    if(curtir==false){
        CurtirCount++;
        Curtir= true;
        document.getElementById("deslikeCount"). innerText = CurtirCount
    
    }else{
        curtirCount--;
        curtir = false;
        document.getElementById("curtirCount"). innerText= curtirCount;
    }

document.getElementById("likeBnt").addEventListener("click, curtir");


let DeslikeCount =0;
let Deslike =false;

 function deslike (){
    
    if(deslike==false){

        DeslikeCount++;
        Deslike= true;
        document.getElementById("deslikeCount"). innerText = DeslikeCount
    }else{
        DeslikeCount--;
        Deslike= false;
    } 
     
document.getElementById("deslikeBnt").addEventListener("click, deslike");
