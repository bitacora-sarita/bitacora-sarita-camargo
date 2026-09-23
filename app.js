const ASSETS = {
  hero: "assets/hero-architecture.png",
  reading: "assets/reading-still-life.png",
  studio: "assets/studio-process.png",
  animals: "assets/animales-arquitectos.jpeg",
  readingOneCard: "assets/lectura-01-animales-arquitectos-4x3.png",
  readingOneHero: "assets/lectura-01-animales-arquitectos-16x9.png",
  readingTwoCard: "assets/lectura-02-genius-loci-4x3.png",
  readingTwoHero: "assets/lectura-02-genius-loci-16x9.png",
  exerciseStructure: "assets/ejercicio-01-estructura.jpeg",
  exerciseDrawing: "assets/ejercicio-01-dibujo.jpeg",
  exerciseModel: "assets/ejercicio-01-maqueta.jpeg",
  exerciseModelCard: "assets/ejercicio-01-maqueta-4x3.png",
  exerciseModelHero: "assets/ejercicio-01-maqueta-16x9.png",
  exerciseInterior: "assets/ejercicio-01-interior.jpeg",
  exerciseTwoCard: "assets/ejercicio-02-portada-4x3.png",
  exerciseTwoHero: "assets/ejercicio-02-portada-16x9.png",
  exerciseTwoRoute: "assets/ejercicio-02-recorrido.png",
  exerciseTwoRoomPerspective: "assets/ejercicio-02-habitacion-perspectiva.png",
  exerciseTwoRoomPlan: "assets/ejercicio-02-habitacion-planta.png"
};

