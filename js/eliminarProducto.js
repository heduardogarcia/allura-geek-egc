import { conexionAPI } from "./conexionAPI.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("productList")
    .addEventListener("click", async (event) => {
      if (event.target.classList.contains("button--delete")) {
        const productId = event.target
          .closest("li")
          .querySelector('input[name="product-id"]').value;
        await conexionAPI.eliminarProducto(productId);
        event.target.closest("li").remove();
      }
    });
});
