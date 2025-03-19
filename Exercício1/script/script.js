const botao = document.createElement("a");

botao.textContent = "Click Me!";
botao.setAttribute("onclick", "saudacao()");
botao.classList.add("btn");
document.body.prepend(botao);

function saudacao() {
  botao.style.backgroundColor = "#C01C1C";
  botao.setAttribute("href", "https://www.google.com/");
  botao.setAttribute("target", "_blank");
}

if (
  botao.classList.contains("btn") ||
  botao.getAttribute.contains("onclick") === "saudacao()"
) {
  botao.style.textDecoration = "none";
  botao.style.padding = "10px 20 px";
  botao.style.fontSize = "24px";
  botao.style.fontWeight = "bold";
  botao.style.textAlign = "center";
  botao.style.color = "#fff";
  botao.style.backgroundColor = "#ff5252";
  botao.style.border = "2px solid #000";
  botao.style.borderRadius = "10px";
  botao.style.cursor = "pointer";
  botao.style.boxShadow = "5px 5px 0 #000";
  botao.style.transition = "all 0.3s ease";
}
