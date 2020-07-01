function converter() {

    var func = window.prompt(`Qual o nome do(a) funcionário(a)?`);
    var sal = Number(window.prompt(`Qual o salário de ${func}?`).replace(',', '.'));
    var porc = Number(window.prompt(`O salário de ${func} será aumentado em qual porcentagem?`));

    var aumento = (porc * (sal / 100));
    var total = (sal + aumento);

    document.getElementById('div#res');

    sal = sal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    aumento = aumento.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    total = total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    res.innerHTML = (` <b>${func} recebeu um aumento salárial!</b><br>
    <br>
    O salário atual era de ${sal}. <br>
    <br>
    Com um aumento de ${porc}%, o salário vai aumentar ${aumento} no próximo mês. <br>
    <br>
    E a partir daí, ${func} vai passar a ganhar ${total}.`);

}