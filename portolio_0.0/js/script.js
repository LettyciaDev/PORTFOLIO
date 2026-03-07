//Efeito dark mode

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});

//Fim efeito dark mode


// Efeito digitação

document.addEventListener('DOMContentLoaded', (event) => {
    const texts = [
      "Olá, me chamo Lettycia Vitória.",
      "Sou desenvolvedora de software."
    ];
  
    let textIndex = 0; // Índice atual do texto sendo digitado
    let charIndex = 0; // Índice atual do caractere sendo exibido
  
    function typeWriter() {
      const text = texts[textIndex];
      const typingElement = document.getElementById('typing-effect');
      typingElement.textContent = text.slice(0, charIndex++);
      if (charIndex <= text.length) {
        setTimeout(typeWriter, 100); // Velocidade da digitação (ajustável)
      } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length; // Alterna para o próximo texto
        setTimeout(typeWriter, 2000); // Tempo de pausa entre os textos (ajustável)
      }
    }
  
    typeWriter();
  });
  
  //slider responsivo

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
