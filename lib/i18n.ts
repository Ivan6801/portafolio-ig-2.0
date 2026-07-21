import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  es: {
    translation: {
      language: {
        current: "ES",
        switchTo: "Cambiar a ingles",
      },
      navigation: {
        openMenu: "Abrir menu",
        toggleTheme: "Cambiar tema",
        items: [
          { label: "Sobre Mi", href: "#about", type: "hash" },
          { label: "Experiencia", href: "#experience", type: "hash" },
          { label: "Proyectos", href: "#projects", type: "hash" },
          { label: "Certificados", href: "/certificados", type: "page" },
          { label: "Contacto", href: "#contact", type: "hash" },
        ],
      },
      hero: {
        role: "Full Stack Senior Developer",
        descriptionStart: "Construyo experiencias digitales que combinan",
        performance: "rendimiento",
        accessibility: "accesibilidad",
        and: "y",
        cleanCode: "codigo limpio",
        descriptionEnd: "7+ años transformando ideas en productos web y moviles.",
        ctaContact: "Trabajemos juntos",
        ctaProjects: "Ver proyectos",
        downloadCv: "Descargar CV",
        location: "Tijuana, Mexico",
        imageAlt: "Ivan Alexander Gonzalez - Full Stack Developer",
      },
      about: {
        eyebrow: "Sobre Mi",
        title: "Desarrollador con pasion por crear soluciones que importan",
        paragraphs: [
          "Soy un desarrollador Full Stack Senior con mas de 7 años de experiencia creando aplicaciones web y moviles. Mi trabajo se centra en la interseccion del diseño y la ingenieria, construyendo experiencias que no solo funcionan bien, sino que son accesibles para todos.",
          "Como persona sorda, tengo una perspectiva unica sobre la importancia de la accesibilidad digital. Esta experiencia me ha convertido en un defensor de crear productos inclusivos que funcionen para todos los usuarios, independientemente de sus capacidades.",
        ],
        techStart: "Actualmente trabajo con tecnologias modernas como",
        techAnd: "y",
        techEnd: "buscando las mejores practicas y patrones de arquitectura para entregar codigo limpio y mantenible.",
        highlights: [
          { title: "7+ Años", description: "Experiencia profesional" },
          { title: "50+ Proyectos", description: "Entregados con exito" },
          { title: "Accesibilidad", description: "WCAG 2.1 Compliant" },
          { title: "Performance", description: "Core Web Vitals" },
        ],
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Mi trayectoria profesional",
        at: "en",
        items: [
          {
            period: "DIC 2022 - Actualidad",
            title: "Senior Full Stack Developer",
            company: "Hospital Excel California",
            description: "Trabajando actual en Hospital Excel California, desarrollando y manteniendo un sistema de administración de pacientes construido con Django y Python, utilizando MySQL y PostgreSQL en Amazon Web Services. La herramienta era un sistema integral para la gestión de pacientes y construcción de sitios web Full-Stack, con componentes de PMO desarrollados en React.js y TypeScript. Como desarrollador Full-Stack, cuento con habilidades sólidas tanto en front-end como en back-end, lo que me permite crear aplicaciones completas y funcionales de manera eficiente. Tengo experiencia resolviendo problemas técnicos complejos y adaptándome a distintas tecnologías, incluyendo:",
          },
          {
            period: "MAR 2022 - NOV 2022",
            title: "Full Stack Developer Jenior",
            company: "G-Global industrial",
            description: "Trabajé en Industrial G-Global como Ingeniero de Software, especializándome en WMS y TMS y brindando soluciones eficientes para el desarrollo de proyectos. Me desempeñé en desarrollo Full-Stack a través de REST APIs, utilizando tecnologías como React.js, Redux, HTML, SCSS, MongoDB, Node.js, Sails.js, SQL, Formik yup y Postman, así como pruebas unitarias y de integración para garantizar la calidad del software. Entre mis responsabilidades destacan: Mantenimiento de sistemas existentes, dando soporte a usuarios, resolviendo errores (bugs) y atendiendo nuevos requerimientos. Mejora continua del sistema, optimizando procesos, limpiando código y aplicando buenas prácticas de programación para asegurar escalabilidad y eficiencia. Mi enfoque combina habilidades técnicas sólidas con la capacidad de mejorar y mantener sistemas complejos de manera organizada y profesional.",
          },
          {
            period: "FEB 2021 - JUL 2021",
            title: "Frontend Developer",
            company: "Grupo Guru",
            description: "Trabajé en Grupo Guru - Diseño de Páginas Web en Tijuana, B.C., realizando mis prácticas profesionales en Front-End durante 4 meses. Me especialicé en el desarrollo y diseño de sitios web utilizando CMS WordPress, adquiriendo experiencia en la creación de páginas funcionales y atractivas, adaptadas a las necesidades de los clientes.",
          },
        ],
      },
      projects: {
        eyebrow: "Proyectos",
        title: "Trabajo seleccionado",
        featured: "Destacado",
        previewAlt: "Vista previa",
        categories: ["Todos", "Frontend", "Backend", "Full Stack", "IA"],
        items: [
          { title: "ABC LSM", description: "Lengua de Señas Mexicana, LSM, educación, videos, accesibilidad." },
          { title: "My Care Hospital Excel", description: "Bienvenido a My Care en Tijuana. Turismo médico por Hospital Excel." },
          { title: "Shopi", description: "E-commerce o Tienda Online con React.js y Node.js con PostgreSQL Conecta API REST con bases de datos relacionales. Domina Sequelize, el ORM más popular en JavaScript. Trabaja consultas, relaciones y migraciones - FullStack" },
          { title: "Petgram", description: "Crea una aplicación para subir y compartir fotos de mascotas usando Webpack, GraphQL, React Hooks, React Router, SEO y PWAs." },
          { title: "React Native: Pokemon", description: "Aplicacion movil de banca con autenticacion biometrica, transferencias y historial de transacciones." },
          { title: "Coffee Shop", description: "Realice Django, la herramienta todo en uno para construcción de sitios web #1 en el ecosistema de Python y AWS" },
          { title: "El paciente administra", description: "Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket IO, MongoDB - FullStack" },
          { title: "Página web de matemáticas", description: "Practica todo lo que has aprendido de JavaScript para crear una página web con diferentes ejercicios básicos de matemáticas." },
          { title: "Cientifico JavaScript Vanilla", description: "Crea una aplicación web de página única y cárgala con información usando JavaScript Vanilla. Diseña una experiencia fluida para tus usuarios llamando a una API para mostrar la información y navegar entre los detalles de cada personaje." },
          { title: "LangChain (Python)", description: "LangChain es un framework diseñado para construir aplicaciones basadas en modelos de lenguaje (LLM) como Qwen, Llama, GPT y Mistral. Permite conectar modelos de inteligencia artificial con documentos, bases de datos, APIs y herramientas externas para crear asistentes inteligentes, chatbots y sistemas de preguntas y respuestas (RAG)." },
          { title: "WebAssembly con Blazor", description: "Desarrolla aplicaciones web modernas usando Blazor y WebAssembly. Aprende a crear interfaces de usuario interactivas y eficientes." },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Tecnologias y herramientas",
        description: "Mi stack tecnologico se ha construido a lo largo de 7 años de experiencia, manteniendome actualizado con las mejores practicas de la industria.",
        levels: {
          Expert: "Expert",
          Proficient: "Proficient",
          Familiar: "Familiar",
        },
      },
      contact: {
        eyebrow: "Contacto",
        title: "Trabajemos juntos",
        description: "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente, no dudes en contactarme.",
        email: "Email",
        locationLabel: "Ubicacion",
        location: "Tijuana, Baja California, Mexico",
        note: "Prefiero la comunicacion escrita debido a mi discapacidad auditiva. El email es mi canal preferido, pero tambien estoy disponible por mensaje directo en LinkedIn.",
        sentTitle: "Mensaje enviado",
        sentDescription: "Gracias por contactarme. Te respondere pronto.",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        message: "Mensaje",
        messagePlaceholder: "Cuentame sobre tu proyecto...",
        sending: "Enviando...",
        send: "Enviar mensaje",
        error: "Error al enviar el mensaje",
      },
      footer: {
        description: "Desarrollador Full Stack Senior. Construyendo experiencias digitales accesibles y de alto rendimiento.",
        navigation: "Navegacion",
        navLinks: [
          { label: "Sobre Mi", href: "#about" },
          { label: "Experiencia", href: "#experience" },
          { label: "Proyectos", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contacto", href: "#contact" },
        ],
        connect: "Conecta conmigo",
        rights: "Todos los derechos reservados.",
        version: "Version 3",
      },
      certificates: {
        learning: "Aprendizaje continuo",
        titleStart: "Mis",
        titleHighlight: "Certificaciones",
        description: "Certificados profesionales y rutas de aprendizaje en desarrollo web y movil.",
        career: "Rutas de Carrera",
        completed: "Cursos Completados",
        viewCredential: "Ver credencial",
        previewAlt: "Vista previa del certificado {{title}}",
        selectedPreviewAlt: "Vista previa del certificado",
        categories: {
          all: "Todos",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Full Stack",
          diseño: "Sistemas de Diseño",
          career: "Rutas de Carrera",
        },
      },
    },
  },
  en: {
    translation: {
      language: {
        current: "EN",
        switchTo: "Switch to Spanish",
      },
      navigation: {
        openMenu: "Open menu",
        toggleTheme: "Toggle theme",
        items: [
          { label: "About", href: "#about", type: "hash" },
          { label: "Experience", href: "#experience", type: "hash" },
          { label: "Projects", href: "#projects", type: "hash" },
          { label: "Certificates", href: "/certificados", type: "page" },
          { label: "Contact", href: "#contact", type: "hash" },
        ],
      },
      hero: {
        role: "Senior Full Stack Developer",
        descriptionStart: "I build digital experiences that combine",
        performance: "performance",
        accessibility: "accessibility",
        and: "and",
        cleanCode: "clean code",
        descriptionEnd: "7+ years turning ideas into web and mobile products.",
        ctaContact: "Let's work together",
        ctaProjects: "View projects",
        downloadCv: "Download CV",
        location: "Tijuana, Mexico",
        imageAlt: "Ivan Alexander Gonzalez - Full Stack Developer",
      },
      about: {
        eyebrow: "About",
        title: "Developer passionate about creating solutions that matter",
        paragraphs: [
          "I am a Senior Full Stack Developer with more than 7 years of experience building web and mobile applications. My work focuses on the intersection of design and engineering, building experiences that not only work well but are accessible to everyone.",
          "As a deaf person, I have a unique perspective on the importance of digital accessibility. This experience has made me an advocate for creating inclusive products that work for every user, regardless of ability.",
        ],
        techStart: "I currently work with modern technologies such as",
        techAnd: "and",
        techEnd: "while looking for best practices and architecture patterns to deliver clean, maintainable code.",
        highlights: [
          { title: "7+ Years", description: "Professional experience" },
          { title: "50+ Projects", description: "Delivered successfully" },
          { title: "Accessibility", description: "WCAG 2.1 compliant" },
          { title: "Performance", description: "Core Web Vitals" },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "My professional path",
        at: "at",
        items: [
          {
            period: "DEC 2022 - Present",
            title: "Senior Full Stack Developer",
            company: "Hospital Excel California",
            description: "Currently working at Hospital Excel California, developing and maintaining a patient administration system built with Django and Python, using MySQL and PostgreSQL on Amazon Web Services. The tool is a complete system for patient management and full-stack website building, with PMO components developed in React.js and TypeScript. As a full-stack developer, I have solid front-end and back-end skills that allow me to build complete and functional applications efficiently. I have experience solving complex technical problems and adapting to different technologies, including:",
          },
          {
            period: "MAR 2022 - NOV 2022",
            title: "Junior Full Stack Developer",
            company: "G-Global industrial",
            description: "I worked at Industrial G-Global as a Software Engineer, specializing in WMS and TMS and providing efficient solutions for project development. I worked across full-stack development through REST APIs using React.js, Redux, HTML, SCSS, MongoDB, Node.js, Sails.js, SQL, Formik yup and Postman, as well as unit and integration testing to ensure software quality. My responsibilities included maintaining existing systems, supporting users, fixing bugs and handling new requirements. I also improved systems continuously by optimizing processes, cleaning code and applying programming best practices for scalability and efficiency.",
          },
          {
            period: "FEB 2021 - JUL 2021",
            title: "Frontend Developer",
            company: "Grupo Guru",
            description: "I worked at Grupo Guru - Web Design in Tijuana, B.C., completing a four-month Front-End internship. I specialized in developing and designing websites with the WordPress CMS, gaining experience creating functional and attractive pages tailored to client needs.",
          },
        ],
      },
      projects: {
        eyebrow: "Projects",
        title: "Selected work",
        featured: "Featured",
        previewAlt: "Preview",
        categories: ["All", "Frontend", "Backend", "Full Stack", "AI"],
        items: [
          { title: "ABC LSM", description: "Mexican Sign Language, LSM, education, videos, accessibility." },
          { title: "My Care Hospital Excel", description: "Welcome to My Care in Tijuana. Medical tourism by Hospital Excel." },
          { title: "Shopi", description: "E-commerce or online store with React.js and Node.js with PostgreSQL. Connect a REST API with relational databases. Work with Sequelize, queries, relationships and migrations - FullStack." },
          { title: "Petgram", description: "Application for uploading and sharing pet photos using Webpack, GraphQL, React Hooks, React Router, SEO and PWAs." },
          { title: "React Native: Pokemon", description: "Mobile app with biometric authentication, transfers and transaction history." },
          { title: "Coffee Shop", description: "Django project using the all-in-one website building tool in the Python and AWS ecosystem." },
          { title: "Patient Administration", description: "MERN Stack project with TailwindCSS, Headless UI, Context API, Socket IO and MongoDB - FullStack." },
          { title: "Math website", description: "Practice JavaScript by creating a web page with different basic math exercises." },
          { title: "JavaScript Vanilla Scientist", description: "Single-page web application loaded with information using JavaScript Vanilla. It creates a fluid user experience by calling an API to show information and navigate character details." },
          { title: "LangChain (Python)", description: "LangChain is a framework designed to build applications based on language models (LLMs) like Qwen, Llama, GPT and Mistral. It connects AI models with documents, databases, APIs and external tools to create smart assistants, chatbots and RAG question-answering systems." },
          { title: "WebAssembly con Blazor", description: "Desarrolla aplicaciones web modernas usando Blazor y WebAssembly. Aprende a crear interfaces de usuario interactivas y eficientes." },
        ],
      },
      skills: {
        eyebrow: "Skills",
        title: "Technologies and tools",
        description: "My technology stack has been built over 7 years of experience, while staying current with industry best practices.",
        levels: {
          Expert: "Expert",
          Proficient: "Proficient",
          Familiar: "Familiar",
        },
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's work together",
        description: "I am open to new opportunities and collaborations. If you have a project in mind, feel free to contact me.",
        email: "Email",
        locationLabel: "Location",
        location: "Tijuana, Baja California, Mexico",
        note: "I prefer written communication because of my hearing disability. Email is my preferred channel, but I am also available through direct messages on LinkedIn.",
        sentTitle: "Message sent",
        sentDescription: "Thanks for contacting me. I will reply soon.",
        name: "Name",
        namePlaceholder: "Your name",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        sending: "Sending...",
        send: "Send message",
        error: "Error sending the message",
      },
      footer: {
        description: "Senior Full Stack Developer. Building accessible, high-performance digital experiences.",
        navigation: "Navigation",
        navLinks: [
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ],
        connect: "Connect with me",
        rights: "All rights reserved.",
        version: "Version 3",
      },
      certificates: {
        learning: "Continuous learning",
        titleStart: "My",
        titleHighlight: "Certifications",
        description: "Professional certificates and learning paths in web and mobile development.",
        career: "Career Paths",
        completed: "Completed Courses",
        viewCredential: "View credential",
        previewAlt: "Certificate preview {{title}}",
        selectedPreviewAlt: "Certificate preview",
        categories: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          fullstack: "Full Stack",
          diseño: "Design Systems",
          career: "Career Paths",
        },
      },
    },
  },
} as const

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "es"
  }

  return window.localStorage.getItem("language") || "es"
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  })
}

export default i18n
