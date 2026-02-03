import { scriptEntrada } from "./scriptEntrada.js";
import { scriptSaida } from "./scriptSaida.js";

export function scriptSaldo() {
  const entrada = scriptEntrada();
  const saida = scriptSaida();

  return entrada - saida;
};
