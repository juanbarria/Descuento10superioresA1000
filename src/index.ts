let precioProducto = document.getElementById("precioProducto");
let cantidad = document.getElementById("cantidad");
let btnPrecioFinal = document.getElementById("btnPrecioFinal");
btnPrecioFinal.addEventListener("click", () => {
  let cant: number = Number(cantidad.value);
  let compra: number = precioProducto.value * cant;
  if (compra > 1000) {
    console.log("Tiene decuento del 10% : " + compra * 0.9);
  } else {
    console.log("El precio es : " + compra);
  }
});
