function maiorNota(notas) {
    let resultadoNota = 0;
    let resultadoIndex = 0;
    let resultadoQtd = 0;
    for (let index = 0; index < notas.length; index++) {
        let notaAtual = notas[index][1]
        let qtdAtual = notas[index][0]

        if (notaAtual > resultadoNota) {
            resultadoNota = notaAtual
            resultadoIndex = index
            resultadoQtd = qtdAtual
        } else if (notaAtual == resultadoNota) {
            if (qtdAtual < resultadoQtd) {
                resultadoNota = notaAtual
                resultadoIndex = index
                resultadoQtd = qtdAtual
            }
        }
    }

    return notas[resultadoIndex]
}

// chamadas
mn1 = maiorNota([[123, 4], [133, 2], [423, 5], [100, 4]]); // 423
mn2 = maiorNota([[123, 5], [133, 2], [99, 5], [100, 4]]); // 99