// Edita este bloque durante el semestre: cada objeto crea automáticamente una tarjeta y su página individual.
const content = {
  lecturas: [
    {
      id: "lectura-01",
      number: "01",
      date: "02/09/2026",
      title: "Animales Arquitectos",
      author: "Juhani Pallasmaa",
      image: ASSETS.readingOneCard,
      heroImage: ASSETS.readingOneHero,
      excerpt: "Una mirada a las construcciones de los animales y a su capacidad para transformar paisajes y ecosistemas.",
      information: "El texto explica cómo las estructuras y actividades constructivas de los animales pueden transformar el paisaje y los ecosistemas. Se presentan ejemplos de hormigas, termitas, castores, conejos, ovejas y aves, mostrando que sus construcciones pueden alcanzar grandes escalas y generar cambios importantes en el ambiente.",
      ideas: [
        "Los animales pueden modificar significativamente su entorno mediante sus construcciones.",
        "Las construcciones animales pueden transformar el suelo, la vegetación y los ecosistemas.",
        "Algunas especies trabajan o interactúan con otras para producir grandes transformaciones en el paisaje.",
        "Las estructuras animales pueden generar nuevos hábitats y favorecer la biodiversidad.",
        "La arquitectura animal está relacionada con la adaptación al ambiente y con las necesidades de cada especie."
      ],
      concepts: [
        ["Adaptación ecológica", "capacidad de un organismo para responder y adaptarse a las condiciones de su entorno."],
        ["Transformación del paisaje", "cambios físicos producidos en un territorio por seres vivos."],
        ["Hábitat", "espacio que proporciona las condiciones necesarias para que una especie pueda vivir."],
        ["Biodiversidad", "variedad de especies que existen en un ecosistema."],
        ["Arquitectura animal", "construcción y modificación del entorno realizada por los animales para satisfacer sus necesidades."]
      ],
      interpretation: "Para mí, la lectura muestra que la arquitectura no es exclusiva de los seres humanos, ya que los animales también construyen y transforman su entorno de acuerdo con sus necesidades. Sus estructuras no solo sirven como refugio, sino que pueden modificar todo un ecosistema. Esto permite entender que la arquitectura puede surgir de la adaptación, la necesidad y la relación con el ambiente, algo que también puede servir como inspiración para la arquitectura humana."
    },
    {
      id: "lectura-02",
      number: "02",
      date: "16/09/2026",
      title: "Genius Loci — Paisaje, ambiente y arquitectura",
      author: "Christian Norberg-Schulz",
      image: ASSETS.readingTwoCard,
      heroImage: ASSETS.readingTwoHero,
      excerpt: "Una lectura sobre la identidad, el carácter y el espíritu del lugar, y sobre cómo la arquitectura puede responder a su entorno.",
      information: "Según la lectura, el lugar se define como una totalidad concreta que posee una identidad y un carácter propios. Desde este enfoque fenomenológico, la idea del habitar no consiste solamente en ocupar físicamente un espacio, sino en orientarse y sentirse identificado con el ambiente. Para ello, intervienen elementos fundamentales como el paisaje, el asentamiento, el espacio, el carácter, el exterior, el interior, la tierra, el cielo, los límites, la orientación, la identificación y el genius loci. En consecuencia, el propósito de la arquitectura y su relación con el entorno es responder al carácter del lugar y ayudar a convertir un sitio en un lugar significativo, descubriendo y expresando los significados que ya están presentes en el ambiente.",
      ideas: [
        "El lugar está formado por espacio y carácter.",
        "Cada lugar tiene una identidad particular.",
        "La arquitectura debe relacionarse con las características del lugar.",
        "Habitar significa poder orientarse y sentirse identificado con un lugar.",
        "El Genius Loci representa el espíritu o carácter propio de un lugar."
      ],
      concepts: [
        ["Lugar", "espacio con características e identidad."],
        ["Espacio", "organización física del lugar."],
        ["Carácter", "cualidades que hacen único a un lugar."],
        ["Genius Loci", "espíritu o identidad del lugar."],
        ["Habitar", "relacionarse y sentirse parte de un lugar."],
        ["Orientación", "saber dónde estamos y cómo ubicarnos."],
        ["Identificación", "sentir que pertenecemos a un lugar."]
      ],
      interpretation: "Para mí, la lectura muestra que la arquitectura no debe pensarse solamente como construir un espacio, sino como crear lugares que tengan identidad y que hagan que las personas se sientan parte de ellos."
    }
  ],
  reflexiones: [
    { id: "reflexion-guia", number: "01", date: "[Fecha]", title: "[Título de la reflexión]", image: ASSETS.reading, excerpt: "Guía: reemplaza este texto con un fragmento de tu reflexión personal cuando la hayas realizado." }
  ],
  ejercicios: [
    {
      id: "ejercicio-01",
      number: "01",
      date: "16/09/2026",
      title: "Animales Arquitectos",
      image: ASSETS.exerciseModelCard,
      heroImage: ASSETS.exerciseModelHero,
      excerpt: "Representación de un panal de abejas y de la organización de sus celdas.",
      objective: "Reconocer una estructura realizada por un animal.",
      structure: "Panal de abejas.",
      explanation: "Quise representar un panal de abejas, ya que es una estructura natural creada por estos animales a partir de módulos hexagonales que se repiten. Para hacer la forma del panal utilicé un botellón de agua como base y lo fui cubriendo y moldeando con papel kraft. Después agregué las formas hexagonales tanto por fuera como por dentro utilizando cartón, para representar las celdas que conforman el panal y su organización interna.",
      gallery: [
        [ASSETS.exerciseStructure, "Fotografía de la estructura natural"],
        [ASSETS.exerciseDrawing, "Dibujo del panal"],
        [ASSETS.exerciseModel, "Maqueta"],
        [ASSETS.exerciseInterior, "Interior de la maqueta"]
      ]
    },
    {
      id: "ejercicio-02",
      number: "02",
      date: "22/09/2026",
      title: "El espíritu del lugar",
      image: ASSETS.exerciseTwoCard,
      heroImage: ASSETS.exerciseTwoHero,
      excerpt: "Reflexión sobre el espíritu del lugar y su relación con la forma en que habitamos y comprendemos los espacios.",
      objective: "Realizar un manuscrito sobre la lectura donde se realice una reflexión personal sobre el espíritu del lugar y dibujar nuestra habitación y el recorrido desde la casa a la universidad.",
      manuscript: [
        "Para mí, el espíritu del lugar es aquello que hace que un espacio tenga una identidad propia y que lo diferencie de otros. Después de leer a Christian Norberg-Schulz, entendí que un lugar no es solamente un espacio físico, sino que también está relacionado con lo que transmite y con la forma en que las personas lo perciben. Cada lugar tiene características propias que se pueden reconocer en su ambiente, su paisaje, sus formas y sus elementos. Por eso, considero que conocer un lugar antes de intervenirlo es importante, porque la arquitectura debe tener en cuenta lo que ya existe.",
        "También entendí que el espíritu del lugar está muy relacionado con la manera en que las personas lo habitan. Un espacio puede ser bonito, pero si no permite que las personas se orienten, se identifiquen o se sientan cómodas, puede no llegar a convertirse en un verdadero lugar. Para mí, habitar significa crear una relación con el espacio y sentir que pertenecemos a él. Esto me hace pensar que los recuerdos y las experiencias también influyen en la forma en que percibimos un lugar. Por ejemplo, un espacio puede tener un significado especial para una persona debido a las experiencias que ha vivido allí.",
        "Como estudiante de arquitectura, esta lectura me hace pensar que diseñar no consiste solamente en crear una construcción, sino en entender el contexto donde esta se va a desarrollar. El espíritu del lugar puede servir como una guía para crear espacios que tengan sentido y que se relacionen con su entorno. Creo que una buena arquitectura debería respetar las características del lugar y, al mismo tiempo, aportar algo nuevo sin perder su identidad. Después de esta lectura, entiendo que la arquitectura también tiene la responsabilidad de crear lugares donde las personas puedan orientarse, identificarse y sentirse parte de ellos."
      ],
      gallery: [
        [ASSETS.exerciseTwoRoute, "Recorrido desde la casa hasta la universidad"],
        [ASSETS.exerciseTwoRoomPerspective, "Perspectiva de la habitación"],
        [ASSETS.exerciseTwoRoomPlan, "Planta de la habitación"]
      ]
    }
  ],
  trabajos: [
    { id: "trabajo-final-guia", number: "01", title: "[Nombre del trabajo final]", theme: "[Tema del proyecto]", image: ASSETS.studio }
  ]
};

