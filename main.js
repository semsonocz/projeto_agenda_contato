const form = document.getElementById('form-atividade');
const imgAdicionado = '<img src="./img/contato.png" alt= "Novo contato" />'
const NovContato = [];
const NovNumero = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContatoFinal();

});

function adicionaLinha() {
    const inputContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    NovContato.push(inputContato.value);
    NovNumero.push(inputNumero);

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `<td>${inputContato.value = imgAdicionado}</td>`;
    linha += '</td>';

    linhas += linha;

    inputContato.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatoFinal(){
    console.log(NovContato);
    console.log(NovNumero);
}