let nombre = prompt(
  "Bienvenido, Ingresa tu nombre para una atención más personalizada"
);

insertarNombre = document.querySelector(".nombre-usr");
insertarNombre.innerHTML = nombre;

const precio = 400000;
let cantidad = 0;
const botonMas = document.querySelector("#mas");
const botonMenos = document.querySelector("#menos");
const mostrarCantidad = document.querySelector("#cantidad");
const mostrarPrecioFinal = document.querySelector("#precioFinal");

botonMas.addEventListener("click", () => {
  cantidad += 1;
  mostrarCantidad.innerHTML = cantidad;
  mostrarPrecioFinal.innerHTML = cantidad * precio;
});

botonMenos.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad -= 1;
    mostrarCantidad.innerHTML = cantidad;
    mostrarPrecioFinal.innerHTML = cantidad * precio;
  }
});

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
