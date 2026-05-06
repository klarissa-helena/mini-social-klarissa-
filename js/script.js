//=== BANCO DE DADOS (JSON simulado) ===
 
let post ={
  likeCount:0,
  dislikeCount: 0,
  curtido: false,
  descurtido: false
}

let likeCount = 0;
let dislikeCount = 0;
let curtido = false;
let descurtido = false;

//=== SERVICE (regras de negócio) === 

function curtir() {
  if (post.curtido == false){
   post.likeCount++;
   post.curtido = true;

    if(post.descurtido == true){
      post.dislikeCount--;
      post.descurtido = false;
    }

  }else{
    post.likeCount--;
    post.curtido = false;
  }

}

function descurtir() {
  if(post.descurtido == false){
    post.dislikeCount++;
    post.descurtido = true;

    if(post.curtido == true){
      post.likeCount--;
      post.curtido = false;
    }

  }
  else{
   post.dislikeCount--;
    post.descurtido = false;
  }
}

//=== API SIMULADA ===

function getPost(){
  return post;
}
function likePost(){
curtir();
return post;
}

function dislikePost (){
 likePost();
 return post;
}


// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = post.likeCount;
  document.getElementById("dislikeCount").innerText = post.curtidodislikeCount;
}

//=== CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
  atualizarTela();
}
function clicarDescurtir(){
  descurtir();
  atualizarTela();
}

// === EVENTOS ===

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("dislikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO ===  

atualizarTela();