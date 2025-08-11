# Atividades 
Atividades sobre todos os fundamentos de javascript.


## Atividades nível básico (sem repetição e sem criar funções)
> Objetivo: treinar **acesso por índice**, **propriedades** e **atribuições**.
> Não use `for`, `while`, `map`, `filter`, `reduce`, `sort`, `push`, `pop` etc.

1) **Primeiros 3**: exiba os 3 primeiros elementos de **cada** array (`usuarios`, `saques`, `depositos`) usando índices `[0]`, `[1]`, `[2]`.

2) **Último de cada array**: exiba o último elemento de cada array usando `array[array.length - 1]`.

3) **4º usuário**: mostre o objeto em `usuarios[3]` e altere `nome`, `idade` e `email` para novos valores. Exiba antes e depois.

4) **Troca de status**: leia `usuarios[1].status`, troque para `"inativo"` e depois volte para `"ativo"`. Exiba a cada mudança.

5) **Adicionar e remover sem funções**: adicione um novo usuário **sem `push`**:
   ```js
   usuarios[usuarios.length] = { id: 99, nome: 'Novo', idade: 20, email: 'novo@ex.com', status: 'ativo' };
   ```
   Depois **remova o último** **sem `pop`**:
   ```js
   usuarios.length = usuarios.length - 1;
   ```

---

## Atividades nível médio (com repetição)
> Objetivo: praticar `for`, `for...of` e condicionais.

6) **Listar ativos**: percorra `usuarios` e exiba apenas os com `status === 'ativo'`.

7) **Contar inativos**: percorra `usuarios` e conte quantos estão `inativo`.

8) **Nomes e emails**: percorra `usuarios` e exiba `nome` e `email` de cada um em linhas separadas.

9) **Saques por usuário (id=2)**: percorra `saques`, exiba os do `usuarioId === 2` e calcule o **total sacado**.

10) **Depósitos por usuário (id=2)**: percorra `depositos`, exiba os do `usuarioId === 2` e calcule o **total depositado**.

---

## Atividades nível avançado (criando funções)
> Objetivo: criar funções reutilizáveis. Use `return` e chame as funções com argumentos.

11) **`getSaquesByUsuario(id)`** → retorna um array com os saques do usuário.

12) **`getDepositosByUsuario(id)`** → retorna um array com os depósitos do usuário.

13) **`getTotais(usuarioId)`** → retorna um objeto com `{ depositos: number, saques: number, saldo: number }`.

14) **`getTopSaldos(n = 3)`** → retorna um array com os **n** maiores saldos (por usuário), do maior para o menor.

15) **`buscarUsuarioPorEmail(email)`** → retorna o objeto do usuário quando encontrado, ou `null` caso contrário.