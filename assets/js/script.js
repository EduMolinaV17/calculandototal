let cantidad = document.querySelector(".cantidad");
let precioBase = 400000;
let valor = document.querySelector(".valorTotal");
let mas = document.querySelector(".mas");
let menos = document.querySelector(".menos");
menos.onclick = function(){
    cantidad.innerHTML--;
    valor.innerHTML=(cantidad.innerHTML * precioBase).toLocaleString("es-CL");
}
mas.onclick = function(){
    cantidad.innerHTML++;
    valor.innerHTML=(cantidad.innerHTML * precioBase).toLocaleString("es-CL");
}