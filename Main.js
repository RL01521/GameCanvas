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
        personajes: [personajes.prota, personajes.n1], // Agregamos el personaje del chico a la escena
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
            {texto: "Te vasa a dormir ya que mañana sales", escenaSiguiente: 'salir2'},
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
            {texto: "Si, presentamelo a ver que proponen los ciudadanos", escenaSiguiente: 'presentar'},
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
    piensas: 'aud/p5.2.mp3'
 
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