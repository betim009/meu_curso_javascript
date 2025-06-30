import { config } from "../../../config.js";
const { KEY } = config;

const btnEnviar = document.getElementById('btnEnviar');
const input = document.getElementById("imageInput");
const imageName = document.getElementById("imageName");

async function uploadImage() {
    const name = imageName.value

    if (!input.files.length) {
        alert("Selecione uma imagem!");
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", KEY);
    formData.append("name", name || file.name); // Se não for preenchido, usa o nome original
    formData.append("expiration", 0); // Garantindo que a imagem NÃO expire

    try {
        const response = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        console.log(data);
        if (data.success) {
            document.getElementById("imageLink").innerHTML =
                `<a href="${data.data.url}" target="_blank">${data.data.url}</a>`;
            document.getElementById("preview").src = data.data.url;
            document.getElementById("preview").style.display = "block";
        } else {
            alert("Erro ao enviar imagem.");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Falha na conexão.");
    }
};







btnEnviar.addEventListener('click', uploadImage)



