function sequenciar() {
    var primeiro = document.getElementById('txtp')
    var ultimo = document.getElementById('txtu')
    var intervalo = document.getElementById('txti')
    var res = document.getElementById('res')

    if (primeiro.value.length == 0 || ultimo.value.length == 0 || intervalo.value.length == 0) {
        window.alert('[ERRO] Refaça a operação')
    } else {
        res.innerHTML = 'Contagem:'
        var p = Number(primeiro.value)
        var u = Number(ultimo.value)
        var i = Number(intervalo.value)
        if (p < u) {
            for (var c = p; c <= u; c += i) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += '\u{1F3C1}'
        } else {
            for (var c = u; c >= i; c -= i) {
                res.innerHTML += `${c} \u{1F449}`
            } res.innerHTML += '\u{1F3C1}'
        }
    }
}