const app = document.querySelector("#app");
const nav = document.querySelector("#main-nav");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
});

const arrow = `<span aria-hidden="true">→</span>`;
const placeholder = text => `<p class="placeholder">${text}</p>`;

function pageHead(number, title, intro) {
  return `<header class="page-head"><div><span class="index-no">${number}</span><h1 class="page-title">${title}</h1></div><p class="lead">${intro}</p></header>`;
}

function home() {
  return `<article class="page">
    <section class="home-hero">
      <div class="hero-kicker"><span class="eyebrow">Arquitectura · Bitácora de semestre</span><span class="eyebrow">Archivo en construcción</span></div>
      <div class="hero-copy"><h1 class="display">Teoría e historia<br>de la <em>arquitectura</em></h1><p class="subtitle">Bitácora académica</p></div>
      <div class="hero-image"><img src="${ASSETS.hero}" alt="Collage editorial de elementos arquitectónicos, planos y maqueta" /></div>
      <div class="hero-info"><span>Sarita Camargo Prado · Estudiante de Arquitectura</span><span>Universidad Tolima · Grupo 02</span><span>Semestre 1</span></div>
    </section>
    <section class="intro"><div><span class="eyebrow">Sobre esta bitácora</span></div><div><p class="lead">Este sitio reúne mi proceso durante la materia: las lecturas que acompañan cada tema, las reflexiones que nacen de ellas, los ejercicios realizados en clase y los trabajos que sintetizan lo aprendido durante el semestre.</p></div><aside>Un archivo vivo para observar cómo cambia mi manera de leer, pensar y hacer arquitectura.</aside><div></div></section>
    <section class="journey"><div class="journey-grid">
      ${[["01","Lecturas","Lo que leo","lecturas"],["02","Reflexiones","Lo que pienso","reflexiones"],["03","Ejercicios","Lo que hago","ejercicios"],["04","Trabajos finales","Lo que aprendo","trabajos"]].map(([n,t,p,r]) => `<a class="journey-card" href="#/${r}"><span class="index-no">${n}</span><div class="shape" aria-hidden="true"></div><div><h3>${t}</h3><p>${p}</p></div></a>`).join("")}
    </div></section>
  </article>`;
}

