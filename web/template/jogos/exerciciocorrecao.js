// Variáveis para o estado do jogo
let lives = 5; // Número inicial de vidas
let timer; // Variável do cronômetro
let correctAnswers = 0; // Número de respostas corretas
let timeRemaining = 30; // Tempo restante em segundos
let userInputTime = 0; // Tempo quando o usuário digita a resposta

// Função para atualizar o cronômetro
function updateTimer() {
  const timeElement = document.getElementById("time");
  timeElement.innerText = timeRemaining;
  timeRemaining--;

  if (timeRemaining < 0) {
    // Tempo esgotado, chame a função de verificação da resposta
    checkAnswer();
  }
}

// Função para gerar uma pergunta matemática aleatória
function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  // Lista de operadores disponíveis, incluindo multiplicação e divisão
  const operators = ['+', '-', '*', '/'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  return `${num1} ${randomOperator} ${num2}`;
}

// Função para verificar a resposta
function checkAnswer() {
  const questionText = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const resultText = document.getElementById("result");
  const livesDisplay = document.getElementById("lives");

  if (timeRemaining >= 0) {
    userInputTime = 30 - timeRemaining;
  } else {
    userInputTime = 30;
  }

  const question = questionText.innerText;
  const userAnswer = parseFloat(answerInput.value); // Use parseFloat para lidar com números decimais
  const [num1, operator, num2] = question.split(' ');

  let correctAnswer;

  // Calcula a resposta com base no operador
  switch (operator) {
    case '+':
      correctAnswer = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      correctAnswer = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      correctAnswer = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      correctAnswer = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      resultText.innerText = "Operador inválido";
      return;
  }

  if (userAnswer === correctAnswer) {
    resultText.innerText = "Resposta correta!";
    correctAnswers++;

    // Verifique se o jogador deve avançar para a próxima fase após um número específico de respostas corretas
    if (correctAnswers >= 3) {
      // Transição para a segunda fase do jogo
      resultText.innerText = "Parabéns! Você alcançou a segunda fase.";
      // Implemente a lógica para a segunda fase aqui
    }
  } else {
    resultText.innerText = "Resposta incorreta. Tente novamente.";
    // Remova uma vida
    if (lives > 0) {
      lives--;
      livesDisplay.innerHTML = `Vidas: ${'&#9733;'.repeat(lives)}`;
    }

    // Verifique se o jogador ficou sem vidas
    if (lives === 0) {
      resultText.innerText = "Fim do jogo. Suas vidas se esgotaram.";
      submitButton.disabled = true;
    }
  }

  // Gere uma nova pergunta após verificar a resposta
  questionText.innerText = generateQuestion();
  answerInput.value = "";
  // Redefina o cronômetro
  timeRemaining = 30;
}

// Inicialização do jogo
const questionText = document.getElementById("question");
const submitButton = document.getElementById("submit");

// Gere a primeira pergunta
questionText.innerText = generateQuestion();

// Adicione um ouvinte de evento de clique ao botão de verificação de resposta
submitButton.addEventListener("click", function () {
  checkAnswer();
  clearInterval(timer);
  timeRemaining = 30;
  timer = setInterval(updateTimer, 1000);
});
