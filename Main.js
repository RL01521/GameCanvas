const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Función para cambiar el fondo
function cambiarFondo(rutaFondo, personajes) {
    const fondo = new Image();
    fondo.src = rutaFondo;

    fondo.onload = function() {
        // Limpiar el canvas antes de dibujar el nuevo fondo
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Dibujar el nuevo fondo
        ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height);

        // Dibujar los personajes después de cargar el fondo
        personajes.forEach(personaje => {
            dibujarPersonaje(personaje);
        });
    };
}

// Objeto de personaje
const personajes = {
    prota: {
        imagen: 'img/p1.png',  // Ruta de la imagen del personaje
        x: 550,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 150,  // Ancho de la imagen
        alto: 300,   // Alto de la imagen
    },

    prota2: {
        imagen: 'img/p1.png',  // Ruta de la imagen del personaje
        x: 300,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 150,  // Ancho de la imagen
        alto: 300,   // Alto de la imagen
    },

    prota1: {
        imagen: 'img/p1.png',  // Ruta de la imagen del personaje
        x: 800,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 150,  // Ancho de la imagen
        alto: 300,   // Alto de la imagen
    },
    
    n1: {
        imagen: 'img/p2.png',  // Ruta de la imagen del personaje
        x: 750,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 300,  // Ancho de la imagen
        alto: 400,   // Alto de la imagen
    },

    n1a: {
        imagen: 'img/p2.1.png',  // Ruta de la imagen del personaje
        x: 580,  // Posición x en el canvas
        y: 250, // Posición y en el canvas
        ancho: 300,  // Ancho de la imagen
        alto: 450,   // Alto de la imagen
    },

    n2: {
        imagen: 'img/p3.png',  // Ruta de la imagen del personaje
        x: 750,  // Posición x en el canvas
        y: 270, // Posición y en el canvas
        ancho: 300,  // Ancho de la imagen
        alto: 400,   // Alto de la imagen
    },

    n2a: {
        imagen: 'img/p3.1.png',  // Ruta de la imagen del personaje
        x: 800,  // Posición x en el canvas
        y: 310, // Posición y en el canvas
        ancho: 160,  // Ancho de la imagen
        alto: 300,   // Alto de la imagen
    },

    n3: {
        imagen: 'img/p4.png',  // Ruta de la imagen del personaje
        x: 800,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 250,  // Ancho de la imagen
        alto: 400,   // Alto de la imagen
    },

    n4: {
        imagen: 'img/p5.png',  // Ruta de la imagen del personaje
        x: 220,  // Posición x en el canvas
        y: 300, // Posición y en el canvas
        ancho: 280,  // Ancho de la imagen
        alto: 300,  // Alto de la imagen
    },


};

// Función para dibujar personajes
function dibujarPersonaje(personaje) {
    const imgPersonaje = new Image();
    imgPersonaje.src = personaje.imagen;

    imgPersonaje.onload = function() {
        // Dibujar al personaje en su posición
        ctx.drawImage(imgPersonaje, personaje.x, personaje.y, personaje.ancho, personaje.alto);
    };
}

