/*=============== Definimos un arreglo con los datos del menú de navegación ===============*/
const menuItems = [
    { href: "#inicio", text: "INICIO" },
    { href: "#sobremi", text: "SOBRE MI" },
    { href: "#skills", text: "HABILIDADES" },
    { href: "#curriculum", text: "CURRICULUM" },
    { href: "#portafolio", text: "PORTFOLIO" },
    { href: "#contacto", text: "CONTACTO" }
];
/*=============== Seleccionamos el contenedor de la lista de navegación ===============*/
const navList = document.getElementById('navList');
/*=============== Recorrer el arreglo de items del menú y generar el HTML ===============*/
menuItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('nav__item');
    
    const link = document.createElement('a');
    link.href = item.href;
    link.classList.add('nav__link');
    
    const span = document.createElement('span');
    span.textContent = item.text;
    
    link.appendChild(span);
    listItem.appendChild(link);
    navList.appendChild(listItem);
});
/*=============== Arreglo con las letras que deseas mostrar en el loader ===============*/
 const letters = ['C', 'a', 'r', 'g', 'a', 'n', 'd', 'o', '.', '.', '.'];
/*=============== Arreglo de datos para el contenido del loader ===============*/
   const loaderData = {
    particles: 5, // Cantidad de partículas
    lightsabers: [
        { side: 'left', color: 'green' },
        { side: 'right', color: 'red' }
    ],
    dots: 4, // Cantidad de puntos
    circles: 10 // Cantidad de círculos
};
/*=============== Seleccionamos el contenedor ===============*/
const loadingTextDiv = document.getElementById('loadingText');
/*=============== Recorremos el arreglo y agregamos cada letra como un <span class="letter"> ===============*/
letters.forEach(letter => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.textContent = letter;
    loadingTextDiv.appendChild(span);
});
/*=============== Insertamos las partículas ===============*/
const loaderContent = document.getElementById('loaderContent');
for (let i = 1; i <= loaderData.particles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('ls-particles', `ls-part-${i}`);
    loaderContent.appendChild(particle);
}
/*=============== Insertamos los lucesaber (barras de luz) ===============*/
loaderData.lightsabers.forEach(lightsaber => {
    const saber = document.createElement('div');
    saber.classList.add('lightsaber', `ls-${lightsaber.side}`, `ls-${lightsaber.color}`);
    loaderContent.appendChild(saber);
});
/*=============== Insertamos los puntos (dots) ===============*/
const dotsContainer = document.getElementById('dotsContainer');
for (let i = 0; i < loaderData.dots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}
/*=============== Insertamos los círculos (circles) ===============*/
const circlesContainer = document.getElementById('circlesContainer');
for (let i = 0; i < loaderData.circles; i++) {
    const circle = document.createElement('li');
    circlesContainer.appendChild(circle);
}
/*=============== Arreglo con la información de tarjeta de mi perfil ===============*/
const contenidoBanner = [
    { tipo: "imagen", src: "img/user.jpg", alt: "Foto de usuario" },
    { tipo: "h1", texto: "JOSÉ RAÚL GUTIÉRREZ CASTRO" },
    { tipo: "h2", texto: "Ingeniero en Sistemas Computacionales" },
    { tipo: "h2", texto: "Técnico en mantenimiento en equipo de computo" },
    { tipo: "h2", texto: "Desarrollador Junior Front-End" }
  ];
