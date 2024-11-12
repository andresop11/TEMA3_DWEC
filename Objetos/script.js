//Ejercicio 1





//Ejercicio 2
function Telefono(numero) {
    this.numero = numero; 
    this.nLlamadas = 0; 
  
    
    this.llamar = function() {
      this.nLlamadas++;
      console.log(`Total de llamadas: ${this.nLlamadas}`);
    };
  }


// Ejercicio 3
function Punto(x, y) {
    this.x = x;
    this.y = y;
}

function Recta(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.longitud = function() {
        const dX = this.p2.x - this.p1.x;
        const dY = this.p2.y - this.p1.y;
        return Math.sqrt(dX * dX + dY * dY); 
    };
}


//Ejercicio 4
function Casa(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;

    this.setNumero = function(numero) {
        this.numero = numero;
        return this.numero; 
    };

    this.setCalle = function(calle) {
        this.calle = calle;
        return this.calle;
    };

    this.setCodigoPostal = function(codigoPostal) {
        this.codigoPostal = codigoPostal;
        return this.codigoPostal;  
    };

    console.log(`Nueva casa en calle: ${this.calle}, numero: ${this.numero}, CP: ${this.codigoPostal}`);
}


//Ejercicio 5
function Alumno(id, nombre, media) {
    this.id = id;
    this.nombre = nombre;
    this.media = media;
}

function Colegio(nombre, nAulas) {
    this.nombre = nombre;
    this.nAulas = nAulas;
    this.alumnos = [];

    this.consultarMedia = function(id) {
        let alumno = this.alumnos.find(a => a.id === id);
        if (alumno) {
            console.log(`La nota media de ${alumno.nombre} (ID: ${alumno.id}) es: ${alumno.media}`);
        } else {
            console.log("Alumno no encontrado.");
        }
    };

    this.modificarMedia = function(id, nuevaNota) {
        let alumno = this.alumnos.find(a => a.id === id);
        if (alumno) {
            alumno.media = nuevaNota;
            console.log(`La nueva nota media de ${alumno.nombre} (ID: ${alumno.id}) es: ${alumno.media}`);
        } else {
            console.log("Alumno no encontrado.");
        }
    };
}
