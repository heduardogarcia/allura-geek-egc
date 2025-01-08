// ...existing code...

// Función para obtener los registros desde el servidor
async function obtenerRegistros() {
  try {
    const response = await fetch("http://localhost:3001/productos");
    const registros = await response.json();
    pintarRegistros(registros);
  } catch (error) {
    console.error("Error al obtener los registros:", error);
  }
}

// Función para pintar los registros en los cards
function pintarRegistros(registros) {
  const contenedor = document.getElementById("productList");
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos registros

  registros.forEach((registro) => {
    const card = document.createElement("li");
    card.className = "product-card";
    card.innerHTML = `
            <img src="${registro.imagen}" alt="${registro.nombre}" class="product-card__image">
            <div class="product-card__details">
                <h3 class="product-card__title">${registro.nombre}</h3>
                <p class="product-card__price">${registro.precio}</p>
                <div class="product-card__buttons">
                    <button class="product-card__button button--delete">Eliminar</button>
                    <button class="product-card__button button--edit">Editar</button>
                </div>
            </div>
        `;
    contenedor.appendChild(card);
  });
}

// Llamar a la función para obtener y pintar los registros al cargar la página
document.addEventListener("DOMContentLoaded", obtenerRegistros);

// ...existing code...
