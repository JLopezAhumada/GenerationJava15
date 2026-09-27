//Variables
const nombre = "Jesus Lopez";
const ciudad = "Barranquilla";
const rappiPrime = false;
const estado = ["Entregado     ", "En Preparacion", "Rechazado     "];
const domicilio = 4000;
const producto = [
    { nombre : "Hamburguesa", precio: 8000}, 
    { nombre : "Papas", precio: 6500},
    { nombre : "Gaseosa", precio: 4500}
    ];
//mapeo
const impProductos = producto.map(producto => producto.nombre);
//subtotal
const subtotal = producto.reduce((acumulador,producto)=> acumulador + producto.precio, 0);
const propina = subtotal * 0.10
const total = subtotal + propina + domicilio;

//Impresion
console.log("Hola",nombre,"tu pedido a domicilio a", ciudad);
console.log("Lista de productos:");
producto.forEach((producto,index) =>{console.log(index + 1,producto.nombre)}); 
console.log("El primer producto es:", producto[0].nombre);
console.log("--------------------------------------------------");
//Se agrega producto y se imprime
const agregarProducto = {nombre: "Postre",precio: 5000};
producto.push(agregarProducto);
console.log("Se agregó un producto");
producto.forEach((producto,index) =>{console.log(index + 1,producto.nombre)}); 

//se elimina producto y se imprime
console.log("--------------------------------------------------");
producto.pop();
console.log("Se eliminó el ultimo producto:");
producto.forEach((producto,index) =>{console.log(index + 1,producto.nombre)});  
console.log("Tenemos este numero de productos:", producto.length);

// Impresion del pedido con funcion
function imprimirPedido(estado){
  console.log("  _________________________________________________");
  console.log(" |_____________________\x1b[4mPEDIDO\x1b[0m______________________|");
  console.log(" |Nombre Cliente:",nombre,"                     |");
  console.log(" |Ciudad:",ciudad,"                            | ");
  console.log(" |Pedido:", impProductos.join(", "),"             |" );
  console.log(" |Estado:",estado,"                          |");
  console.log(` |Subtotal : $${subtotal}                                |`);
  console.log(" |Domicilio: $"+ domicilio+"                                 |");
  console.log(" |Propina:   $" + propina + "                                 |");
  console.log(" |Total:     $" + total+"                                |");
  console.log(" |_________________________________________________|");
}
imprimirPedido(estado[1]);
imprimirPedido(estado[0]);
