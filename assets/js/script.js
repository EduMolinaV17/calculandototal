let cantidad = document.querySelector(".cantidad");
let precioBase = 400000;
let valor = document.querySelector(".valorTotal");
let mas = document.querySelector(".mas");
let menos = document.querySelector(".menos");

mas.onclick = function(){
    cantidad.innerHTML++;
    valor.innerHTML=(cantidad.innerHTML * precioBase).toLocaleString("es-CL");
};

menos.onclick = function(){
    cantidad.innerHTML--;
    valor.innerHTML=(cantidad.innerHTML * precioBase).toLocaleString("es-CL");
};