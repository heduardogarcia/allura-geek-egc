import { conexionAPI } from "./conexionAPI.js";

const contenedor = document.getElementById("productList");

function creadCard(registro) {
  const card = document.createElement("li");
  card.className = "product-card";
  card.innerHTML = `
   <input type="hidden" name="product-id" value="${registro.id}" />
        
          <img src="${registro.imagen}" alt="${registro.nombre}" class="product-card__image">
          <div class="product-card__details">
              <h3 class="product-card__title">${registro.nombre}</h3>
              <p class="product-card__price">${registro.precio}</p>
              <div class="product-card__buttons">
                  <button class="product-card__button button--delete">Eliminar</button>
             
              </div>
          </div>
      `;
  return card;
}

async function listarProductos() {
  const productos = await conexionAPI.listarProductos();
  console.log(productos);

  productos.forEach((producto) => {
    const card = creadCard(producto);
    contenedor.appendChild(card);
  });
}
listarProductos();
