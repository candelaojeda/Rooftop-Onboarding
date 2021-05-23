const Autor = require("./autor");
const Note = require("./note");

var note1 = new Note;
note1.setTitulos("La piedra filosofal");
note1.setEditorial("Bloomsbury Publishing");
note1.setSinopsis("Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente: ¡es un verdadero mago!");
note1.setCantidadVendida(120000000);
console.log(note1);

var autor1 = new Autor;
autor1.setNombre("Joanne");
autor1.setApellido("Rowling");
autor1.setNacionalidad("Británica");
autor1.setEdad(31);
autor1.setLibro("HarryPotter");
console.log(autor1);
