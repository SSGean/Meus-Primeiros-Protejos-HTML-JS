function calc() {
    var produto = (window.prompt('Que produto você está comprando?'));
    var preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`));
    var pag = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`));

    var troco = (pag - preco);
    
    var troco = troco.toLocaleString('pt-BR' , {style:'currency' , currency: 'BRL'});
    var pag = pag.toLocaleString('pt-BR' , {style:'currency' , currency: 'BRL'});
    var preco = preco.toLocaleString('pt-BR' , {style:'currency' , currency: 'BRL'});
   
    window.alert(`Você comprou ${produto} que custou ${preco}.
Deu ${pag} em dinheiro e vai receber ${troco} de troco.
Volte Sempre!`);
}