    var cot = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',', '.'));

    function converter() {

        var real = Number(window.prompt('Quantos R$ você tem na carteira?').replace(',', '.'));

        var tot = (real / cot)
        tot = tot.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
        });


        document.getElementById('div#res');

        real = real.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        res.innerHTML = (` Com ${real} você pode comprar ${tot}`);
        

    }