var formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    var dados = new FormData(formulario);

    fetch(formulario.action, {
        method: formulario.method,
        body: dados,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(resposta) {
        if (resposta.ok) {
            var nome = document.getElementById('nome').value;
            alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");
            formulario.reset(); 
        } else {
            alert("Ops! Houve um erro ao enviar o formulário. Tente novamente.");
        }
    }).catch(function(erro) {
        alert("Houve um erro de conexão.");
    });
});