// Definir las escenas
const escenas = {
    inicio: {
        texto: "Estas en el parque y se te acerca un chico con un panfleto sobre el medio ambiente",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota, personajes.n1], // Agregamos el personaje la escena
        opciones: [
            { texto: "Tomas el panfleto", escenaSiguiente: 'leerlo' },
            { texto: "No tomas el panfleto", escenaSiguiente: 'piensas' }
        ]
    },
    leerlo: {
        texto: "Te llama la atención como el panfleto, habla sobre el medio ambiente.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            { texto: "Sigues leyendo", escenaSiguiente: 'seguir' },
            { texto: "Paras de leer", escenaSiguiente: 'parar' }
        ]
    },

    parar: {
        texto: "Ya fue sufuciente",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            { texto: "Vuelves a casa", escenaSiguiente: 'casa1' },
        ]
    },

    seguir: {
        texto: "Sigues con tu lectura, haz aprendido bastante sobre el medio ambiente.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Ya es tarde me regreso a casa", escenaSiguiente: 'casa1'}
        ]
    },



    casa1: {
        texto: "Ya estoy en casa, ya es tarde me voy directo a dormir",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te duermes", escenaSiguiente: 'amanecer'}
        ]
    },

    amanecer: {
        texto: "Ya amanecio, tengo que ir rapido que al trabajo no puedo llegar mas veces tarde.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Ir rapido al trabajo", escenaSiguiente: 'trabajo'}
        ]
    },

    trabajo: {
        texto: "Llegue al trabajo  y me encuentro con una compañera y me dice: has escuchado las noticias.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "No suelo verlas que ha pasado", escenaSiguiente: 'noticias'}
        ]
    },

    noticias: {
        texto: "Pues que las cosas estan mal con una planta que esta viertiendo químicos en un rio importante de la ciudad.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "¡¡El panfleto!!", escenaSiguiente: 'panfleto'}
        ]
    },

    panfleto: {
        texto: "- ¡Panfleto de que hablas!, Ayer me dieron uno y trataba sobre eso de la planta, las personas que viven cerca quejandose parece ser algo serio, crees que podriamos ayudarles.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Preguntarle si se le ocurre algo a Karla", escenaSiguiente: 'karla'},
            {texto: "Proner una idea", escenaSiguiente: 'idea'}
        ]
    },

    idea: {
        texto: "Tengo una idea hablar con el dueño de la fabrica ya que conozco a alguien que me puede facilitar su contacto.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Si podria funcionar hagamoslo", escenaSiguiente: 'hacer2'},
        ]
    },

    hacer2: {
        texto: "Si mañana podemos reunirnos por la mañana que es domingo para planear todo",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Trabajas la jornada y regresas a casa", escenaSiguiente: 'casa4'},
        ]
    },

    casa4: {
        texto: "Ya estoy en casa bueno, me voy a dormir mañana tengo que reunirme con Karla ",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas a dormir ya que mañana sales", escenaSiguiente: 'salir2'},
        ]
    },

    salir2: {
        texto: "Bueno vamos a reunirnos",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas que has quedado con karla", escenaSiguiente: 'salida2',},
        ]
    },

    salida2: {
        texto: "Buenas karla, consegui poder tener una reunión con el jefe de la fabrica vamos.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Te vas con karla a la reunión", escenaSiguiente: 'fabrica',},       
        ]
    },

    fabrica: {
        texto: "Esta es su oficina solo queda esperalo ya llegara.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Esperas que llegue", escenaSiguiente: 'llegue',},       
        ]
    },

    llegue: {
        texto: "Hola, asi que ustedes quieren hablar conmigo.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Si queremos hablar", escenaSiguiente: 'jefe',},        
        ]
    },

    jefe: {
        texto: "Bueno los escucho que quieren decirme.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Sobre la planta y los desechos", escenaSiguiente: 'jefe1',},       
        ]
    },

    jefe1: {
        texto: "Si he escuchado el tema pero las cosas no son tan fáciles.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Que quiere decir", escenaSiguiente: 'jefe2',},       
        ]
    },

    jefe2: {
        texto: "Las fabricas producimos y entregamos lo que nuestros clientes quieren.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Que dices", escenaSiguiente: 'jefe3',},       
        ]
    },

    jefe3: {
        texto: "Que solo hacemos nuestro trabajo que importa perder algo naturaleza",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Pero esto afecta a la ciudad", escenaSiguiente: 'jefe4',},       
        ]
    },

    jefe4: {
        texto: "Pero por eso pararemos, las quejas han llegado de todos lados.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Como dice", escenaSiguiente: 'jefe5',},       
        ]
    },

    jefe5: {
        texto: "Si, denuncias legales de que si no paramos nos cierran la planta.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Entonces que pasara", escenaSiguiente: 'jefe6',},       
        ]
    },

    jefe6: {
        texto: "Que pararemos, tanto les preocupa algo tan insignificante.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "No lo entiende", escenaSiguiente: 'jefe7',},       
        ]
    },

    jefe7: {
        texto: "No es algo insignifcante, yo también pensaba asi pero esto vas alla de lo que se puede ver.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "¿?", escenaSiguiente: 'jefe8',},       
        ]
    },

    jefe8: {
        texto: "Esto algo que afecta a las personas que viven cerca a los animales a plantas etc.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "!!!!!", escenaSiguiente: 'jefe9',},       
        ]
    },

    jefe9: {
        texto: "Para, si he entendido a lo que te refires.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Paras y lo escuchas", escenaSiguiente: 'jefeb',},       
        ]
    },

    jefeb: {
        texto: "Antes yo vivia cerca de un lago pasaba las tardes ahí pero....",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "...", escenaSiguiente: 'jefeb1',},       
        ]
    },

    jefeb1: {
        texto: "Una planta arruino el lago y no puede volver a disfrutar de estar en el lago por la contaminación.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "!!!!!", escenaSiguiente: 'jefeb2',},       
        ]
    },

    jefeb2: {
        texto: "En estos momentos me habia desviado solo me importaba ganar beneficio, pero gracias a tí he recordado.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Escucharlo", escenaSiguiente: 'jefeb3',},       
        ]
    },

    jefeb3: {
        texto: "Lo que me hacía feliz era estar en ese lago y como yo se lo estaba arruinado a ustedes los ciudadanos.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Que hara ahora", escenaSiguiente: 'jefeb4',},       
        ]
    },

    jefeb4: {
        texto: "Lo que hare sera rectificar mis acciones tanto por lo legal y por lo personal.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Continuan hablando", escenaSiguiente: 'jefeb5',},       
        ]
    },

    jefeb5: {
        texto: "Bueno es momento de retirarnos un gusto haberle conocido.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.prota, personajes.n2a, personajes.n4],
        opciones: [
            {texto: "Te vas", escenaSiguiente: 'salirb1',},       
        ]
    },

    salirb1: {
        texto: "- Pues al final fue todo bien .",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Si salio bien", escenaSiguiente: 'salirb2',},       
        ]
    },

    salirb2: {
        texto: "Que bien haberle ayudado, se habia perdido en su razón de ganar dinero olvido lo mas importante.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Si, cuidar lo que tenemos", escenaSiguiente: 'salirb3',},       
        ]
    },

    salirb3: {
        texto: "Yo tambien habia perdido el rumbo le reste la importancia a este problema.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Que te paso", escenaSiguiente: 'salirb4',},       
        ]
    },

    salirb4: {
        texto: "Pero ese panfleto que me dieron me hizo reflexionar y entender la importancia de el medioambiente.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Caminas", escenaSiguiente: 'salirb5',},       
        ]
    },

    salirb5: {
        texto: "Bueno gracias por acompañarme Karla adios.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Decides pasar por el parque", escenaSiguiente: 'regresob',},       
        ]
    },

    regresob: {
        texto: "Caminas por el parque y miras a alguien.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Te acercas", escenaSiguiente: 'regresob1',},       
        ]
    },

    regresob1: {
        texto: "Hola queria darte las gracias.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota2, personajes.n1a],
        opciones: [
            {texto: "¿?", escenaSiguiente: 'regresob2',},       
        ]
    },

    regresob2: {
        texto: "-Que dices porque.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota2, personajes.n1a],
        opciones: [
            {texto: "Por el panfleto", escenaSiguiente: 'regresob3',},       
        ]
    },

    regresob3: {
        texto: "Me ayudo mucho a entender lo del medioambiemte y hable con el dueño de la planta.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota2, personajes.n1a],
        opciones: [
            {texto: "Le cuentas todo", escenaSiguiente: 'contarb',},       
        ]
    },
    contarb: {
        texto: "-Hicieste eso con el jefe de la planta estoy muy agradecido por lo que haz hecho.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota2, personajes.n1a],
        opciones: [
            {texto: "Hablan un rato", escenaSiguiente: 'casac1',},       
        ]
    },

    casac1: {
        texto: "Se me hace tarde me voy ya adios.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota2, personajes.n1a],
        opciones: [
            {texto: "Regreas a casa", escenaSiguiente: 'casac2',},       
        ]
    },

    casac2: {
        texto: "Ya estoy en casa, que bien haber ayudado.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota2],
        opciones: [
            {texto: "Reflexionas", escenaSiguiente: 'casac3',},       
        ]
    },

    casac3: {
        texto: "Esa pequeña acción como el panfleto logro despertar algo en mi y hizo que pudiera realiza un cambio para bien.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota2],
        opciones: [
            {texto: "Te duermes", escenaSiguiente: 'casac4',},       
        ]
    },

    casac4: {
        texto: "Toda acción pude paracer pequeña pero esto es un avance para algo grande.",
        fondo: 'img/fondo12.jpg',
        opciones: [
            {texto: "...", escenaSiguiente: 'Fin',},       
        ]
    },

    Fin: {
        texto: "Juego desarrollado Por: Marvin Javier Recinos Lopez, Jimmy , Cristian y Jesus.",
        fondo: 'img/end.jpeg',
        opciones: [
            {texto: "Gracias por jugar", escenaSiguiente: 'Fin',},       
        ]
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    karla: {
        texto: "Lo que se me ocurre es realizar una reunion con los ciudadanos y hablar del tema para poder ver que podemos hacer.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Me parece una buena idea hagamoslo", escenaSiguiente: 'hacer'},
        ]
    },

    hacer: {
        texto: "Si mañana podemos reunirnos por la mañana que es domingo para planear todo",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Trabajas la jornada y regresas a casa", escenaSiguiente: 'casa3'},
        ]
    },

    casa3: {
        texto: "Ya estoy en casa bueno, me voy a dormir mañana tengo que reunirme con Karla.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vasa a dormir ya que mañana sales", escenaSiguiente: 'salir'},
        ]
    },

    salir: {
        texto: "Bueno vamos a reunirnos.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas que has quedado con karla", escenaSiguiente: 'salida'},
        ]
    },

    salida: {
        texto: "Hola te estaba esperando, vamos ya se donde podemos reunirnos con algunos ciudadanos para hablar.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Hola, si vamos ", escenaSiguiente: 'ciudadanos',},
        ]
    },

    ciudadanos: {
        texto: "Aqui estan reunidos, pero hay una persona principal que ya he hablado con el y de lo que podemos hacer asi que te lo presentare. ",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Si, presentamelo a ver que proponen los ciudadanos", escenaSiguiente: 'presentar'},
        ]
    },

    presentar: {
        texto: "Hola me presento, soy el encardo de el cuidado de la naturaleza y el medioambiente como promotor.",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota2, personajes.n2a, personajes.n1a],
        opciones: [
            {texto: "Hola un gusto", escenaSiguiente: 'presentar1'},
        ]
    },

    presentar1: {
        texto: "-Bueno lo que hemos hablado es de realizar una manifestación.",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota2, personajes.n2a, personajes.n1a],
        opciones: [
            {texto: "Me parece una buena idea", escenaSiguiente: 'presentar2'},
        ]
    },

    presentar2: {
        texto: "- Y crear conciencia de como nos esta afectando esta contaminación.",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota2, personajes.n2a, personajes.n1a],
        opciones: [
            {texto: "Si, hay que hacerlo", escenaSiguiente: 'presentar3'},
        ]
    },

    presentar3: {
        texto: "- Si quieren acompañarnos la realizaremos dentro de una semana.",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota2, personajes.n2a, personajes.n1a],
        opciones: [
            {texto: "Si, los acompañaremos", escenaSiguiente: 'presentar4'},
        ]
    },

    presentar4: {
        texto: "Bueno al final lo ayudaremos nos vemos promotor y gracias por el folleto.",
        fondo: 'img/fondo6.jpg',
        personajes: [personajes.prota2, personajes.n2a, personajes.n1a],
        opciones: [
            {texto: "Si, vamonos ya", escenaSiguiente: 'presentar5'},
        ]
    },

    presentar5: {
        texto: "Bueno gracias Karla por haber propuesto esta idea.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Le das las gracias y te vas", escenaSiguiente: 'regresa'},
        ]
    },

    regresa: {
        texto: "Cambiaremos esto por el bien de todos.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Te vas a casa", escenaSiguiente: 'casad'},
        ]
    },

    casad: {
        texto: "Bueno dentro de una semana nos reuniremos para realizar la manifestación.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Pasa el tiempo y ha pasado una semana", escenaSiguiente: 'reunir'},
        ]
    },

    reunir: {
        texto: "Bueno me voy a reunir con karla para ir juntos.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas que has quedado", escenaSiguiente: 'reunir1'},
        ]
    },

    reunir1: {
        texto: "Hola Karla vamos a la manifestación.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Vas con ella", escenaSiguiente: 'reunir2'},
        ]
    },

    reunir2: {
        texto: "Se observa como el promotor habla del tema de la contaminación de la planta.",
        fondo: 'img/fondo11.jpg',
        personajes: [personajes.n1a],
        opciones: [
            {texto: "Vas y te acercas", escenaSiguiente: 'reunir3'},
        ]
    },

    reunir3: {
        texto: "Hablas con el y le ayudan a repartir folletos.",
        fondo: 'img/fondo11.jpg',
        personajes: [personajes.n1a, personajes.prota2, personajes.n2a],
        opciones: [
            {texto: "Reparten los folletos", escenaSiguiente: 'reunir4'},
        ]
    },

    reunir4: {
        texto: "Toma un folleto.",
        fondo: 'img/fondo11.jpg',
        personajes: [personajes.prota, personajes.n3],
        opciones: [
            {texto: "Gracias por el folleto", escenaSiguiente: 'reunir5'},
        ]
    },

    reunir5: {
        texto: "Se ve el interes de las personas y muchas gracias por haberme ayudado.",
        fondo: 'img/fondo11.jpg',
        personajes: [personajes.prota2, personajes.n1a, personajes.n2a],
        opciones: [
            {texto: "Bueno ya nos retiramos", escenaSiguiente: 'dejar'},
        ]
    },

    dejar: {
        texto: "Esa manifestación hizo que no paren de llegar llamadas.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.n4],
        opciones: [
            {texto: "No los entiendo", escenaSiguiente: 'dejar1'},
        ]
    },

    dejar1: {
        texto: "Pero las leyes son rigidas y me tocara ceder.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.n4],
        opciones: [
            {texto: "No puedo perder todo", escenaSiguiente: 'dejar2'},
        ]
    },

    dejar2: {
        texto: "Aceptare por que es lo único que me queda.",
        fondo: 'img/fondo7.jpg',
        personajes: [personajes.n4],
        opciones: [
            {texto: "Que fastidio", escenaSiguiente: 'dejar3'},
        ]
    },

    dejar3: {
        texto: "Crees que funcione Karla lo que hemos hecho.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Espero que si", escenaSiguiente: 'dejar4'},
        ]
    },

    
    dejar4: {
        texto: "Bueno pero hemos cumplido con nuestro deber hemos comunicado lo que sentimos.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Eso es cierto", escenaSiguiente: 'dejar5'},
        ]
    },

    dejar5: {
        texto: "Bueno gracias por todo karla, adios.",
        fondo: 'img/fondo5.jpg',
        personajes: [personajes.prota, personajes.n2a],
        opciones: [
            {texto: "Te vas a casa", escenaSiguiente: 'casaz'},
        ]
    },

    casaz: {
        texto: "Que bien haber auydado a una buena causa estoy seguro que las cosas saldran bien.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Pasan los dias", escenaSiguiente: 'casaz1'},
        ]
    },

    casaz1: {
        texto: "Vere la televisión.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas a verla", escenaSiguiente: 'casaz2'},
        ]
    },

    casaz2: {
        texto: "-Y en las noticias de hoy informamos que la planta ha detenido su producción hasta regular la contaminación.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Que bien", escenaSiguiente: 'casaz3'},
        ]
    },

    casaz3: {
        texto: "Todo esto lo logramos por que unimos y actuamos.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas a dormir", escenaSiguiente: 'casaz4'},
        ]
    },

    casaz4: {
        texto: "Una acción como interesarte y actuar son las cosas que realmente cambian los problemas.",
        fondo: 'img/fondo12.jpg',
        opciones: [
            {texto: "....", escenaSiguiente: 'casaz5'},
        ]
    },

    casaz5: {
        texto: "Si puedes ayudar hazlo y aunque creas que no puedas cambiar nada toda acción sirve.",
        fondo: 'img/fondo12.jpg',
        opciones: [
            {texto: ".....", escenaSiguiente: 'Fin3'},
        ]
    },

    Fin3: {
        texto: "Juego desarrollado Por: Marvin Javier Recinos Lopez, Jimmy , Cristian y Jesus.",
        fondo: 'img/end.jpeg',
        opciones: [
            {texto: "Gracias por jugar", escenaSiguiente: 'Fin2',},       
        ]
    },


