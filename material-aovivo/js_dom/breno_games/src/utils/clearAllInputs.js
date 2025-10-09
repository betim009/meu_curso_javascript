export const clearAllInputs = (inputs, tamanho) => {
  for (let index = 0; index < tamanho; index++) {
    const input = inputs[index];
    input.value = "";
  }
};
