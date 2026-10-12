const ingresos = [
                    new Ingreso('Salario', 25000),
                    new Ingreso('Venta auto', 50000),
                    new Ingreso('Venta', 500)
                ]

const egresos = [
                    new Egreso ('Renta', 5000),
                    new Egreso ('Ropa', 1000),
                    new Egreso ('Comida', 1500)
                ]

// funcion totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;

    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }

    return totalIngreso;
};

// funcion totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso .valor;
    }

    return totalEgreso;
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

// formato a la moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency', 
        currency: 'MXN', 
        minimumFractionDigits: 2
    });
};   

// formato al porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

const cargarIngresos = () => {
    let ingresosHTML = "";

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class=" elemento_descripcion">
                ${ingreso.descripcion}
            </div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(ingreso.valor)}
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = "";

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">
                ${egreso.descripcion}
            </div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(egreso.valor)}
                </div>
                <div class="elemento_eliminar">
                    <button class=" elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;

    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.finIndex(egreso => egreso.id == id);
    egresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarEgresos();
};

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};


