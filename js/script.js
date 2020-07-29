"use strict";

const introParagraph = document.getElementById("intro");
const headerEl = document.getElementById("page-header");
const gradientBtn = document.getElementById("header-button");
let filtertags = "Toutes les couleurs";

// funtions
function addRandomGradientBg() {
  if (headerEl) {
    const random = Math.floor(gradients.length * Math.random());
    const randomGradient = gradients[random];
    const bgImage = `linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end})`;
    headerEl.style.background = bgImage;
  }
}

// app
if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`;
}

addRandomGradientBg(); // execute la fontion une fois quand le script charge
if (gradientBtn) {
  gradientBtn.addEventListener("click", addRandomGradientBg);
}

console.log("tous les dégradés", gradients);
console.log("tags uniques", uniqueTags);

function insertGradients() {
  const ulEle = document.createElement("ul");
  const gridContainer = document.getElementById("grid-container");
  ulEle.classList.add("row", "list-unstyled");
  const filterGradients = gradients.filter((el) => {
    if (filtertags === "Toutes les couleurs") {
      return true;
    } else {
      return el.tags.includes(filtertags);
    }
  });

  for (let gradient of filterGradients) {
    const li = document.createElement("li");
    li.classList.add("col-sm-6", "col-md-4", "col-lg-3");
    const gradientCode = `background-image: linear-gradient(90deg, ${gradient.start}, ${gradient.end})`;
    li.innerHTML = `<div class="card p-3 mb-4 shadow">
    <div class="card-gradient rounded-pill mx-auto mb-4" style="${gradientCode}"></div>
    <h2 class="h5 text-center">${gradient.name}</h2>
    <code>${gradientCode}</code>
  </div>`;
    ulEle.append(li);
  }
  gridContainer.innerHTML = "";
  gridContainer.append(ulEle);
}
insertGradients();

function activateFilterByTag() {
  const selectEl = document.getElementById("filtertags");
  uniqueTags.sort();
  for (let tags of uniqueTags) {
    const option = document.createElement("option");
    option.textContent = tags;
    option.value = tags;
    selectEl.append(option);
  }
  selectEl.addEventListener("change", () => {
    filtertags = selectEl.value;
    insertGradients();
  });
}

activateFilterByTag();
