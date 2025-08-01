  function funcaoMMC(lista) {
    let resultado = [];
    let divisor = 2;

    while (!lista.every(n => n === 1)) {
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

  funcaoMMC([2, 3, 4])

// Loop até [1, 1, 1]
// → Se algum número divide
//    → divide e armazena
// → Senão, aumenta o divisor