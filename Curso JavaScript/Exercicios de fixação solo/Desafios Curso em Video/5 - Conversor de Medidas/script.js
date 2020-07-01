function converter() {
   
    var com = Number(window.prompt('Digite uma distância em metros(m)'));

    com = parseFloat(com.toFixed(2))

    var km = (com / 1000);
    km = parseFloat(km.toFixed(3)).toLocaleString('pt-BR')
    var hm = (com / 100);
    hm = parseFloat(hm.toFixed(3)).toLocaleString('pt-BR')
    var dam = (com / 10);
    dam = parseFloat(dam.toFixed(3)).toLocaleString('pt-BR')
    var dm = (com * 10);
    dm = parseFloat(dm.toFixed(2)).toLocaleString('pt-BR')
    var cm = (com * 100);
    cm = parseFloat(cm.toFixed(3)).toLocaleString('pt-BR')
    var mm = (com * 1000);
    mm = parseFloat(mm.toFixed(3)).toLocaleString('pt-BR')
    
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