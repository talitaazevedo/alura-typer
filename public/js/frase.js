$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){

    $('#spinner').toggle();
    $.get('http://localhost:3000/frases', trocaFraseAleatoria)// Metodo para fazer requisição  no servidor
    .fail(function(){
        $('#erro').toggle(); // Quando tiver falha mostra mensagem de erro
        setTimeout(function(){
            $('#erro').toggle();// esconde meu erro ou mostra
        }, 2000);
    })
    .always(function(){
        $('#spinner').toggle(); //Mostra ou esconde meu Spinner sempre executa está função o tempo todo.

    });

}
function trocaFraseAleatoria(data){ //function recebe data como argumento, este argumento é referente ao retorno do metodo get
    let frase = $('.frase');
    let numeroAleatorio = Math.floor(Math.random() * data.length); //Math.floor arredonda  o numero abaixo, math.random faz o randomico de um numero aleatorio
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);//este numero aleatorio é passado num array como indice o .tempo ou .texto acessa a propriedade e retorna ela onde solicitei.
}

function buscaFrase(){
    console.log('Busquei a frase');
    $('#spinner').toggle();
    let fraseId = $('#frase-id').val();
    let dados = { id: fraseId};
    $.get('http://localhost:3000/frases',dados,trocaFrase)
    .fail(function(){
        $('#erro').toggle();
        setTimeout(function(){
            $('#erro').toggle();
        },2000);
    })
    .always(function(){
        $('#spinner').toggle();
    });
}
//está function recebe o retorno do metodo get que chama para troca de frase
function trocaFrase(data){
    console.log("Retorno da requisição:" + data);
    let frase = $('.frase');
    frase.text(data.texto);//insere no campo frase o objeto texto dawta do id.
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);//atualiza buscando o objeto tempo dentro ddo retorno da requisição assincrona

}
