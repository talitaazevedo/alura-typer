function inserePlacar() {
    let corpoTabela = $('.placar').find('tbody');
    let usuario = 'Seu-Nome';
    let numPalavras = $('#contador-palavras-digitadas').text();
    let linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').click(removeLinha);
    corpoTabela.append(linha);
}

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();

}

function novaLinha(usuario, palavras) {

    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $('<td>').text(palavras);
    let colunaRemover = $('<td>');

    let link = $('<a>').attr('href', '#').addClass('botao-remover');
    let icone = $('<i>').addClass('small').addClass('material-icons').text('delete');


    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);


    return linha;

}