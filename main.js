const btnMenu = document.getElementById("btnMenu");
const opcoesMenuBar = document.getElementById("opcoesMenuBar");

btnMenu.addEventListener("click", () => {
  opcoesMenuBar.classList.toggle("menu-ativo");
});

opcoesMenuBar.addEventListener("click", () => {
  opcoesMenuBar.classList.remove("menu-ativo");
});