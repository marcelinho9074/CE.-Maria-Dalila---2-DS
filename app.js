console.log("Rodando a página do site da escola CE. Maria Dalila")

// Interações simples da página
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

document.getElementById("ano").textContent = new Date().getFullYear();

