const firebaseConfig = {
  apiKey: "AIzaSyBhnNa3BqiSPcxvUEsnYF7lyCQxOhpGoK0",
  authDomain: "sala-mundo.firebaseapp.com",
  databaseURL: "https://sala-mundo-default-rtdb.firebaseio.com",
  projectId: "sala-mundo",
  storageBucket: "sala-mundo.appspot.com",
  messagingSenderId: "957872730707",
  appId: "1:957872730707:web:52553d20bc02dc6cf80ca6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log('antes')

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      console.log('success', userCredential);

      // Redirect to the home page
      window.location.href = "../home.html";
    })
    .catch((error) => {
      // Handle errors
      console.error('error', error);
    });
});

// Função para definir um cookie
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieValue;
}

// Função para obter o valor de um cookie
function getCookie(name) {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}

// Verifica se o usuário já permitiu o microfone
const microfonePermitido = getCookie("microfonePermitido");
if (microfonePermitido) {
  // O usuário já permitiu o microfone
  // Execute a lógica necessária aqui
} else {
  // O usuário ainda não permitiu o microfone
  // Solicite a permissão e, quando for concedida, defina o cookie
  // Por exemplo, você pode solicitar permissão quando o botão de assistente de voz é ativado
  document.getElementById("start-voice-assistant").addEventListener("click", function () {
    iniciarReconhecimentoDeFala();

    // Quando a permissão for concedida, defina o cookie
    setCookie("microfonePermitido", "true", 365); // Este cookie será válido por 1 ano
  });
}