/*===============  Arreglo con la información de "Sobre Mí" y "Conocimientos" ===============*/
const data = {
    sobreMi: {
        nombre: "Raúl Castro",
        experiencia: "Tengo 6 años de experiencia en desarrollo web, soporte informático, mantenimiento preventivo y correctivo, con conocimiento en bases de datos y desarrollo de aplicaciones móviles en Android.",
        habilidades: "Con una sólida ética de trabajo, excelente capacidad para resolver problemas y habilidades destacadas en trabajo en equipo y comunicación. Comprometido con la innovación y el aprendizaje continuo."
    },
    conocimientos: [
        { icon: 'fa-solid fa-laptop-code', nombre: 'Desarrollo web Responsivo' },
        { icon: 'fa-brands fa-chromecast', nombre: 'Redes' },
        { icon: 'fa-solid fa-screwdriver-wrench', nombre: 'Mantenimiento Preventivo y Correctivo' },
        { icon: 'ri-seo-line', nombre: 'Seo' }
    ]
};
/*=============== Arreglo con la información de habilidades ===============*/
const skills = {
    desarrollo: [
        { icon: 'fa-brands fa-js', nombre: 'JavaScript' },
        { icon: 'fa-brands fa-html5', nombre: 'HTML5' },
        { icon: 'fa-brands fa-css3-alt', nombre: 'CSS3' },
        { icon: 'fa-solid fa-code', nombre: 'Liquid' },
        { icon: 'fa-brands fa-php', nombre: 'PHP' },
        { icon: 'fa-brands fa-react', nombre: 'React' },
        { icon: 'fa-brands fa-angular', nombre: 'Angular' },
        { icon: 'fa-brands fa-java', nombre: 'Java' }
    ],
    herramientas: [
        { icon: 'fa-brands fa-github', nombre: 'GitHub' },
        { icon: 'fa-solid fa-terminal', nombre: 'Command Line' }
    ],
    plataformas: [
        { icon: 'fa-brands fa-shopify', nombre: 'Shopify' },
        { icon: 'fa-brands fa-wordpress', nombre: 'WordPress' },
        { icon: 'fa-brands fa-wix', nombre: 'Wix' }
    ],
    frameworks: [
        { icon: 'fa-solid fa-code', nombre: 'Ionic' },
        { icon: 'fa-brands fa-laravel', nombre: 'Laravel' },
        { icon: 'fa-brands fa-android', nombre: 'Android Studio' }
    ]
};
/*=============== Arreglo con los datos de Educación y Experiencia ===============*/
const curriculumData = {
    educacion: [
        {
            titulo: "Ingeniería en Sistemas Computacionales",
            institucion: "Universidad Politécnica de Tulancingo",
            fechas: "2014 - 2018",
            proyectos: [
                {
                    fecha: "Septiembre - Diciembre 2016 UPT",
                    rol: "Programador Front-Back-End",
                    descripcion: "✔ Programación Web con PHP, MySql, JavaScript, JQuery, Bootstrap, HTML5, CSS, para la creación de un Sistema Integral BI para una Clínica."
                },
                {
                    fecha: "Septiembre - Diciembre 2017 UPT",
                    rol: "Estancia II-Programador Android",
                    descripcion: "✔ Programación Android con java, HTML, cardview y recycler view, para la creación de una aplicación de tabla periódica."
                }
            ]
        },
        {
            titulo: "Técnico en Soporte y Mantenimiento de Equipo de Cómputo",
            institucion: "Colegio de Estudios Científicos y Tecnológicos del Estado de Hidalgo (CECYTEH)",
            fechas: "2010 - 2014",
            proyectos: [
                {
                    fecha: "Febrero - Agosto 2013 CECYTEH",
                    rol: "Servicio Social - Hospital General de Tulancingo",
                    descripcion: "✔ Mantenimiento preventivo y correctivo a los equipos de cómputo, instalación de programas y servicios de red del hospital."
                },
                {
                    fecha: "Septiembre - Diciembre 2013 CECYTEH",
                    rol: "Prácticas Profesionales - Centro comunitario de protección a la infancia",
                    descripcion: "✔ Mantenimiento preventivo y correctivo a los equipos de cómputo como instalación de programas."
                }
            ]
        }
    ],
    experiencia: [
        {
            puesto: "Desarrollador web Front-End",
            empresa: "ECohete Agencia de eCommerce",
            fechas: "Septiembre 2021 - Diciembre 2023",
            descripcion: [
                "✓ Desarrollador Shopify (código HTML, CSS, JAVASCRIPT, LIQUID).",
                "✓ Creación y seguimiento de tiendas Shopify con base a las necesidades del cliente.",
                "✓ Creación de secciones para Templates shopify.",
                "✓ Programador React (Implementación de mejoras en proyectos para B2B y B2C)."
            ]
        },
        {
            puesto: "Desarrollo de eCommerce",
            empresa: "LYFSA LABORATORIOS S.A. DE C.V. (Mi primer empleo)",
            fechas: "Mayo - Noviembre 2020",
            descripcion: [
                "Creación y diseño de e-commerce con WordPress, Elementor, Yoast SEO, AJAX Search for WooCommerce, Contact Form 7, Sticky Menu (¡or Anything!) on Scroll, WooCommerce, WooLentor, StoreCustomizer."
            ]
        },
        {
            puesto: "Auxiliar Administrativo y Programador web",
            empresa: "UTEC TULANCINGO (Jóvenes construyendo el futuro)",
            fechas: "Marzo 2019 - Marzo 2020",
            descripcion: [
                "✓ Atención al cliente.",
                "✓ Captura, Manejo y creación de base de datos en Excel.",
                "✓ Archivar y Organizar Documentos.",
                "✓ Desarrollo y administración de página web de seguimiento de egresados."
            ]
        }
    ]
};
/*=============== Arreglo con los datos de proyectos ===============*/
 const proyectos = [
    { nombre: "Forever For Me", imagen: "img/forever-for-me.jpg", url: "https://foreverforme.com/" },
    { nombre: "The Watch Cult", imagen: "img/the-watch-cult.jpg", url: "https://watchcult.com/" },
    { nombre: "Vitialife", imagen: "img/vitialife.jpg", url: "https://vitialife.com/" },
    { nombre: "Oftalmedia", imagen: "img/oftalmedia.jpg", url: "https://oftalmedia.com/" },
    { nombre: "Novanet", imagen: "img/novanet.jpg", url: "https://novanet.com.mx/" },
    { nombre: "Bixi Awotan", imagen: "img/bixiawotan.jpg", url: "https://bixiawotan.com/" },
    { nombre: "Bionatis", imagen: "img/bionatis.jpg", url: "https://bionatis.mx/" },
    { nombre: "Fulgorica", imagen: "img/fulgorica.jpg", url: "https://fulgorica.com/" },
    { nombre: "Tecnutritions", imagen: "img/tecnutritions.jpg", url: "https://tecnutritions.com/" },
    { nombre: "Havoc", imagen: "img/havoc.jpg", url: "https://havoc.mx/" },
    { nombre: "Steve Madden", imagen: "img/steve-madden.jpg", url: "https://stevemadden.com.mx/" },
    { nombre: "Fabercastell", imagen: "img/fabercastell.jpg", url: "https://tienda.faber-castell.com.mx/" }
];
/*=============== Arreglo con los enlaces de redes sociales ===============*/
const socialMediaLinks = [
    {
        href: "https://www.facebook.com/share/1GQ5Xh2EKd/",
        iconClass: "fa-brands fa-facebook-f",
        target: "_blank"
    },
    {
        href: "https://www.linkedin.com/in/jos%C3%A9-ra%C3%BAl-guti%C3%A9rrez-castro-111b21215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        iconClass: "fa-brands fa-linkedin-in",
        target: "_blank"
    },
    {
        href: "https://wa.me/525652454387?text=Hola%20estoy%20interesado%20en%20una%20página%20web%20o%20una%20tienda%20en%20linea",
        iconClass: "fa-brands fa-whatsapp",
        target: "_blank"
    }
];
/*=============== Arreglo con los enlaces de contacto ===============*/
const contactLinks = [
    {
        href: "tel:5652454387",
        iconClass: "ri-smartphone-line",
        text: "5652454387",
        target: "_blank"
    },
    {
        href: "mailto:joseraulgutierrezcastro95@gmail.com?Subject=Hola%20estoy%20interesado%20en%20una%20página%20web%20o%20una%20tienda%20en%20linea.",
        iconClass: "fa-regular fa-envelope",
        text: "joseraulgutierrezcastro95@gmail.com",
        target: "_blank"
    }
];

