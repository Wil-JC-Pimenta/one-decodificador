// Declaração de variáveis
let rawText, inputText, result, resultContainer;

function processText(option) {
    // Obter texto de entrada
    rawText = document.getElementById('text-input').value;
    
    // Verificar se o texto contém letras maiúsculas, assentos ou caracteres especiais
    if (/[A-ZÀ-ÖØ-Ý!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(rawText)) {
        alert("Digite apenas letras minúsculas, sem caracteres especiais!");
        return;
    }
    
    // Limpar e converter para minúsculas
    inputText = cleanInputText(rawText.toLowerCase());

    // Realizar a operação de acordo com a opção selecionada
    if (option === 'encrypt') {
        result = encryptText(inputText);
    } else if (option === 'decrypt') {
        result = decryptText(inputText);
    }

    // Atualizar o conteúdo no container de resultado
    resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p id="result">${result}</p>`;
}

function cleanInputText(text) {
    // Limpar caracteres especiais e assentos
    const cleanedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w\s]/gi, '');
    return cleanedText;
}

function encryptText(text) {
    // Realizar a criptografia
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    // Realizar a descriptografia
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    // Copiar o resultado para a área de transferência
    const resultText = document.getElementById('result');
    const textArea = document.createElement('textarea');
    textArea.value = resultText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
