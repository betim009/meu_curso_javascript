import { data } from "./data.js";

export function scriptEntrada() {
  const entrada = data.filter((element) => element.tipo === "entrada");
  const valorEntrada = entrada.reduce((acc, current) => current.valor + acc, 0);

  return valorEntrada;
}


