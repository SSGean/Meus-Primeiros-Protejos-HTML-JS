var c = window.confirm('Você confirma o acesso a essa página?')
if (c == true) {
    document.write('Você aceitou o acesso!')
} else if (c == false) {
    document.write('Você recusou o acesso!')
}