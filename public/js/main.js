var tempoInicial = $('#tempo-digitacao').text();
var campo = $(".campo-digitacao");

$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciaJogo);
    $('#botao-placar').click(mostraPlacar);

    console.log("### Todas as Funções foram carregadas ###");

});


function atualizaTamanhoFrase() {
    let frase = $(".frase").text();
    let numeroDePalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numeroDePalavras);


}

function inicializaContadores() {
    campo.on("input", function () {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length;
        $("#contador-palavras-digitadas").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);

    });


}

function inicializaCronometro() {
    let tempoRestante = $('#tempo-digitacao').text();
    campo.one("focus", function () {

        var cronometroId = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr('disabled', true);
                clearInterval(cronometroId);
                $('#botao-reiniciar').attr('disabled', false);
                campo.toggleClass('campo-desativado');
                inserePlacar();

            }

        }, 1000);
    });
}

function reiniciaJogo() {

    campo.attr("disabled", false);
    campo.val("");
    $('#contador-palavras-digitadas').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempoInicial);
    campo.toggleClass('campo-desativado');
    campo.removeClass('borda-vermelha');
    campo.removeClass('borda-verde');
    inicializaCronometro();
    console.log('Cliquei em reiniciar Jogo');
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on('input', function () {

        let digitado = campo.val();
        let comparavel = frase.substr(0, digitado.length);

        if (digitado == comparavel) {
            campo.addClass('borda-verde');
            campo.removeClass('borda-vermelha');
        } else {
            campo.addClass('borda-vermelha');
            campo.removeClass('borda-verde');
        }
        console.log('digitado:' + digitado);
        console.log('comparavel:' + comparavel);
    });
}
//Código com ECMA Script 6
/*
        if (frase.startsWith(digitado)) {
            campo.addClass("borda-verde")
        } else {
            campo.addClass('borda-vermelha');
        }
*/