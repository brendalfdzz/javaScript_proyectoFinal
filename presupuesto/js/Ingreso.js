class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);

        this._id = ++Ingreso.contadorIngresos;
    }

    // id -> no utilizamos set porq este valor no debe ser modificado
    get id() {
        return this._id;
    }
}