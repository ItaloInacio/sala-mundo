document.getElementById("start-speech-recognition").addEventListener("click", function() {
  iniciarReconhecimentoDeFala();
});

function iniciarReconhecimentoDeFala() {
  const assistente = responsiveVoice;

  assistente.speak("Você quer ajuda para fazer o Login?", "Brazilian Portuguese Female", {
      onend: function() {
          const recognition = new webkitSpeechRecognition() || SpeechRecognition();
          recognition.lang = "pt-BR";

          recognition.onresult = function(event) {
              const resultado = event.results[0][0].transcript;
              if (resultado) {
                  if (resultado.toLowerCase().includes("sim")) {
                      assistente.speak("Por favor, informe seu email.", "Brazilian Portuguese Female", {
                          onend: function() {
                              const recognitionEmail = new webkitSpeechRecognition() || SpeechRecognition();
                              recognitionEmail.lang = "pt-BR";

                              recognitionEmail.onresult = function(eventEmail) {
                                  const emailUsuario = eventEmail.results[0][0].transcript;
                                  if (emailUsuario) {
                                      document.getElementById("email").value = emailUsuario;
                                      assistente.speak("Você prefere digitar a senha ou falar?", "Brazilian Portuguese Female", {
                                          onend: function() {
                                              const recognitionSenha = new webkitSpeechRecognition() || SpeechRecognition();
                                              recognitionSenha.lang = "pt-BR";

                                              recognitionSenha.onresult = function(eventSenha) {
                                                  const formaSenha = eventSenha.results[0][0].transcript;
                                                  if (formaSenha) {
                                                      if (formaSenha.toLowerCase().includes("digitar")) {
                                                          const botaoEntrada = document.getElementById("loginButton");
                                                          botaoEntrada.click();
                                                          assistente.speak("Seja bem-vindo à sua sala.", "Brazilian Portuguese Female");
                                                      } else {
                                                          // Lógica para tratamento de outras formas de informar a senha
                                                      }
                                                  }
                                              };

                                              recognitionSenha.start();
                                          }
                                      });
                                  }
                              };

                              recognitionEmail.start();
                          }
                      });
                  } else {
                      // Lógica para tratamento de outras respostas do usuário
                  }
              }
          };

          recognition.start();
      }
  });
}


document.getElementById("start-screen-reader").addEventListener("click", function() {
    const message = new SpeechSynthesisUtterance("Bem-vindo ao Mundo Sala de Aula. Esta é a página inicial.");

    // Configura a voz da Amazon Alexa, se disponível
    const voices = window.speechSynthesis.getVoices();
    const alexaVoice = voices.find(voice => voice.name === "Amazon Alexa"); // Este é um exemplo fictício

    if (alexaVoice) {
      message.voice = alexaVoice;
    }

    // Inicia a síntese de voz
    window.speechSynthesis.speak(message);
  });