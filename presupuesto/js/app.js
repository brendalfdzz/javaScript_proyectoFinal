const ingresos = [
                    {descripcion: "Quincena", valor: 9000},
                    {descripcion: "Venta", valor: 400}
                ]

const egresos = [
                    {descripcion: "Renta", valor: 900},
                    {descripcion: "Ropa", valor: 400}
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
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
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
