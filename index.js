// Selecionando os elementos necessários do DOM
const visualizar = document.querySelector(".eye-open"); // Botão de visualização da senha
const esconder = document.querySelector(".eye-close"); // Botão de ocultação da senha
const password = document.getElementById("input-password"); // Campo de senha
const iconToggle = document.querySelector(".icon-toggle"); // Ícone do botão de alternância
const btnToggle = document.querySelector(".toggle"); // Botão de alternância de tema

// Adicionando um evento de clique para exibir a senha
esconder.addEventListener("click", function () {
  password.type = "text"; // Altera o tipo do campo de senha para texto visível
  esconder.classList.add("hidden"); // Adiciona a classe 'hidden' para ocultar o botão de ocultação
  visualizar.classList.remove("hidden"); // Remove a classe 'hidden' para exibir o botão de visualização
});

// Adicionando um evento de clique para ocultar a senha
visualizar.addEventListener("click", function () {
  password.type = "password"; // Altera o tipo do campo de senha para senha oculta
  esconder.classList.remove("hidden"); // Remove a classe 'hidden' para exibir o botão de ocultação
  visualizar.classList.add("hidden"); // Adiciona a classe 'hidden' para ocultar o botão de visualização
});

// Adicionando um evento de clique para alternar entre temas claro e escuro
btnToggle.addEventListener("click", function () {
  const toggleIconMoon = document.querySelector(".img-icon"); // Seleciona o ícone de alternância

  // Verifica qual ícone está sendo exibido e altera para o outro
  if (
    toggleIconMoon.src.includes(
      "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2"
    )
  ) {
    toggleIconMoon.src = "https://img.icons8.com/color/48/full-moon.png"; // Altera o ícone para a lua
    toggleIconMoon.alt = "Lua"; // Altera o texto alternativo para "Lua"
  } else {
    toggleIconMoon.src =
      "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2"; // Altera o ícone para o sol
    toggleIconMoon.alt = "sol"; // Altera o texto alternativo para "sol"
  }

  // Alternância de classes para alterar o tema entre claro e escuro
  iconToggle.classList.toggle("enable"); // Altera a classe do ícone de alternância
  document.querySelector(".input").classList.toggle("input-dark"); // Altera a classe do campo de entrada
  document.getElementById("input-password").classList.toggle("input-dark"); // Altera a classe do campo de senha

  const btnSocial = document.querySelectorAll(".btn-social"); // Seleciona todos os botões sociais

  // Alternância de classes para os botões sociais entre claro e escuro
  btnSocial.forEach((btnSocial) => {
    btnSocial.classList.toggle("btn-dark-social"); // Altera a classe de cada botão social
  });

  // Alternância de classes para os elementos do formulário entre claro e escuro
  document.querySelector(".container").classList.toggle("container-dark"); // Altera a classe do contêiner
  document.querySelector(".email").classList.toggle("label-dark"); // Altera a classe do rótulo de e-mail
  document.querySelector(".password").classList.toggle("label-dark"); // Altera a classe do rótulo de senha
  document.body.classList.toggle("body-dark"); // Altera a classe do corpo da página
});
