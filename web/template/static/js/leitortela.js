document.getElementById("start-screen-reader").addEventListener("click", function() {
    // Verifique se o leitor de tela está disponível no navegador
    if ('speechSynthesis' in window) {
      // Crie uma nova instância do objeto de síntese de fala
      var speechSynthesis = window.speechSynthesis;
  
      // Função para coletar o texto de um elemento
      function getTextUnderCursor() {
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
          var range = selection.getRangeAt(0);
          var selectedText = range.toString();
          if (selectedText) {
            return selectedText;
          } else {
            var container = range.commonAncestorContainer;
            var text = collectVisibleText(container);
            return text;
          }
        }
        return "";
      }
  
      // Função para coletar texto visível de um elemento
      function collectVisibleText(element) {
        var text = '';
  
        if (element.nodeType === Node.TEXT_NODE) {
          text += element.textContent;
        } else if (element.nodeType === Node.ELEMENT_NODE) {
          for (var i = 0; i < element.childNodes.length; i++) {
            text += collectVisibleText(element.childNodes[i]);
          }
        }
  
        return text;
      }
  
      // Coleta o texto onde o ponteiro do usuário está
      var textUnderCursor = getTextUnderCursor();
  
      // Crie um novo objeto de fala com o texto coletado
      var speechUtterance = new SpeechSynthesisUtterance(textUnderCursor);
  
      // Inicie a leitura em voz alta
      speechSynthesis.speak(speechUtterance);
    } else {
      // Caso o leitor de tela não esteja disponível
      alert('Seu navegador não suporta leitura em voz alta.');
    }
  });
  