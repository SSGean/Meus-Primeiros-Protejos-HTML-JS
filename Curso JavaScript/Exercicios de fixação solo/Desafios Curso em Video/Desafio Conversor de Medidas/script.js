function converter() {
   
    var com = toLocaleString(window.prompt('Digite uma distância em metros(m)'));

    var km = (com / 1000);
    var hm = (com / 100);
    var dam = (com / 10);
    var dm = (com * 10);
    var cm = (com * 100);
    var mm = (com * 1000);

    document.getElementById('div#res');
    
    res.innerHTML = (`<h3><b>A distância de ${com} metros, corresponde a...<b></h3>
    ${km} quilômetros (Km)
    <br>
    ${hm} hectômetros (Hm)
    <br>
    ${dam} decâmetros (Dam)
    <br>
    ${dm} decímetros (dm)
    <br>
    ${cm} centímetros (cm)
    <br>
    ${mm} milímetros (mm)`)


}