function readings() {
  return `<article class="page">${pageHead("01 / 05", "Lecturas", "Un archivo de los textos trabajados durante el semestre: sus ideas principales, conceptos y las interpretaciones que construyo a partir de ellos.")}
    <section class="archive"><div class="card-grid">${content.lecturas.map(item => `<article class="entry-card"><div class="entry-image"><img src="${item.image}" alt="Imagen editorial para ${item.title}" /></div><div class="entry-meta"><span>Lectura ${item.number}</span><span>${item.date}</span></div><h2>${item.title}</h2><span class="eyebrow">${item.author}</span><p>${item.excerpt}</p><a class="text-link" href="#/lecturas/${item.id}">Leer más →</a></article>`).join("")}</div></section>
  </article>`;
}

function reflections() {
  return `<article class="page">${pageHead("02 / 05", "Reflexiones", "Notas personales para registrar lo que pienso, lo que cuestiono y lo que voy comprendiendo sobre la arquitectura a través de la historia.")}
    <section class="reflection-list">${content.reflexiones.map(item => `<article class="reflection-row"><span class="index-no">${item.number}</span><div><span class="eyebrow">${item.date}</span><h2>${item.title}</h2></div><p>${item.excerpt}</p><a class="arrow-link" href="#/reflexiones/${item.id}" aria-label="Ver ${item.title}">${arrow}</a></article>`).join("")}</section>
  </article>`;
}

function exercises() {
  return `<article class="page">${pageHead("03 / 05", "Ejercicios de clase", "Una galería del hacer: exploraciones geométricas, composiciones y procesos desarrollados dentro del aula.")}
    <section class="exercise-gallery">${content.ejercicios.map(item => `<article class="exercise-card"><div class="exercise-visual" data-number="${item.number}"><img src="${item.image}" alt="Imagen del ejercicio ${item.title}" /></div><div class="exercise-copy"><div><span class="eyebrow">Ejercicio ${item.number} · ${item.date}</span><h2>${item.title}</h2><p>${item.excerpt}</p></div><a class="arrow-link" href="#/ejercicios/${item.id}">Ver ejercicio ${arrow}</a></div></article>`).join("")}</section>
  </article>`;
}

function finals() {
  return `<article class="page">${pageHead("04 / 05", "Trabajos finales", "Proyectos que reúnen el proceso completo: desde el planteamiento inicial y las decisiones de diseño hasta el resultado y la reflexión final.")}
    <section class="finals">${content.trabajos.map(item => `<article class="project-card"><div class="project-image"><img src="${item.image}" alt="Espacio visual para ${item.title}" /></div><div class="project-copy"><div><span class="index-no">Proyecto ${item.number}</span><h2>${item.title}</h2><p class="eyebrow">${item.theme}</p></div><div><p>Incluye una introducción breve al proyecto y deja que la página individual muestre el proceso con mayor profundidad.</p><a class="arrow-link" href="#/trabajos/${item.id}">Abrir proyecto ${arrow}</a></div></div></article>`).join("")}</section>
  </article>`;
}

function about() {
  return `<article class="page about"><div class="about-grid"><div class="portrait-placeholder"><strong>SC</strong><span>Espacio para la fotografía de Sarita</span></div><div class="about-copy"><span class="eyebrow">05 / 05 · Sobre mí</span><h1>Sarita Camargo Prado</h1><p class="lead">Soy estudiante de Arquitectura de primer semestre en la Universidad Tolima. Esta bitácora acompaña mi acercamiento a la teoría y la historia de la disciplina.</p>${placeholder("Espacio para que Sarita agregue una presentación personal sobre sus motivaciones para estudiar Arquitectura.")}<blockquote class="quote">“[Frase personal sobre mi manera de entender la arquitectura.]”</blockquote><div class="about-facts"><div><span>Programa</span>Arquitectura</div><div><span>Materia</span>Teoría e Historia de la Arquitectura</div><div><span>Universidad</span>Universidad Tolima</div><div><span>Semestre / Grupo</span>Semestre 1 · Grupo 02</div></div></div></div></article>`;
}

