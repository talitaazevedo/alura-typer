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