// Rama 2

    piensas: {
        texto: "Me pregunto de que era ese panfleto del chico.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            { texto: "Sigues con tu camino", escenaSiguiente: 'ir' },
            { texto: "Vuelves para ver si te da un panfleto", escenaSiguiente: 'regreso' }
        ]
    },

    ir: {
        texto: "Lo mejor es volver a casa ya es tarde.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            { texto: "Vuelves a casa", escenaSiguiente: 'casa2'}
        ]
    },

    casa2: {
        texto: "Vuelves a casa y sientes que te perdiste de algo importante.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas a dormir pensativo", escenaSiguiente: 'amanecer2'}
        ]
    },

    regreso: {
        texto: "El chico estaba ahi, te sonrie y te da el panfleto.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota, personajes.n1],
        opciones: [
            { texto: "Leer", escenaSiguiente: 'leer1'}
        ]
    },

    leer1: {
        texto: "Lees el panfleto y vez que ya es tarde.",
        fondo: 'img/fondo1.png',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Regresas a casa", escenaSiguiente: 'casa1'}
        ]

    },

    amanecer2: {
        texto: "Ya desperte, toca ir al trabajo que voy tarde.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Ir al trabajo", escenaSiguiente: 'trabajo2'}
        ]
    },
    
    trabajo2: {
        texto: "Llegue al trabajo  y me encuentro con una compañera y me dice: has escuchado las noticias.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "No suelo verlas que ha pasado", escenaSiguiente: 'noticias2'}
        ]
    },

    noticias2: {
        texto: "Pues que las cosas estan mal con una planta que esta viertiendo químicos en un rio importante de la ciudad.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "No sabia para nada", escenaSiguiente: 'nada'}
        ]
    },

    nada: {
        texto: "-¿No te preocupa el tema?, No para nada aunque este cerca ese rio no creo que llegue a afectarnos.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Continuas con el trabajo y completas jornada", escenaSiguiente: 'casab'}
        ]
    },

    casab: {
        texto: "Ya estoy en casa, me pregunto por que les preocupa tanto un simple rio",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Te vas a dormir", escenaSiguiente: 'amanecerb'},
        ]
    },

    amanecerb: {
        texto: "Bueno hoy es domingo creo que saldre al parque.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Vas al parque", escenaSiguiente: 'trabajarb'},
        ]
    },

    trabajarb: {
        texto: "Este parque suele estar lleno pero hoy esta vacio que raro.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Caminas por el parque", escenaSiguiente: 'hablab'},
        ]
    },

    hablab: {
        texto: "Miras a lo lejos a una persona y le preguntas algo.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota, personajes.n3],
        opciones: [
            {texto: "¿Sabes por que el parque esta vacio?", escenaSiguiente: 'parqueb'},
        ]
    },

    parqueb: {
        texto: "- Si, estan todos en una reunión para hablar sobre los desechos que tiran al rio.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota, personajes.n3],
        opciones: [
            {texto: "No entiendo por que les preocupa tanto", escenaSiguiente: 'seguirb'},
        ]
    },

    seguirb: {
        texto: "Bueno gracias por responder mi pregunta.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota, personajes.n3],
        opciones: [
            {texto: "Sigues caminando por el parque", escenaSiguiente: 'caminarb'},
        ]
    },

    caminarb: {
        texto: "Bueno me voy a casa no quiero que se me haga tarde en el parque.",
        fondo: 'img/fondo8.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Te vas a casa", escenaSiguiente: 'casa1a'},
        ]
    },

    casa1a: {
        texto: "Todos estan obsesionados con ese rio.",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Ves a ver la televisión", escenaSiguiente: 'casab2'},
        ]
    },

    casab2: {
        texto: "Y en las noticias de hoy.. contaminación en un rio por planta.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Cambias de canal", escenaSiguiente: 'casab3'},
        ]
    },

    casab3: {
        texto: "Y en las noticias de hoy.. contaminación en un rio por planta.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Pero esto que es", escenaSiguiente: 'casab4'},
        ]
    },

    casab4: {
        texto: "Bueno me voy a dormir.",
        fondo: 'img/fondo9.jpg',
        personajes: [personajes.prota],
        opciones: [
            {texto: "Te vas a dormir", escenaSiguiente: 'trabajob1'},
        ]
    },

    trabajob1: {
        texto: "Bueno vamos a trabajar.",
        fondo: 'img/fondo3.jpg',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "Vas al trabajo", escenaSiguiente: 'trabajob2'},
        ]
    },

    trabajob2: {
        texto: "Hola Karla como va todo.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Te mira y dice", escenaSiguiente: 'trabajob3'}
        ]
    },

    trabajob3: {
        texto: "Hola bien pero la ciudad no.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Las noticias no paran", escenaSiguiente: 'trabajob4'}
        ]
    },

    trabajob4: {
        texto: "Pero no creo que esto avance mas.",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Eso pasara seguro", escenaSiguiente: 'trabajob5'}
        ]
    },

    trabajob5: {
        texto: "Terminas la jornada y regresas a casa..",
        fondo: 'img/fondo4.jpg',
        personajes: [personajes.prota, personajes.n2],
        opciones: [
            {texto: "Te vas a casa.", escenaSiguiente: 'casaf'}
        ]
    },

    casaf: {
        texto: "No pasara nada seguro",
        fondo: 'img/fondo2.png',
        personajes: [personajes.prota1],
        opciones: [
            {texto: "El tiempo pasa 1 año despues", escenaSiguiente: 'casaf1'}
        ]
    },

    casaf1: {
        texto: "- Y las noticias ciudad evacuado por una contamianción excesiva que se salio de control.",
        fondo: 'img/fondo9.jpg',
        opciones: [
            {texto: "Te fuiste por la evacuación", escenaSiguiente: 'casaf2'}
        ]
    },

    casaf2: {
        texto: "El no actuar por creer que tu esfuerzo es insignificante te lleva a perder lo mas fundamental la razón de vivir",
        fondo: 'img/fondo10.jpg',
        opciones: [
            {texto: "...", escenaSiguiente: 'casaf3'}
        ]
    },

    casaf3: {
        texto: "Como sea por ahora esa extraña historia llego a su fin. En este mundo cuando miras hacia delante es el futuro y cuando miras atrás, es un recuerdo, y si seleccionas una pequeña parte se vuelve historia. Esto no es más que un pequeño fragmento de una de esas historias.",
        fondo: 'img/fondo10.jpg',
        opciones: [
            {texto: "...", escenaSiguiente: 'Fin2',},
        ]
    },

    Fin2: {
        texto: "Juego desarrollado Por: Marvin Javier Recinos Lopez, Jimmy , Cristian y Jesus.",
        fondo: 'img/end.jpeg',
        opciones: [
            {texto: "Gracias por jugar", escenaSiguiente: 'Fin2',},       
        ]
    },
    
};

