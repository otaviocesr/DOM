const paragrafo = document.createElement("p");
// paragrafo.innerText = "Meu primeiro parágrafo via JavaScript!";
paragrafo.textContent = "Meu primeiro parágrafo via JavaScript!";
paragrafo.style.color = "#ff00ff";
paragrafo.style.fontSize = "18px";
paragrafo.style.fontStyle = "italic";
console.log(paragrafo);

document.body.prepend(paragrafo);
document.body.appendChild(paragrafo);

const item1 = document.createElement("li");
const item3 = document.createElement("li");
const item5 = document.createElement("li");

item1.textContent = "Item 1";
item3.textContent = "Item 3";
item5.textContent = "Item 5";

const lista = document.getElementsByTagName("ul");
// Item 1, Item 2, Item 4
lista[0].prepend(item1);
// Item 1, Item 2, **Item 3**, Item 4
lista[0].insertBefore(item3, lista[0].children[2]);
// Item 1, Item 2, Item 3, Item 4, Item 5
lista[0].appendChild(item5);
