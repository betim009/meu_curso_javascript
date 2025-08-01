function media(numero1, numero2) {
    return (numero1 + numero2) / 2
}

function aprovar(nome, media) {
    if (media >= 6) {
        return `${nome} aprovado.`
    } else {
        return `${nome} reprovado.`
    }
}

const jean = media(5, 7)
const clare = media(5, 4)

const clareResultado = aprovar('Clare', clare)

// 2014 -> ES6

const completo = (p1, p2) => {
    return null
}
const calcular = (n1, n2) => (n1 + n2) / 2
const hello = nome => `Hello ${nome}`


