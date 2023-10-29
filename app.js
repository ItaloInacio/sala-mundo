// Certifique-se de que o Firebase já foi inicializado em firebase.js
// ...

// Referência ao Firestore
const db = firebase.firestore();

// Referência ao formulário de login (se você tiver um)
const loginForm = document.getElementById('loginForm');

// Lidar com o envio do formulário de login (se aplicável)
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('#email').value;
    const password = loginForm.querySelector('#password').value;

    // Autenticar o usuário usando e-mail e senha
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Autenticação bem-sucedida
        const user = userCredential.user;
        alert(`Bem-vindo, ${user.email}!`);
        // Redirecionar para a página principal ou outra página
      })
      .catch((error) => {
        // Tratar erros de autenticação
        const errorMessage = error.message;
        alert(`Erro de autenticação: ${errorMessage}`);
      });
  });
}

// Outras operações com Firebase Firestore podem ser adicionadas aqui
