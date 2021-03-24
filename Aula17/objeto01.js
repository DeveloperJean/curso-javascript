let amigo = {nome:'José',sexo: 'M',peso: 85.4, engordar(p=0){
    console.log('Engordou, deve mudar seus habitos alimentares!')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)