# Atividades 
Atividades sobre todos os fundamentos de javascript.


## Atividades nível básico (sem repetição e sem criar funções)
> Objetivo: treinar **acesso por índice**, **propriedades** e **atribuições**.
> Não use `for`, `while`, `map`, `filter`, `reduce`, `sort`, `push`, `pop` etc.

1) **Primeiros 3**: exiba os 3 primeiros elementos de **cada** array
   (`usuarios`, `saques`, `depositos`) usando índices `[0]`, `[1]`, `[2]`.

2) **Último de cada array**: exiba o último elemento de cada array
   usando `array[array.length - 1]`.

3) **Penúltimo de cada array**: exiba `array[array.length - 2]` para
   `usuarios`, `saques` e `depositos`.

4) **4º usuário**: mostre o objeto em `usuarios[3]` e altere `nome`,
   `idade` e `email` para novos valores. Exiba antes e depois.

5) **Troca de status**: leia `usuarios[1].status`, troque para
   `"inativo"` e depois volte para `"ativo"`. Exiba a cada mudança.

6) **Adicionar e remover sem funções**: adicione um novo usuário **sem
   `push`** usando:
   ```js
   usuarios[usuarios.length] = {
     id: 99, nome: 'Novo', idade: 20, email: 'novo@ex.com', status: 'ativo'
   };
   ```
   Em seguida, **remova o último** **sem `pop`** usando:
   ```js
   usuarios.length = usuarios.length - 1;
   ```

7) **Nome e email**: crie uma string no formato `"NOME - EMAIL"` com
   os dados de `usuarios[0]` e outra com o **último** usuário.

8) **Salvar e restaurar**: guarde `usuarios[2].email` em
   `emailAntigo`, troque por `'novo@ex.com'` e depois restaure o
   valor original usando a variável.

9) **Diferença simples**: pegue `depositos[0].valor` e `saques[0].valor`
   e calcule `diferenca = primeiroDeposito - primeiroSaque`.

10) **Confirmar depósito pendente**: troque `depositos[2].status` de
    `'pendente'` para `'confirmado'` e exiba antes/depois.

11) **Aprovar saque pendente**: troque `saques[1].status` de
    `'pendente'` para `'aprovado'` e exiba antes/depois.

12) **Objeto resumo**: crie um objeto `resumo1` com as chaves:
    - `usuario`: `usuarios[0].nome`
    - `primeiroDeposito`: `depositos[0].valor`
    - `primeiroSaque`: `saques[0].valor`

13) **Array de IDs**: crie `idsUsuarios` contendo três ids específicos:
    `[usuarios[0].id, usuarios[5].id, usuarios[9].id]`.

14) **Saldo do usuário 1 (sem laço)**: calcule `saldoUsuario1` usando:
    `(depositos[0].valor + depositos[12].valor)
     - (saques[0].valor + saques[12].valor)`.

15) **Troca de nomes**: troque `usuarios[0].nome` com `usuarios[1].nome`
    usando uma variável temporária. Depois **desfaça** a troca.

---

## Atividades nível médio (com repetição)
> Objetivo: praticar `for`, `for...of` e condicionais.

1) **Listar ativos**: percorra `usuarios` e exiba apenas os com `status === 'ativo'`.

2) **Contar inativos**: percorra `usuarios` e conte quantos estão `inativo`.

3) **Nomes e emails**: percorra `usuarios` e exiba `nome` e `email` de cada um em linhas separadas.

4) **Saques por usuário (id=2)**: percorra `saques`, exiba os do `usuarioId === 2` e calcule o **total sacado**.

5) **Depósitos por usuário (id=2)**: percorra `depositos`, exiba os do `usuarioId === 2` e calcule o **total depositado**.

---

## Atividades nível avançado (criando funções)
> Objetivo: criar funções reutilizáveis. Use `return` e chame as funções com argumentos.

1) **`getSaquesByUsuario(id)`** → retorna um array com os saques do usuário.

2) **`getDepositosByUsuario(id)`** → retorna um array com os depósitos do usuário.

3) **`getTotais(usuarioId)`** → retorna um objeto com `{ depositos: number, saques: number, saldo: number }`.

4) **`getTopSaldos(n = 3)`** → retorna um array com os **n** maiores saldos (por usuário), do maior para o menor.

5) **`buscarUsuarioPorEmail(email)`** → retorna o objeto do usuário quando encontrado, ou `null` caso contrário.