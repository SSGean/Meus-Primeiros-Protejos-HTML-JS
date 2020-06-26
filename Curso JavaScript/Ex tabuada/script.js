function multiplicar() {
    var n1 = document.getElementById('num')
    var res = document.getElementById('seletor')
    if (n1.value.length == 0) {
        window.alert('[digite um número válido]')
    } else {
        var n = Number(n1.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`  
            res.appendChild(item)
            c++     
    }
    }

}