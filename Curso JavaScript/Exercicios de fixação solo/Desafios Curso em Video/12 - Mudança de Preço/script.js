function analisar() {
   
    var valor_antigo = Number(window.prompt('Qual era o preço anterior do produto?').replace(',' , '.'));
    var valor_atual = Number(window.prompt('Qual é o preço atual do poduto?').replace(',' , '.'));

    var aumento = (valor_atual - valor_antigo);
    var reducao = (valor_antigo - valor_atual);
    
    var porc_aumento = ((aumento / valor_antigo) * 100).toFixed(2).replace('.' , ',');
    var porc_reducao = ((reducao / valor_antigo) * 100).toFixed(2).replace('.' , ',');
    

    document.getElementById('div#res');   

    if (valor_antigo == valor_atual) {
   
    valor_antigo = valor_antigo.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    valor_atual = valor_atual.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    
    res.innerHTML = (`<h3><b> Analisando os valores informados...</b></h3><br>
    <br>
    O produto custava ${valor_antigo} e agora custa ${valor_atual}.<br>
    <br>
    Não houve mudança de valor.`);
} else if (valor_antigo > valor_atual) {

    valor_antigo = valor_antigo.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    valor_atual = valor_atual.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    aumento = aumento.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    reducao = reducao.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
   
    res.innerHTML = (`<h3><b> Analisando os valores informados...</b></h3>
    &#8226 O produto custava ${valor_antigo} e agora custa ${valor_atual}.<br>
    <br>
    &#8226 O produto está mais barato.<br>
    <br>
    &#8226 Houve uma redução de ${reducao} em relação ao preço anterior.<br>
    <br>
    &#8226 Uma variação de ${porc_reducao}% para baixo.`)
} else if (valor_antigo < valor_atual) {

    valor_antigo = valor_antigo.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    valor_atual = valor_atual.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    aumento = aumento.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'});
    reducao = reducao.toLocaleString('pt-BR' , {style:'currency' , currency:'BRL'}).replace('-' , '');

    res.innerHTML = (`<h3><b> Analisando os valores informados...</b></h3><br>
    &#8226 O produto custava ${valor_antigo} e agora custa ${valor_atual}.<br>
    <br>
    &#8226 O produto está mais caro.<br>
    <br>
    &#8226 Houve um aumento de ${aumento} em relação ao preço anterior.<br>
    <br>
    &#8226 Uma variação de ${porc_aumento}% para cima.`)
}

}