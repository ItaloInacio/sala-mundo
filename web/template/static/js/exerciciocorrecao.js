 // Função para verificar as respostas
 function verificarResposta(exercicio) {
    const respostaInput = document.getElementById(`resposta${exercicio}`);
    const resposta = respostaInput.value;

    if (exercicio === 1) {
      if (resposta === "16") {
        alert("Resposta correta!");
      } else {
        alert("Resposta incorreta. Tente novamente.");
      }
    }
    // Adicione verificações para outros exercícios aqui
  }