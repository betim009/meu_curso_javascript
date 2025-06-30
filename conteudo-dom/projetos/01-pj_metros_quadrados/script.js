function calcular() {
    const result = createResult();
    const h1 = document.getElementById("resultado");
    const aviso = document.getElementById("aviso-max") || criarAviso();
    aviso.textContent = "";
    if (isNaN(result) || result <= 0) {
        h1.textContent = "Por favor, insira valores válidos.";
        updateSquare(0, 'transparent');
        return;
    }
    h1.textContent = `${result} m²`;
    const size = Math.min(300, Math.sqrt(result) * 20);
    if (size >= 300) {
        aviso.textContent = "O tamanho máximo do quadrado foi atingido. Não é possível exibir um display maior na tela.";
    }
    updateSquare(result, getColor(result));
}

function createResult() {
    const metros1 = parseFloat(document.getElementById("metros1").value);
    const metros2 = parseFloat(document.getElementById("metros2").value);
    return metros1 * metros2;
}

function getColor(result) {
    if (result <= 100) return "#222";
    if (result > 100 && result <= 500) return "#e74c3c";
    if (result > 500 && result < 10000) return "#3498db";
    return "#f1c40f";
}

function updateSquare(result, color) {
    const square = document.getElementById("square");
    if (result <= 0) {
        square.style.width = "0px";
        square.style.height = "0px";
        square.style.backgroundColor = "transparent";
        square.style.boxShadow = "none";
        return;
    }
    const size = Math.min(300, Math.sqrt(result) * 20); // Limita o tamanho máximo
    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.backgroundColor = color;
    square.style.transition = "all 0.4s cubic-bezier(.4,2,.6,1)";
    square.style.boxShadow = `0 4px 32px 0 ${color}55`;
    square.style.borderRadius = "16px";
}

function criarAviso() {
    const aviso = document.createElement('div');
    aviso.id = 'aviso-max';
    aviso.style.color = '#e74c3c';
    aviso.style.fontWeight = 'bold';
    aviso.style.marginTop = '10px';
    aviso.style.textAlign = 'center';
    const square = document.getElementById('square');
    square.parentNode.insertBefore(aviso, square.nextSibling);
    return aviso;
}

document.getElementById('btnCalcular').addEventListener('click', calcular);



