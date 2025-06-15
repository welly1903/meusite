// document.getElementByID Seleciona o elemento com o id="contatoform" 
document.getElementById("contatoform").addEventListener("submit", function(envio){ // addEventListener("submit", Function(envio)) Adiciona um ouvinte de evento que reage quando o formulário é enviado
  envio.preventDefault(); // Impede o comportamento padrão do envio do formulário (que seria recarregar a página).
  alert("Obrigado pela mensagem! Em breve entrarei em contato!"); // Exibe uma janela pop-up com uma mensagem para o usuário
  envio.target.reset(); // Limpa o formulário, apagando o que foi digitado nos campos
});