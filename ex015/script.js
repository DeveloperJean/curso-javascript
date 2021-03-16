function verificar() {
    var data = new DataCue()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
    if (fsex[0].checked) {
        var gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //criança
        } else if (idade <21) {
            //jovem
        } else if (idade < 50) {
            //adulto
        } else {
            //idoso
        }
    } else if (fsex[1].checed) {
        if (idade >=0 && idade < 10) {
            //criança
        } else if (idade < 21) {
            //jovem
        } else if (idade < 50) {
            //adulto
        } else {
            //idoso
        }
    }
}