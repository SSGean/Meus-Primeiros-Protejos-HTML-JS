function desconto() {

    var produto = window.prompt('Qual é o produto que você está comprando?');
    var preco = Number(window.prompt(`Qual é o preço de ${produto}`).replace(',', '.'));
    var desc = 10 * (preco / 100);
    var preco_desc = (preco - desc);

    document.getElementById('div#res');

    preco = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    desc = desc.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    preco_desc = preco_desc.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    res.innerHTML = (` <b> Calculando desconto de 10% para ${produto}...</b><br>
    <br>
    O preço original era de ${preco}. <br>
    <br>
    Você acaba de ganhar ${desc} de desconto (-10). <br>
    <br>
    No fim, você vai pagar ${preco_desc}.`);

}