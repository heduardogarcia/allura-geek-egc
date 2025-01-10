async function listarProductos() {
  const conexion = await fetch("http://localhost:3001/productos");
  const productos = await conexion.json();
  console.log(productos);

  return productos;
}

async function crearProducto(params) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const producto = await conexion.json();
  console.log(producto);

  return producto;
}
// listarProductos();
export const conexionAPI = {
  listarProductos,
  crearProducto,
};
