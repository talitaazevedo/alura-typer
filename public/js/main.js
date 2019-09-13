console.log("### BORA APRENDER ###");

let frase = $(".frase").text();
let numeroDePalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroDePalavras);


//contadores 
var campo = $(".campo-digitacao");
campo.on("input", function(){

    
    console.log("##cliquei no campo###");
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length;
    $("#contador-palavras-digitadas").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
    
});

//trabalhando com o tempo de digitação

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

