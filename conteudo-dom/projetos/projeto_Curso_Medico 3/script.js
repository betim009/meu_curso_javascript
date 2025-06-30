const doencas = []
const local_dor = 'Flanco Esquerdo'
const intensidade_dor = 'Forte'

if (local_dor == 'Flanco Direito') {
    doencas.push('Apendicite')
} else if (local_dor == 'Flanco Esquerdo') {
    doencas.push('Colite')
}

if (intensidade_dor == 'Forte') {
    doencas.push('Colicistite')
}
console.log(doencas)