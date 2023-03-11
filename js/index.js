const btn1 = document.querySelector(".ver-mas-btn-1");
const btn2 = document.querySelector(".ver-mas-btn-2");

const detalle1 = document.querySelector("#experiencia-detalle-1");
const detalle2 = document.querySelector("#experiencia-detalle-2");

btn1.addEventListener("click", () => {
  detalle1.classList.toggle("visible");
  if (detalle1.classList.contains("visible")) {
    btn1.textContent = "Ocultar";
  } else {
    btn1.textContent = "Ver más";
  }
});

btn2.addEventListener("click", () => {
  detalle2.classList.toggle("visible");
  if (detalle2.classList.contains("visible")) {
    btn2.textContent = "Ocultar";
  } else {
    btn2.textContent = "Ver más";
  }
});
