function leiaMais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var botao=document.getElementById("botao");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        botao.innerHTML="Mostrar mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        botao.innerHTML="Mostrar menos";
    }
}