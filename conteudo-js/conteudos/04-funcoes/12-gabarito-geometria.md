# Gabarito: Exercícios de Funções - Geometria

Veja abaixo as soluções para os exercícios propostos. Compare com suas respostas e entenda cada passo!

---

## 1. Área de um Triângulo
```js
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// Exemplo:
console.log(areaTriangulo(6, 4)); // 12
```

---

## 2. Área de um Retângulo
```js
function areaRetangulo(largura, altura) {
  return largura * altura;
}
// Exemplo:
console.log(areaRetangulo(5, 3)); // 15
```

---

## 3. Área de um Círculo
```js
function areaCirculo(raio) {
  return Math.PI * raio * raio;
}
// Exemplo:
console.log(areaCirculo(2)); // 12.566370614359172
```

---

## 4. Perímetro de um Retângulo
```js
function perimetroRetangulo(largura, altura) {
  return 2 * (largura + altura);
}
// Exemplo:
console.log(perimetroRetangulo(5, 3)); // 16
```

---

## 5. Perímetro de um Círculo
```js
function perimetroCirculo(raio) {
  return 2 * Math.PI * raio;
}
// Exemplo:
console.log(perimetroCirculo(2)); // 12.566370614359172
```

---

## 6. Área de um Trapézio
```js
function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}
// Exemplo:
console.log(areaTrapezio(8, 4, 3)); // 18
```

---

## 7. Área de um Losango
```js
function areaLosango(diagonalMaior, diagonalMenor) {
  return (diagonalMaior * diagonalMenor) / 2;
}
// Exemplo:
console.log(areaLosango(6, 4)); // 12
```

---

## 8. Área de um Paralelogramo
```js
function areaParalelogramo(base, altura) {
  return base * altura;
}
// Exemplo:
console.log(areaParalelogramo(5, 3)); // 15
```

---

## 9. Área de um Quadrado
```js
function areaQuadrado(lado) {
  return lado * lado;
}
// Exemplo:
console.log(areaQuadrado(4)); // 16
```

---

## 10. Área de um Pentágono Regular
```js
function areaPentagono(lado) {
  return (5 * lado * lado) / (4 * Math.tan(Math.PI / 5));
}
// Exemplo:
console.log(areaPentagono(3)); // 15.484296605300704
```

---

Parabéns por praticar! Reveja os conceitos e tente criar variações desses exercícios para fixar ainda mais o conteúdo. 