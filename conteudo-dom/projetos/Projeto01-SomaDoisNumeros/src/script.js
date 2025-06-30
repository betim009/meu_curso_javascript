function exibeValor() {
    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;

    console.log(campoA, campoB);
};

function enviaValor() {
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    const soma = (campoA + campoB);

    alert('reusltado: ' + soma);

    location.reload();
};