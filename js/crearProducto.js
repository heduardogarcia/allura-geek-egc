import { conexionAPI } from "./conexionAPI.js";
const formulario = document.getElementById("productForm");
const imagen = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");

async function crearProducto(evento) {
  console.log("Creando producto...");
  // // console.log({ imagen });
  // console.log(imagen.files[0] ? URL.createObjectURL(imagen.files[0]) : "");

  const producto = {
    id: Date.now().toString(),
    imagen: imagen.value,
    nombre: nombre.value,
    precio: precio.value,
  };
  console.log(producto);

  await conexionAPI.crearProducto(producto);
  evento.target.reset();
  mostrarProductos();
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  crearProducto(event);
});
