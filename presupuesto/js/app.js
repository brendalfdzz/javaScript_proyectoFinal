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

    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());
    };

cargarCabecero();
