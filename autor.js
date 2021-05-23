class Autor{
    constructor(){
        this.nombre = new String;
        this.apellido = new String;
        this.nacionalidad = new String;
        this.edad = new Number;
        this.libro = new String;
    }

    setNombre(n){
        if (typeof n == "string") {
            this.nombre = n;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getNombre(){
        return this.nombre;
    }

    setApellido(a){
        if (typeof a == "string") {
            this.apellido = a;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getApellido(){
        return this.apellido;
    }

    setNacionalidad(nac){
        if (typeof nac == "string") {
            this.nacionalidad = nac;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getNacionalidad(){
        return this.nacionalidad;
    }

    setEdad(e){
        if (typeof e == "number") {
            this.edad = e;
        }else{
            throw new Error("El parámetro debe ser del tipo number.");
        }
    }
    getEdad(){
        return this.edad;
    }

    setLibro(l){
        if (typeof l == "string") {
            this.libro = l;
        }else{
            throw new Error("El parámetro debe ser del tipo string.");
        }
    }
    getLibro(){
        return this.libro;
    }
}
module.exports = Autor;