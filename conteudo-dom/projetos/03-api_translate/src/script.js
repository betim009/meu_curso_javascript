const translateBtn = document.getElementById('translate-btn');
const copyBtn = document.getElementById('copy-btn');
const swapBtn = document.getElementById('swap-btn');
const sourceLang = document.getElementById('source-lang');
const targetLang = document.getElementById('target-lang');
const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

async function translate(text, source, target) {
  const url = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '3be01a29a9msh1147fa36f6934f8p13aa60jsn802d2dd1cc9f',
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      source: source,
      target: target
    })
  };

  try {
    loading.style.display = 'inline';
    errorMessage.textContent = '';
    textOutput.value = '';
    const response = await fetch(url, options);
    const result = await response.json();
    loading.style.display = 'none';
    if (result && result.data && result.data.translations && result.data.translations.translatedText) {
      return result.data.translations.translatedText;
    } else {
      throw new Error('Tradução não encontrada.');
    }
  } catch (error) {
    loading.style.display = 'none';
    errorMessage.textContent = 'Erro ao traduzir. Tente novamente.';
    return '';
  }
}

translateBtn.addEventListener('click', async () => {
  const text = textInput.value.trim();
  if (!text) {
    errorMessage.textContent = 'Digite um texto para traduzir.';
    return;
  }
  const source = sourceLang.value;
  const target = targetLang.value;
  if (source === target) {
    errorMessage.textContent = 'Selecione idiomas diferentes.';
    return;
  }
  const translated = await translate(text, source, target);
  if (translated) {
    textOutput.value = translated;
    errorMessage.textContent = '';
  }
});

swapBtn.addEventListener('click', () => {
  const temp = sourceLang.value;
  sourceLang.value = targetLang.value;
  targetLang.value = temp;
  // Também troca os textos, se desejar
  textInput.value = textOutput.value;
  textOutput.value = '';
  errorMessage.textContent = '';
});

copyBtn.addEventListener('click', () => {
  if (textOutput.value) {
    navigator.clipboard.writeText(textOutput.value);
    copyBtn.textContent = 'Copiado!';
    setTimeout(() => {
      copyBtn.textContent = 'Copiar';
    }, 1200);
  }
});

// Limpa mensagem de erro ao digitar
textInput.addEventListener('input', () => {
  errorMessage.textContent = '';
});
