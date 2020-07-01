function converter() {
   
    var c = Number(window.prompt('Digite uma temperatura em °C(Celsius)').replace(',' , '.'));

    var k = (c + 273.15).toLocaleString('pt-BR');

    var f = (1.8 * c + 32).toLocaleString('pt-BR');
    
    document.getElementById('div#res');

    c = c.toLocaleString('pt-BR')
    
    res.innerHTML = (` <b> A temperatura de ${c}°C, corresponde a...</b><br>
    <br>
    ${k}°K (Kelvin) <br>
    <br>
    ${f}°F (Fahrenheit)`);

}