// Función modificada para cargar la escena
function cargarEscena(escenaId) {
    const escena = escenas[escenaId];
    
    // Cambiar el fondo y dibujar los personajes después de cargar el fondo
    cambiarFondo(escena.fondo, escena.personajes);

    // Mostrar el texto de la escena
    document.getElementById('texto-escena').innerText = escena.texto;

    // Mostrar las opciones
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';  // Limpiar las opciones anteriores

    escena.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.innerText = opcion.texto;
        boton.classList.add('opcion');
        boton.onclick = () => cargarEscena(opcion.escenaSiguiente);
        opcionesDiv.appendChild(boton);
    });

    // Selecciona el elemento de audio para la música de fondo
const musicaFondo = document.getElementById('musicaFondo');

// Define la música de fondo para cada escena
const musicaPorEscena = {
    leerlo: 'aud/p5.3.mp3',
    piensas: 'aud/p5.2.mp3',
    amanecer: 'aud/p5.4.mp3',
    salir2: 'aud/p5.5.mp3',
    salir: 'aud/p5.5.mp3',
    amanecerb: 'aud/p5.6.mp3',
    llegue: 'aud/p5.7.mp3',
    jefeb: 'aud/p5.8.mp3',
    salirb1: 'aud/p5.3.mp3',
    casac4: 'aud/Fin.mp3',
    casaf1: 'aud/p5.1.mp3',
    casaz4: 'aud/Fin.mp3',
    presentar: 'aud/p5.3.mp3',
    reunir: 'aud/p5.4.mp3',
    dejar: 'aud/p5.7.mp3',
    dejar3: 'aud/p5.3.mp3',
    regresob: 'aud/p5.2.mp3',
    trabajob1: 'aud/p5.2.mp3'
 
    // Agrega más escenas y sus canciones aquí
};