function detail(kind, id) {
  const collection = content[kind];
  const item = collection?.find(entry => entry.id === id);
  if (!item) return notFound();
  const backLabel = { lecturas: "Lecturas", reflexiones: "Reflexiones", ejercicios: "Ejercicios de clase", trabajos: "Trabajos finales" }[kind];
  const meta = item.author || item.theme || `Ejercicio ${item.number}`;
  let labels;
  let sections;

  if (kind === "lecturas" && item.information) {
    labels = ["Información de la lectura", "Ideas principales", "Conceptos importantes", "Mi interpretación"];
    sections = [
      `<p>${item.information}</p>`,
      `<ul class="detail-list">${item.ideas.map(idea => `<li>${idea}</li>`).join("")}</ul>`,
      `<dl class="concept-list">${item.concepts.map(([term, meaning]) => `<div><dt>${term}</dt><dd>${meaning}</dd></div>`).join("")}</dl>`,
      `<p>${item.interpretation}</p>`
    ];
  } else if (kind === "ejercicios" && item.objective) {
    labels = ["Objetivo"];
    sections = [`<p>${item.objective}</p>`];
    if (item.structure) {
      labels.push("Estructura elegida");
      sections.push(`<p>${item.structure}</p>`);
    }
    if (item.explanation) {
      labels.push("Explicación y proceso");
      sections.push(`<p>${item.explanation}</p>`);
    }
    if (item.manuscript) {
      labels.push("Manuscrito");
      sections.push(`<div class="detail-copy">${item.manuscript.map(paragraph => `<p>${paragraph}</p>`).join("")}</div>`);
    }
    if (item.gallery) {
      labels.push("Registro visual");
      sections.push(`<div class="process-grid process-grid--gallery">${item.gallery.map(([image, caption]) => `<figure><img src="${image}" alt="${caption}"/><figcaption>${caption}</figcaption></figure>`).join("")}</div>`);
    }
  } else {
    labels = kind === "reflexiones" ? ["Reflexión completa", "Lo que aprendí", "Preguntas abiertas"] : kind === "trabajos" ? ["Descripción", "Concepto", "Proceso", "Resultado final", "Reflexión"] : ["Objetivo", "Proceso", "Resultado", "Explicación", "Reflexión personal"];
    sections = labels.map(label => `${placeholder(`Completa este apartado con tu contenido de “${label.toLowerCase()}”.`) }${label === "Proceso" ? `<div class="process-grid"><figure><img src="${ASSETS.studio}" alt="Espacio para una imagen del proceso"/><figcaption>[Pie de foto del proceso]</figcaption></figure><figure><div class="empty-card">+ Agrega otra fotografía, dibujo o composición</div><figcaption>[Pie de foto]</figcaption></figure></div>` : ""}`);
  }

  return `<article class="page detail"><a class="back" href="#/${kind}">← Volver a ${backLabel}</a><header class="detail-head"><h1 class="detail-title">${item.title}</h1><div class="detail-meta"><span class="eyebrow">${meta}</span><p>${item.date || "[Fecha de entrega]"}</p></div></header><div class="detail-hero"><img src="${item.heroImage || item.image}" alt="Imagen principal de ${item.title}" /></div><div class="detail-body"><nav aria-label="Contenido de esta entrada">${labels.map((label, i) => `<a href="#section-${i}">${String(i+1).padStart(2,"0")} — ${label}</a>`).join("")}</nav><div>${labels.map((label, i) => `<section id="section-${i}" class="detail-section"><h2>${label}</h2>${sections[i]}</section>`).join("")}</div></div></article>`;
}

function notFound() {
  return `<article class="page about"><span class="eyebrow">404</span><h1 class="page-title">Esta página aún no existe.</h1><p class="lead">Vuelve al inicio para continuar recorriendo la bitácora.</p><a class="arrow-link" href="#/inicio">Ir al inicio ${arrow}</a></article>`;
}

function render() {
  const route = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const section = route[0] || "inicio";
  const id = route[1];
  const pages = { inicio: home, lecturas: readings, reflexiones: reflections, ejercicios: exercises, trabajos: finals, "sobre-mi": about };
  app.innerHTML = id ? detail(section, id) : (pages[section] || notFound)();
  document.querySelectorAll(".main-nav a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#/${section}`));
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

window.addEventListener("hashchange", render);
render();
