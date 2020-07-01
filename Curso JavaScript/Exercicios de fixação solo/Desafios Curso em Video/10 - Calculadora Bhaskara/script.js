function calcular() {

    var a = Number(window.prompt('Qual o valor de a?'));
    var b = Number(window.prompt('Qual o valor de b?'));
    var c = Number(window.prompt('Qual o valor de c?'));

    var raizb = (b * b);
    var delta = raizb - 4 * (a * c);

    document.getElementById('div#res');

    res.innerHTML = (`<h3><b>Resultado</b></h3>
    A equação atual é <b> ${a}x&#x000B2 + ${b}x + ${c} = 0</b> <br>
    <br>
    O calculo será <b>&#916 = ${b}&#x000B2 - 4 . ${a} . ${c}</b><br>
    <br>
    O valor calculado foi <b><mark> &#916 = ${delta}</mark></b> `);


}