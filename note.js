class Note{
    constructor(){
        this.titulos = new String;
        this.editorial = new String;
        this.sinopsis = new String;
        this.cantidadVendida = new Number;
    }

    setTitulos(t){
        if (typeof t == "string") {
            this.titulos = t;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getArticulos(){
        return this.titulos;
    }

    setEditorial(ed){
        if (typeof ed == "string") {
            this.editorial = ed;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getEditorial(){
        return this.editorial;
    }

    setSinopsis(si){
        if (typeof si == "string") {
            this.sinopsis = si;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getSinopsis(){
        return this.sinopsis;
    }

    setCantidadVendida(cant){
        if (typeof cant == "number") {
            this.cantidadVendida = cant;
        }else{
            throw new Error("El parámetro debe ser del tipo number.");
        }
    }
    getCantidadVendida(){
        return this.cantidadVendida;
    }
}
module.exports = Note;