// Función para cambiar la música de fondo según la escena
function cambiarMusica(escenaId) {
    const nuevaMusica = musicaPorEscena[escenaId];
    if (nuevaMusica && musicaFondo.src !== nuevaMusica) {
        musicaFondo.src = nuevaMusica;
        musicaFondo.play().catch(error => console.log("Error al reproducir la música:", error));
    }
}

document.getElementById('leerlo').addEventListener('click', () => {
    cambiarMusica('leerlo'); // Cambia la música a la de la escena "inicio"
});

document.getElementById('piensas').addEventListener('click', () => {
    cambiarMusica('piensas'); // Cambia la música a la de la escena "inicio"
});


// Función modificada para cargar la escena
function cargarEscena(escenaId) {
    const escena = escenas[escenaId];
    
    // Cambiar el fondo y dibujar los personajes después de cargar el fondo
    cambiarFondo(escena.fondo, escena.personajes);

    // Mostrar el texto de la escena
    document.getElementById('texto-escena').innerText = escena.texto;

    // Mostrar las opciones
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';  // Limpiar las opciones anteriores

    escena.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.innerText = opcion.texto;
        boton.classList.add('opcion');
        boton.onclick = () => cargarEscena(opcion.escenaSiguiente);
        opcionesDiv.appendChild(boton);
    });

    // Cambiar la música de fondo
    cambiarMusica(escenaId);
    
}

    
}

// Cargar la primera escena
cargarEscena('inicio');