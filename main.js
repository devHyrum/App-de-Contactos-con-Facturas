const facturas = [
    { id: 1, numeroFactura: "F001", descripcion: "Compra de muebles de oficina", estado: "pagada", fecha: "12-10-2023" },
    { id: 2, numeroFactura: "F002", descripcion: "Suscripción a servicio de internet", estado: "pendiente", fecha: "05-02-2024" },
    { id: 3, numeroFactura: "F003", descripcion: "Reparación de equipo de cómputo", estado: "pagada", fecha: "18-03-2024" },
    { id: 4, numeroFactura: "F004", descripcion: "Compra de papelería", estado: "pendiente", fecha: "02-04-2024" },
    { id: 5, numeroFactura: "F005", descripcion: "Pago de servicios públicos", estado: "pagada", fecha: "11-04-2024" },
    { id: 6, numeroFactura: "F006", descripcion: "Mantenimiento de software", estado: "pendiente", fecha: "15-04-2024" },
    { id: 7, numeroFactura: "F007", descripcion: "Compra de licencias de software", estado: "pagada", fecha: "23-11-2023" },
    { id: 8, numeroFactura: "F008", descripcion: "Servicios de diseño gráfico", estado: "pendiente", fecha: "10-01-2024" },
    { id: 9, numeroFactura: "F009", descripcion: "Capacitación en seguridad informática", estado: "pagada", fecha: "27-02-2024" },
    { id: 10, numeroFactura: "F010", descripcion: "Compra de equipos de oficina", estado: "pendiente", fecha: "13-03-2024" },
    { id: 11, numeroFactura: "F011", descripcion: "Compra de material de oficina", estado: "pendiente", fecha: "18-04-2024" },
    { id: 12, numeroFactura: "F012", descripcion: "Pago de renta de local comercial", estado: "pagada", fecha: "23-04-2024" },
    { id: 13, numeroFactura: "F013", descripcion: "Servicios de limpieza", estado: "pendiente", fecha: "25-04-2024" },
    { id: 14, numeroFactura: "F014", descripcion: "Mantenimiento de equipos de aire acondicionado", estado: "pagada", fecha: "27-04-2024" },
    { id: 15, numeroFactura: "F015", descripcion: "Compra de insumos médicos", estado: "pendiente", fecha: "30-04-2024" }
];

const formulario = document.querySelector('tbody')
let arraySemElementos = null;

function iterarTodo(){
    arraySemElementos = iterarTodo;
    formulario.innerHTML = '';
    facturas.forEach(iterarFactura => {
        DomElements (iterarFactura.id ,iterarFactura.numeroFactura ,iterarFactura.descripcion ,iterarFactura.estado ,iterarFactura.fecha)
    })
}
console.log(iterarTodo)
function imprimirPendientes() {
    arraySemElementos = imprimirPendientes;
    formulario.innerHTML = '';
    const facturasPendiente = facturas.filter(i => i.estado === "pendiente")
    facturasPendiente.forEach(pendiente => {
            DomElements (pendiente.id ,pendiente.numeroFactura ,pendiente.descripcion ,pendiente.estado ,pendiente.fecha)
    });
}

function imprimirPagada() {
    arraySemElementos = imprimirPagada;
    formulario.innerHTML = '';
    const facturasPagados = facturas.filter(i => i.estado === "pagada");
    facturasPagados.forEach(pagado => {
        DomElements (pagado.id ,pagado.numeroFactura ,pagado.descripcion ,pagado.estado ,pagado.fecha)
    });
}



const todos = document.querySelector('#todos')
const pendientes = document.querySelector('#pendientes')
const pagada = document.querySelector('#pagada')

todos.addEventListener('click', iterarTodo)
pendientes.addEventListener('click', imprimirPendientes)
pagada.addEventListener('click', imprimirPagada)

function eliminarFactura(id) {
    const index = facturas.findIndex(factura => factura.id === id);
    facturas.splice(index, 1);
    // Actualizar la visualización de las facturas
    if (arraySemElementos) {
        arraySemElementos();
    }
}


function DomElements (id ,numeroFactura ,descripcion ,estado ,fecha){
    const primeraLinea = document.createElement('tr');

    const idPrimero = document.createElement('td');
    idPrimero.textContent = id;

    const numeroFacturaSegundo= document.createElement('td');
    numeroFacturaSegundo.textContent = numeroFactura;
    
    const descripcionTercero = document.createElement('td');
    descripcionTercero.textContent = descripcion;

    const estadoCuarto = document.createElement('td');
    estadoCuarto.textContent = estado;
    estadoCuarto.classList.add(estado === "pagada" ? 'pagada' : 'pendiente');

    const fechaQuinto = document.createElement('td');
    fechaQuinto.textContent = fecha;

    const botonSexto = document.createElement('td');

    if (estado === "pagada") {
        const botonCaja = document.createElement('button');
        botonCaja.textContent = "Del";
        botonCaja.classList.add('action');

        botonCaja.addEventListener('click', function () {
            eliminarFactura(id);
        });
        botonSexto.appendChild(botonCaja);
    }

    primeraLinea.appendChild(idPrimero);
    primeraLinea.appendChild(numeroFacturaSegundo);
    primeraLinea.appendChild(descripcionTercero);
    primeraLinea.appendChild(estadoCuarto);
    primeraLinea.appendChild(fechaQuinto);
    primeraLinea.appendChild(botonSexto);
    formulario.appendChild(primeraLinea);

    return primeraLinea;

}

const botonDeLaEsquina = document.querySelector('#addContactBtn')
const ventanaEmergente = document.querySelector('#modal')
const cerrarVentana = document.querySelector('.close')

botonDeLaEsquina.addEventListener('click', function() {
    ventanaEmergente.style.display = 'block';
});

cerrarVentana.addEventListener('click', function(){
    ventanaEmergente.style.display = 'none';    
});

window.addEventListener('click', function(e) {
    if (e.target === ventanaEmergente) {
        ventanaEmergente.style.display = 'none'; // Oculta o modal
    }
});

const contactForm = document.querySelector('#contactForm')
const factura = document.querySelector('#factura')
const descripcion = document.querySelector('#descripcion')
const estado = document.querySelector('#estado')
const fecha = document.querySelector('#fecha')

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const factura1 = factura.value
    const descripcion1 = descripcion.value
    const estado1 = estado.value
    const fecha1 = fecha.value

    // Crear nueva fila para la factura
    const nuevaFactura = DomElements(
        facturas.length + 1,
        factura1,
        descripcion1,
        estado1,
        fecha1
    );

    // Agregar la factura al arreglo general de facturas
    facturas.push({
        id: facturas.length + 1,
        numeroFactura: factura1,
        descripcion: descripcion1,
        estado: estado1,
        fecha: fecha1
    });

    // Limpiar el formulario y cerrar la ventana emergente
    contactForm.reset();
    ventanaEmergente.style.display = 'none';

    // Si la factura es pendiente, agregarla a la lista de pendientes
    if (estado1 === "pendiente") {
        imprimirPendientes();
    }
});