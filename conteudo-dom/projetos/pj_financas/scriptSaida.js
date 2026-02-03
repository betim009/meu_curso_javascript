import { data } from "./data.js";

export function scriptSaida() {
  const entrada = data.filter((element) => element.tipo === "saida");
  const valorSaida = entrada.reduce((acc, current) => current.valor + acc, 0);

  return valorSaida;
}

