const idade = 0

if (idade <= 0) {
    console.log("nem nasceu")
} else if (idade < 18) {
    console.log("Crianca ou Adolescente")
} else if (idade < 60) {
    console.log("Adulto")
} else if (idade < 130) {
    console.log("Idoso")
} else {
    console.log("Ja morreu")
}