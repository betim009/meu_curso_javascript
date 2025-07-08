function maiorNota(notas) {
    // Sua implementação aqui
    let maiorN = 0; // 4
    let qtd = null;

    notas.forEach((element, index) => {
        if (element[1] > maiorN) {
            qtd = element[0]
            maiorN = element[1]
        } else if (element[1] === maiorN) {
            if (qtd > element[0]) {
                qtd = element[0]
            }
        }
    })
    return qtd// return qtd
}

// [423, 5]
// console.log(
//     maiorNota(
//         [[123, 4], [133, 2], [423, 5], [100, 4]]
//     )
// )

console.log(
    maiorNota(
        [[123, 5], [133, 2], [99, 5], [100, 4]]
    )
); // [99, 5]

