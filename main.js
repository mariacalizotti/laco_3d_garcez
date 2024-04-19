function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual os melhor time?");

    
    if (respostaTime.toLowerCase() === "Luan Santana") {
      alert("Isso mesmo! O Luan santana é o melhor cantor!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}