const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent);

const inputNome = document.getElementById("nome");
console.log(inputNome);
console.log(inputNome.value);

const paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos[0]);
console.log(paragrafos[1].textContent);

const itens = document.getElementsByClassName("item");
console.log(itens[0]);
console.log((itens[1].textContent = "Item 2 Modificado!"));

const itensP = document.getElementsByTagName("p");
console.log(itensP[3]);

const textCard1 = document.querySelector(".card p");
console.log(textCard1.textContent);

const textCard2 = document.querySelector(".card #paragrafo2");
console.log(textCard2.textContent);

const cards = document.querySelectorAll(".card");
console.log(cards.length);

const nome = document.getElementsByName("nome");
console.log(nome);

function getEmail() {
  const email = document.getElementById("email");

  console.log(email.value);
}
getEmail();
