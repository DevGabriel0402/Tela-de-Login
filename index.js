const visualizar = document.querySelector(".eye-open");
const esconder = document.querySelector(".eye-close");

const password = document.getElementById("input-password");

const iconToggle = document.querySelector(".icon-toggle");

const btnToggle = document.querySelector(".toggle");

esconder.addEventListener("click", function () {
  password.type = "text";
  esconder.classList.add("hidden");
  visualizar.classList.remove("hidden");
});

visualizar.addEventListener("click", function () {
  password.type = "password";
  esconder.classList.remove("hidden");
  visualizar.classList.add("hidden");
});

btnToggle.addEventListener("click", function () {
  const toggleIconMoon = document.querySelector(".img-icon");

  if (
    toggleIconMoon.src.includes(
      "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2"
    )
  ) {
    toggleIconMoon.src = "https://img.icons8.com/color/48/full-moon.png";
    toggleIconMoon.alt = "Lua";
  } else {
    toggleIconMoon.src =
      "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-sun-100-most-used-icons-flaticons-flat-flat-icons-2";
    toggleIconMoon.alt = "sol";
  }
  iconToggle.classList.toggle("enable");
  document.querySelector(".input").classList.toggle("input-dark");
  document.getElementById("input-password").classList.toggle("input-dark");

  const btnSocial = document.querySelectorAll(".btn-social");

  btnSocial.forEach((btnSocial) => {
    btnSocial.classList.toggle("btn-dark-social");
  });

  document.querySelector(".container").classList.toggle("container-dark");
  document.querySelector(".email").classList.toggle("label-dark");
  document.querySelector(".password").classList.toggle("label-dark");
  document.body.classList.toggle("body-dark");
});
