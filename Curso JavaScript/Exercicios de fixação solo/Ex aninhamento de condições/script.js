function confere() {
    var sal = Number(document.getElementById('txtsal').value)
    var res = document.querySelector('div#res')
    if (sal == 0) {
        window.alert('[ERRO!] Por favor, digíte um número válido!')
    } else if (sal <= 1254) {
        var sal = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
       window.alert(`Segundo o Centro de Politicas Sociais da Fundacão Getúlio Vargas, você está na classe E por ter renda média de ${sal}`)
    } else if (sal <= 2004) {
        var sal = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        window.alert(`Segundo o Centro de Politicas Sociais da Fundacão Getúlio Vargas, você está na classe D por ter renda média de ${sal}`)
    } else if (sal <= 8640) {
        var sal = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        window.alert(`Segundo o Centro de Politicas Sociais da Fundacão Getúlio Vargas, você está na classe C por ter renda média de ${sal}`)
    } else if (sal <= 11261) {
        var sal = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        window.alert(`Segundo o Centro de Politicas Sociais da Fundacão Getúlio Vargas, você está na classe B por ter renda média de ${sal}`)
    } else if (sal >= 11262) {
        var sal = sal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        window.alert(`Segundo o Centro de Politicas Sociais da Fundacão Getúlio Vargas, você está na classe A por ter renda média de ${sal}`)
    }
 



}