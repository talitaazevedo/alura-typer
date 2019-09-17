function inserePlacar() {
    let corpoTabela = $('.placar').find('tbody');
    let usuario = 'Seu-Nome';
    let numPalavras = $('#contador-palavras-digitadas').text();
    let linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.append(linha);
    $('.placar').slideDown(500);
    scrollPlacar();
}

function removeLinha(event) {
    event.preventDefault();
    let linha = $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function(){

        linha.remove();
    },1000);

}

function novaLinha(usuario, palavras) {

    let tr = $("<tr>");
    let tdUsuario = $("<td>").text(usuario);
    let tdPalavras = $('<td>').text(palavras);
    let tdRemover = $('<td>');

    let link = $('<a>').attr('href', '#').addClass('botao-remover');
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete');


    link.append(icone);
    tdRemover.append(link);

    tr.append(tdUsuario);
    tr.append(tdPalavras);
    tr.append(tdRemover);


    return tr;

}

function mostraPlacar(){
    $('.placar').stop().slideToggle(600);

}

function scrollPlacar(){
    let posicaoPlacar = $('.placar').offset();
    $(body).animate({
        scrolltop: posicaoPlacar +"px"
    },1000);
}
