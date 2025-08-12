function main() {
  function funcaoMMC(lista) {
    let resultado = [];
    let divisor = 2;

    while (!lista.every((n) => n === 1)) {
      let foiDividido = false;

      for (let i = 0; i < lista.length; i++) {
        if (lista[i] % divisor === 0) {
          lista[i] = lista[i] / divisor;
          foiDividido = true;
        }
      }

      if (foiDividido) {
        resultado.push(divisor);
      } else {
        divisor++;
      }
    }

    // Calcula o produto de todos os divisores encontrados
    const mmc = resultado.reduce((acc, val) => acc * val, 1);
    console.log("MMC:", mmc);
    return mmc;
  }

  function calcularMDC(array) {
    if (!array.length) return 0;

    const menor = Math.min(...array);

    // só dá pra pular de 2 em 2 quando TODOS são pares
    const todosPares = array.every((n) => n % 2 === 0);
    const passo = todosPares ? 2 : 1;

    for (let candidato = menor; candidato >= 1; candidato -= passo) {
      if (array.every((n) => n % candidato === 0)) {
        return candidato;
      }
    }

    return 1;
  }
}
