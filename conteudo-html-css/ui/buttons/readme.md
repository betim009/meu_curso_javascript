### 🇺🇸 Buttons | Botões   

**Exemplo de código:**

1. Exemplo simples
  ```html
  <button>click</button>

  <button>
    click
  </button>
  ``` 

**Saída:**

  <button>click</button>

----

**Exemplo de código:**

2. Exemplo básico
  ```html
  <button class="btn-1">login</button>

  ``` 

  ```css
  .btn-1 {
    width: 200px;
    height: 30px;
    font-weight: 600;
    background-color: darkgray;
    border: 1px solid black;
    border-radius: 10px;
    cursor:pointer;
  }
  ```

**Saída:**

  <button style="width:200px; height:30px; font-weight:600; background-color:darkgray; border:1px solid black; border-radius:10px; cursor:pointer;">login</button>


----


**Exemplo de código:**

3. Exemplos de clássicos
  ```html
  <button class="btn-classic btn-blue">exemplo 1</button>
  <button class="btn-classic btn-green">exemplo 2</button>
  <button class="btn-classic btn-red">exemplo 3</button>

  ``` 

  ```css
  .btn-classic {
    width: 200px;
    height: 30px;
    font-weight: 600;
    border: 1px solid black;
    cursor:pointer;
  }

  .btn-blue {
    background-color: blue;
    color: white;
  }

  .btn-red {
    background-color: red;
    color: white;
  }

  .btn-green {
    background-color: green;
    color: white;
  }
  ```

**Saída:**

  <button style="width:200px; height:30px; font-weight:600; border:1px solid black; cursor:pointer; background-color:blue; color:white;">exemplo 1</button>
  <button style="width:200px; height:30px; font-weight:600; border:1px solid black; cursor:pointer; background-color:green; color:white;">exemplo 2</button>
  <button style="width:200px; height:30px; font-weight:600; border:1px solid black; cursor:pointer; background-color:red; color:white;">exemplo 3</button>


----


**Exemplo de código:**

4. Exemplos de incrementar/decrementar
  ```html
  <div class="flex">
    <button class="btn-cart">+</button>
    <p>3</p>
    <button class="btn-cart">-</button>
  </div>
  ``` 

  ```css
  .btn-cart {
    width: 30px;
    height: 30px;
    background-color: darkgray;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .flex {
    display: flex;
    gap: 10px;
  }
  ```

**Saída:**

  <div style="display:flex; gap:10px;">
    <button style="width:30px; height:30px; background-color:darkgray; font-weight:600; border:none; cursor:pointer;">+</button>
    <p>3</p>
    <button style="width:30px; height:30px; background-color:darkgray; font-weight:600; border:none; cursor:pointer;">-</button>
  </div>

----