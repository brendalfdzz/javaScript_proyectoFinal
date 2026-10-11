const ingresos = [
                    new Ingreso ('Salario', 20000),
                    new Ingreso ('Venta auto', 50000)
                ]

const egresos = [
                    new Egreso ('Renta', 4000),
                    new Egreso ('Ropa', 800)
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

cargarCabecero();
