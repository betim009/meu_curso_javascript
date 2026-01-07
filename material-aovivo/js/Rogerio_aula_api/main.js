async function fetchApi() {
    const resultado = document.getElementById("resultado")

    const request = await fetch("https://fakestoreapi.com/products")
    const response = await request.json();

    response.forEach(produto => {
       resultado.innerHTML += `
        <p>${produto.title}</p>
       ` 
    });

    console.log(response)
}


fetchApi()