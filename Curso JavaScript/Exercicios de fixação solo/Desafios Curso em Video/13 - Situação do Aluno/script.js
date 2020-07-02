function calcular() {
    var aluno = (window.prompt('Digite o nome do aluno.'));
    var n1 = Number(window.prompt(`Digite a primeira nota de ${aluno}`).replace(',' , '.'));
    var n2 = Number(window.prompt(`Digite a segunda nota de ${aluno}`).replace(',' , '.'));
    
    var media = ((n1 + n2) / 2);
   
    document.getElementById('div#res');
    
    if (media < 3) {

    res.innerHTML = (`<b> Analisando a situação de ${aluno}...</b><br>
    <br>
    Com as notas ${n1} e ${n2}, a média é <b>${media}</b><br>
    <br>
    O aluno está <span class="reprovado"><b>REPROVADO.</b><span>`);

} else if (media < 6) {
    
    res.innerHTML = (`<b> Analisando a situação de ${aluno}...</b><br>
    <br>
    Com as notas ${n1} e ${n2}, a média é <b>${media}</b><br>
    O aluno está em <span class="recuperacao"><b>RECUPERAÇÃO.</b></span>`);
} else if (media > 6) {
  
    res.innerHTML = (`<b> Analisando a situação de ${aluno}...</b><br>
    <br>
    Com as notas ${n1} e ${n2}, a média é <b>${media}</b><br>
    O aluno está <span class="aprovado"><b>APROVADO.</b></span>`);
}

}