var tempoInicial = $('tempo-digitacao').text();
var campo = $(".campo-digitacao");

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    InicializaCronometro();
    $('#botao-reiniciar').click(reiniciaJogo);
    console.log("### BORA APRENDER ###");

});

function atualizaTamanhoFrase(){

    let frase = $(".frase").text();
    let numeroDePalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroDePalavras);

}


function inicializaContadores(){
    campo.on("input", function(){

    
        console.log("##cliquei no campo###");
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length;
        $("#contador-palavras-digitadas").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
        
    });
    
    
}


function InicializaCronometro(){
    let tempoRestante = $('#tempo-digitacao').text();


    campo.one("focus", function(){
        console.log('## Estou no campo## ');
        var cronometroId = setInterval(function(){
            tempoRestante--;
            console.log('##Iniciando Cronometro### ');
            console.log(tempoRestante);
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr('disabled', true);
                clearInterval(cronometroId);

            }
            
        },1000);
    });
}
   



function reiniciaJogo(){

    campo.attr("disabled", false);
    campo.val("");
    $('#contador-palavras-digitadas').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial);
    InicializaCronometro();
}
