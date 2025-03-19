const container = document.getElementById("container");
container.classList.add("ativo");
container.classList.remove("visible");
container.classList.toggle("ativo");
console.log(container.classList.contains("ativo"));

if (container.classList.contains("ativo")) {
  console.log("A caixa está ativa");
} else {
  console.log("A caixa está inativa");
}