/*===============Función para generar el contenido del banner ===============*/
function generarBanner() {
    const contenedorBanner = document.getElementById('contenido-banner'); // Referencia al contenedor
    contenidoBanner.forEach(item => {
      if (item.tipo === "imagen") {
        // Crear la imagen
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        
        // Crear el contenedor de la imagen
        const contenedorImg = document.createElement('div');
        contenedorImg.classList.add('contenedor-img');
        contenedorImg.appendChild(img);
  
        // Agregar la imagen al contenedor principal
        contenedorBanner.appendChild(contenedorImg);
      } else if (item.tipo === "h1" || item.tipo === "h2") {
        // Crear los títulos h1 o h2
        const titulo = document.createElement(item.tipo);
        titulo.textContent = item.texto;
  
        // Agregar el título al contenedor principal
        contenedorBanner.appendChild(titulo);
      }
    });
  }  
/*=============== Función para generar los elementos HTML dinámicamente de sobre mi ===============*/
function renderizarSobreMi() {
    const sobreMiContainer = document.getElementById('sobre-mi');
    sobreMiContainer.innerHTML = `
        <h3>Sobre Mí</h3>
        <p><span>Hola, soy ${data.sobreMi.nombre}.</span> ${data.sobreMi.experiencia} ${data.sobreMi.habilidades}</p>
    `;
}
/*=============== Función para generar los elementos HTML dinámicamente de conocimiento ===============*/
function renderizarConocimientos() {
    const conocimientosContainer = document.getElementById('conocimientos');
    const contenedorIntereses = document.createElement('div');
    contenedorIntereses.classList.add('contenedor-intereses');

    data.conocimientos.forEach(conocimiento => {
        const div = document.createElement('div');
        div.classList.add('interes');
        div.innerHTML = `<i class="${conocimiento.icon}"></i><span>${conocimiento.nombre}</span>`;
        contenedorIntereses.appendChild(div);
    });

    conocimientosContainer.innerHTML = '<h3>Conocimientos</h3>';
    conocimientosContainer.appendChild(contenedorIntereses);
}
/*=============== Función para generar los elementos HTML dinámicamente de habilidades ===============*/
function renderizarSkills() {
    // Renderizar desarrollo
    const desarrolloContainer = document.getElementById('desarrollo');
    skills.desarrollo.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add('interes');
        div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.nombre}</span>`;
        desarrolloContainer.appendChild(div);
    });

    // Renderizar herramientas
    const herramientasContainer = document.getElementById('herramientas');
    skills.herramientas.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add('interes');
        div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.nombre}</span>`;
        herramientasContainer.appendChild(div);
    });

    // Renderizar plataformas
    const plataformasContainer = document.getElementById('plataformas');
    skills.plataformas.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add('interes');
        div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.nombre}</span>`;
        plataformasContainer.appendChild(div);
    });

    // Renderizar frameworks
    const frameworksContainer = document.getElementById('frameworks');
    skills.frameworks.forEach(skill => {
        const div = document.createElement('div');
        div.classList.add('interes');
        div.innerHTML = `<i class="${skill.icon}"></i><span>${skill.nombre}</span>`;
        frameworksContainer.appendChild(div);
    });
}
// Función para renderizar la sección de educación
function renderizarEducacion() {
    const educacionContainer = document.getElementById('educacion');
    
    curriculumData.educacion.forEach(edu => {
        const div = document.createElement('div');
        div.classList.add('item', 'izq');
        
        div.innerHTML = `
            <h4>${edu.titulo}</h4>
            <span class="casa">${edu.institucion}</span>
            <span class="fecha">${edu.fechas}</span>
            <h4>Proyectos:</h4>
        `;
        
        edu.proyectos.forEach(proyecto => {
            const proyectoDiv = document.createElement('div');
            proyectoDiv.innerHTML = `
                <b class="fecha-practica">◈ ${proyecto.fecha}</b>
                <span class="actividad">${proyecto.rol}</span>
                <p>${proyecto.descripcion}</p>
            `;
            div.appendChild(proyectoDiv);
        });

        // Añadir el conectori y circuloi
        const conectorDiv = document.createElement('div');
        conectorDiv.classList.add('conectori');
        conectorDiv.innerHTML = '<div class="circuloi"></div>';
        div.appendChild(conectorDiv);

        educacionContainer.appendChild(div);
    });
}

// Función para renderizar la sección de experiencia
function renderizarExperiencia() {
    const experienciaContainer = document.getElementById('experiencia');
    
    curriculumData.experiencia.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('item', 'der');
        
        div.innerHTML = `
            <h4>${exp.puesto}</h4>
            <span class="casa">${exp.empresa}</span>
            <span class="fecha">${exp.fechas}</span>
        `;
        
        exp.descripcion.forEach(descripcion => {
            const p = document.createElement('p');
            p.textContent = descripcion;
            div.appendChild(p);
        });

        // Añadir el conector y circulo
        const conectorDiv = document.createElement('div');
        conectorDiv.classList.add('conectord');
        conectorDiv.innerHTML = '<div class="circulod"></div>';
        div.appendChild(conectorDiv);

        experienciaContainer.appendChild(div);
    });
}

 // Función para generar los proyectos en HTML
 const galeria = document.getElementById("galeria");

 proyectos.forEach(proyecto => {
     const divProyecto = document.createElement("div");
     divProyecto.classList.add("proyecto");

     const flipCard = document.createElement("div");
     flipCard.classList.add("flip-card");

     const flipCardInner = document.createElement("div");
     flipCardInner.classList.add("flip-card-inner");

     const flipCardFront = document.createElement("div");
     flipCardFront.classList.add("flip-card-front");
     const img = document.createElement("img");
     img.src = proyecto.imagen;
     img.alt = proyecto.nombre;
     flipCardFront.appendChild(img);

     const flipCardBack = document.createElement("div");
     flipCardBack.classList.add("flip-card-back");
     const h3 = document.createElement("h3");
     h3.textContent = proyecto.nombre;
     const a = document.createElement("a");
     a.href = proyecto.url;
     a.target = "_blank";
     a.textContent = "Visitar Tienda";
     flipCardBack.appendChild(h3);
     flipCardBack.appendChild(a);

     flipCardInner.appendChild(flipCardFront);
     flipCardInner.appendChild(flipCardBack);
     flipCard.appendChild(flipCardInner);
     divProyecto.appendChild(flipCard);
     galeria.appendChild(divProyecto);
 });

  /*=============== Seleccionamos los contenedores en el HTML ===============*/
  const socialLinksContainer = document.querySelector('.redes');
  const contactLinksContainer = document.querySelector('.medios');
  /*=============== Generamos los enlaces de redes sociales ===============*/
  socialMediaLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = link.target;

      const icon = document.createElement('i');
      icon.classList.add(...link.iconClass.split(' ')); // Desglosamos las clases
      anchor.appendChild(icon);
  /*=============== Añadimos el enlace al contenedor de redes sociales ===============*/
      socialLinksContainer.appendChild(anchor);
  });
  /*=============== Generamos los enlaces de contacto ===============*/
  contactLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = link.target;

      const icon = document.createElement('i');
      icon.classList.add(...link.iconClass.split(' ')); // Desglosamos las clases
      anchor.appendChild(icon);
  /*=============== Añadimos el texto al enlace ===============*/
      anchor.appendChild(document.createTextNode(link.text));
  /*=============== Añadimos el enlace al contenedor de contacto ===============*/
      contactLinksContainer.appendChild(anchor);
  });
  /*=============== SHOW LOADER ===============*/
window.addEventListener("DOMContentLoaded", () => {
    showLoader();
  })
  
  window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
      },5000); // contador de tiempo del showloader
  })
  
  const loader = document.getElementById("loaderPagina");
  const showLoader = () => {
   loader.classList.add("show_loader");
  }
  const hideLoader = () => {
    loader.classList.remove("show_loader");
  }
 
 /*=============== SHOW MENU ===============*/
 const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')
 
 /* Menu show */
 if(navToggle){
    navToggle.addEventListener('click', () =>{
       navMenu.classList.add('show-menu')
    })
 }
 
 /* Menu hidden */
 if(navClose){
    navClose.addEventListener('click', () =>{
       navMenu.classList.remove('show-menu')
    })
 }
 
 /*=============== MODE DARK ===============*/
 
 const swith = document.querySelector(".switch");
 
 swith.addEventListener("click", e => {
   swith.classList.toggle("active");
   document.body.classList.toggle("active");
 })
 /*=============== FUNCIÓN PARA DESCARGAR CV ===============*/
 function downloadCV() {
    const link = document.createElement('a'); // Creamos un enlace dinámico
    link.href = 'docs/CV_JOSE RAUL GUTIERREZ CASTRO.pdf';  // Ruta del archivo a abrir
    link.target = '_blank';    // Abrir en una nueva pestaña
    link.style.display = 'none'; // Aseguramos que el enlace no se vea
    document.body.appendChild(link); // Añadimos el enlace al DOM
    link.click(); // Disparar el evento de clic para abrir el archivo en una nueva pestaña
    document.body.removeChild(link); // Removemos el enlace del DOM después de hacer clic
 } 
// Llamar a la función para generar el banner cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', generarBanner);
// Llamar las funciones para renderizar el contenido
renderizarSobreMi();
renderizarConocimientos();
// Llamar la función para renderizar los elementos
renderizarSkills();
// Llamar las funciones para renderizar los datos
renderizarEducacion();
renderizarExperiencia();

