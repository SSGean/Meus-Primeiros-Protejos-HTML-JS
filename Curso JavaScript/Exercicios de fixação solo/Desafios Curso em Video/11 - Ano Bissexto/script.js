function verificar() {

    var ano = Number(window.prompt('Qual é o ano que você quer verificar?'));

    var bissexto = (ano % 4);

    document.getElementById('div#res');

    if (bissexto == 0) {
        res.innerHTML = (`<h3>Analisando o ano de ${ano}...</h3>
         O ano de ${ano} <b><span class="green"> É BISSEXTO</span>&#9989</b>`);
    } else {
        res.innerHTML = (`<h3>Analisando o ano de ${ano}...</h3>
         O ano de ${ano} <b><span class="red">NÃO É BISSEXTO</span> &#10060</b>`);
    }



}