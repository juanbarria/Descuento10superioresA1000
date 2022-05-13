let precioProducto = document.getElementById("precioProducto");

/*let btnCantidad = document.getElementById("btnCantidad");
btnCantidad.addEventListener("click", () => {
  let cant : number = cantidad.value;
    console.log('La cantidad es : ' + cant);
});*/

let btnPrecioFinal = document.getElementById("btnPrecioFinal");
btnPrecioFinal.addEventListener("click", () => {
  let btnCantidad = document.getElementById("btnCantidad");
  btnCantidad.addEventListener("click", () => {
  let cant: number = cantidad.value;
    console.log("La cantidad es : " + cant);
  let compra: number = precioProducto.value * cant;
    if (compra > 1000) {
      console.log("Tiene decuento del 10% : " + compra * 0.9);
    } else {
      console.log("No tiene descuento : " + compra);
    }
  });
});
