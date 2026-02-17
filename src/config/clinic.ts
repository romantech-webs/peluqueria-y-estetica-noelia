export const clinic = {
  name: "Peluqueria y Estética Noelia Serrano",
  logo: "/images/logo.png",
  tagline: "Tu belleza en las mejores manos de Manzanares",
  description: "Peluquería y Estética Noelia Serrano es tu centro de referencia en Manzanares, Ciudad Real, donde la peluquería profesional se une al maquillaje experto. Con Noelia y Beatriz al frente, ofrecemos cortes, color, peinados y servicios de maquillaje con un trato cercano y resultados impecables. Valorados con 4.8 estrellas por nuestros clientes, que recorren kilómetros para disfrutar de nuestra atención personalizada.",
  colors: {
    primary: "#86a6aa",
    secondary: "#283233",
    accent: "#e6e8ed",
    neutral: "#f5f8f8"
  },
  phone: "664 71 28 89",
  whatsapp: "+34664712889",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de estética.",
  email: "",
  address: {
    street: "Carr. de la Solana, n16, 13200 Manzanares, Ciudad Real, España",
    city: "Manzanares",
    province: "Ciudad Real",
    postalCode: "13200",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=13582074680159330406&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Peluqueria%20y%20Est%C3%A9tica%20Noelia%20Serrano%20%4039.0015%2C-3.3671&z=16&output=embed",
  coordinates: {
    lat: 39.0015,
    lng: -3.3671
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "10:00–14:00, 16:00–20:00"
    },
    {
      days: "sábado",
      hours: "9:00–14:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.8,
    count: 19,
    url: "https://maps.google.com/?cid=13582074680159330406&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    featured: [
      {
        author: "ana muñoz de luna hidalgo",
        rating: 5,
        text: "Estoy encantada con esta peluquería, Noelia y Beatriz son agradables, simpáticas y muy buenas personas, están dispuestas siempre a todo, Noelia me encanta con que rapidez hace todo, llevo bastantes años haciendo 37km para ir y cada vez salgo más contenta, no Dan ganas de irse por lo a gusto que te encuentras con ellas.\nSi pudiera dar más estrellas las daba, la rapidez y manejo que tiene Noelia con las tijeras aún no se lo he visto a nadie.\nBea es una maquilladora estupenda y muy profesional, tiene mucha paciencia pero nunca pierde su sonrisa.\nHago los 37km muy a gusto.",
        date: "Hace 2 años"
      },
      {
        author: "robedo mora",
        rating: 5,
        text: "Son magisimas!! Tienen el tándem perfecto, peluquería y maquillaje!!\nMuy recomendable!!",
        date: "Hace 3 años"
      },
      {
        author: "Nuria C",
        rating: 5,
        text: "Me encantó! Las chicas son un encanto...Muy buen precio y servicio óptimo. ¡Volveré!",
        date: "Hace 4 años"
      },
      {
        author: "Inmaculada Lopez De La Manzanara Gonzalez Roman",
        rating: 5,
        text: "Chicas muy simpáticas y muy buen trato lo recomiendo",
        date: "Hace 7 años"
      }
    ]
  },
  services: [
    {
      id: "corte-peluqueria",
      name: "Corte y Peinado",
      description: "Cortes personalizados adaptados a tu estilo y tipo de cabello. Noelia destaca por su rapidez y manejo excepcional de las tijeras, creando looks modernos con técnica profesional. Desde cortes clásicos hasta las últimas tendencias, cada servicio incluye acabado y peinado perfecto.",
      benefits: [
        "Técnica profesional de corte rápida y precisa",
        "Asesoramiento personalizado según tu rostro",
        "Acabado impecable con productos de calidad"
      ],
      icon: "Sparkles"
    },
    {
      id: "coloracion-tinte",
      name: "Coloración y Tinte",
      description: "Servicios completos de color: desde mechas y balayage hasta cambios de look radicales. Utilizamos productos de alta calidad que respetan tu cabello mientras consiguen el tono perfecto. Color uniforme, brillante y duradero con técnicas actualizadas.",
      benefits: [
        "Coloración personalizada para cada cliente",
        "Productos profesionales que cuidan tu cabello",
        "Resultados naturales y luminosos"
      ],
      icon: "Flower2"
    },
    {
      id: "maquillaje-profesional",
      name: "Maquillaje Profesional",
      description: "Beatriz, nuestra maquilladora experta, crea looks perfectos para bodas, eventos y ocasiones especiales. Con paciencia, profesionalidad y una sonrisa constante, diseña maquillajes que realzan tu belleza natural. Desde maquillaje social hasta nupcial, cada trabajo es una obra de arte.",
      benefits: [
        "Maquilladora profesional con amplia experiencia",
        "Looks personalizados para cada ocasión",
        "Productos de alta gama de larga duración"
      ],
      icon: "Eye"
    },
    {
      id: "peinados-eventos",
      name: "Peinados para Eventos",
      description: "Peinados espectaculares para bodas, comuniones, graduaciones y eventos especiales. Creamos recogidos elegantes, ondas glamurosas y estilos personalizados que aguantan toda la jornada. Perfecto para complementar tu maquillaje de evento.",
      benefits: [
        "Peinados duraderos para todo el día",
        "Estilos adaptados a tu vestimenta y personalidad",
        "Servicio combinado con maquillaje disponible"
      ],
      icon: "Sparkles"
    },
    {
      id: "tratamientos-capilares",
      name: "Tratamientos Capilares",
      description: "Tratamientos intensivos para reparar, hidratar y nutrir tu cabello. Desde keratina hasta mascarillas profundas, devolvemos la vida a cabellos dañados, secos o maltratados. Productos premium que transforman tu melena.",
      benefits: [
        "Recuperación visible desde la primera sesión",
        "Cabello más suave, brillante y manejable",
        "Tratamientos adaptados a cada tipo de cabello"
      ],
      icon: "Heart"
    },
    {
      id: "depilacion",
      name: "Depilación",
      description: "Servicios de depilación con técnicas profesionales para una piel suave y cuidada. Realizamos depilación de cejas, labio, facial y corporal con productos de calidad que minimizan molestias. Resultados limpios y duraderos.",
      benefits: [
        "Técnicas profesionales y delicadas",
        "Productos que cuidan tu piel",
        "Resultados limpios y precisos"
      ],
      icon: "Zap"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con esmaltado perfecto. Desde manicuras clásicas hasta semipermanentes, tus manos y pies lucirán impecables. Tratamiento relajante que incluye limado, hidratación y esmaltado de larga duración.",
      benefits: [
        "Esmaltado duradero y sin imperfecciones",
        "Cuidado integral de uñas y cutículas",
        "Amplia gama de colores y acabados"
      ],
      icon: "Hand"
    },
    {
      id: "cejas-pestanas",
      name: "Diseño de Cejas y Pestañas",
      description: "Diseño y perfilado de cejas para enmarcar tu mirada. Incluye depilación, tinte y diseño personalizado según tu rostro. También ofrecemos tratamientos de pestañas para una mirada más intensa y definida.",
      benefits: [
        "Cejas perfectamente diseñadas y simétricas",
        "Tinte de larga duración",
        "Mirada más expresiva y definida"
      ],
      icon: "Eye"
    }
  ],
  process: [
    {
      step: 1,
      title: "Reserva tu Cita",
      description: "Llámanos al 664 71 28 89 o escríbenos por WhatsApp. Te atenderemos personalmente para encontrar el mejor momento según tu disponibilidad y el servicio que necesites."
    },
    {
      step: 2,
      title: "Asesoramiento Personalizado",
      description: "En tu visita, Noelia o Beatriz analizarán tus necesidades específicas. Te recomendaremos el mejor tratamiento, corte, color o maquillaje según tu estilo, tipo de cabello o piel, y la ocasión."
    },
    {
      step: 3,
      title: "Servicio Profesional",
      description: "Disfruta de un servicio rápido, profesional y en un ambiente agradable. Utilizamos técnicas avanzadas y productos de calidad premium mientras te sientes completamente a gusto con nuestro equipo."
    },
    {
      step: 4,
      title: "Resultado Impecable",
      description: "Sal luciendo espectacular y con ese cambio que buscabas. Te daremos consejos de mantenimiento y estaremos encantadas de verte en tu próxima visita. La satisfacción de nuestras clientas es nuestra mejor carta de presentación."
    }
  ],
  whyUs: [
    {
      title: "Valoradas con 4.8 Estrellas",
      description: "Nuestras 19 reseñas en Google hablan por sí solas. Las clientas destacan nuestra profesionalidad, rapidez y el ambiente agradable que creamos. Muchas recorren más de 37 kilómetros para visitarnos porque saben que obtendrán resultados excepcionales.",
      icon: "Sparkles"
    },
    {
      title: "Equipo Profesional Experto",
      description: "Noelia destaca por su técnica excepcional y rapidez con las tijeras, mientras que Beatriz es una maquilladora profesional con gran paciencia y resultados impecables. Juntas formamos el tándem perfecto de peluquería y maquillaje en Manzanares.",
      icon: "Heart"
    },
    {
      title: "Trato Cercano y Personalizado",
      description: "No somos solo un salón de belleza, creamos una experiencia donde te sientes como en casa. Nuestras clientas destacan que no dan ganas de irse por lo a gusto que se encuentran. Simpatía, profesionalidad y atención personalizada en cada visita.",
      icon: "Flower2"
    },
    {
      title: "Servicios Completos de Belleza",
      description: "Desde cortes y color hasta maquillaje profesional para eventos, ofrecemos una solución integral para tu imagen. Excelente relación calidad-precio con servicio óptimo que garantiza tu satisfacción en cada visita a nuestro centro en Manzanares.",
      icon: "Zap"
    }
  ],
  team: [
    {
      name: "Noelia",
      role: "Peluquera Profesional",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Peluqueria y Estética Noelia Serrano nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    },
    {
      name: "Beatriz",
      role: "Maquilladora Profesional",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionadas por la belleza y el cuidado personal. En Peluqueria y Estética Noelia Serrano nos dedicamos a realzar la belleza natural de cada clienta con tratamientos de calidad."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Peluqueria y Estética Noelia Serrano - Imagen 9"
    }
  ],
  faq: [
    {
      question: "¿Necesito cita previa para los servicios de peluquería?",
      answer: "Recomendamos pedir cita previa llamando al 664 71 28 89 o por WhatsApp para garantizar tu horario preferido. En Peluquería y Estética Noelia Serrano trabajamos con cita para ofrecerte una atención personalizada sin esperas. Si tienes un hueco libre, también puedes consultar disponibilidad inmediata."
    },
    {
      question: "¿Ofrecen servicios de maquillaje para bodas y eventos?",
      answer: "Sí, Beatriz es nuestra maquilladora profesional especializada en eventos especiales, bodas, comuniones y celebraciones. Realiza pruebas de maquillaje previas y trabaja con productos de alta gama para garantizar un look perfecto que dure todo el día. También podemos combinar maquillaje con peinado para un servicio completo."
    },
    {
      question: "¿Qué diferencia a Peluquería y Estética Noelia Serrano de otros salones?",
      answer: "Nuestro tándem perfecto de peluquería y maquillaje nos hace únicos en Manzanares. Noelia destaca por su rapidez y técnica excepcional con las tijeras, mientras que Beatriz es una maquilladora profesional con gran paciencia y resultados impecables. Nuestras clientas valoran especialmente el trato cercano, la profesionalidad y el ambiente agradable que creamos. Con 4.8 estrellas en Google, muchas recorren kilómetros para visitarnos."
    },
    {
      question: "¿Qué servicios de coloración ofrecen?",
      answer: "Ofrecemos todos los servicios de color: tintes completos, mechas, balayage, babylights, reflejos y correcciones de color. Utilizamos productos profesionales de alta calidad que respetan la salud de tu cabello mientras consiguen el tono deseado. En la consulta previa te asesoraremos sobre el mejor color según tu tono de piel y estilo personal."
    },
    {
      question: "¿Cuánto tiempo dura un servicio completo de peluquería?",
      answer: "Depende del servicio: un corte puede llevar entre 30-45 minutos, mientras que un color completo con corte puede necesitar 2-3 horas. Noelia es conocida por su rapidez sin sacrificar calidad. En el momento de reservar tu cita te indicaremos la duración estimada según el servicio que necesites."
    },
    {
      question: "¿Realizan tratamientos capilares de reparación?",
      answer: "Sí, ofrecemos diversos tratamientos capilares para reparar, hidratar y nutrir el cabello dañado. Desde tratamientos de keratina hasta mascarillas intensivas, seleccionamos el producto adecuado según el estado y necesidades de tu cabello. Los tratamientos se pueden combinar con tu servicio de corte o color."
    },
    {
      question: "¿Tienen servicios de manicura y pedicura?",
      answer: "Sí, en Peluquería y Estética Noelia Serrano ofrecemos servicios completos de manicura y pedicura, incluyendo esmaltado tradicional y semipermanente. Cuidamos tus manos y pies con productos de calidad y técnicas profesionales para resultados duraderos y perfectos."
    },
    {
      question: "¿Dónde están ubicados en Manzanares?",
      answer: "Estamos ubicados en Manzanares, Ciudad Real. Para conocer nuestra dirección exacta y cómo llegar, puedes llamarnos al 664 71 28 89. Nuestras clientas destacan que merece la pena el desplazamiento por la calidad de nuestros servicios y el trato personalizado que ofrecemos."
    }
  ],
  seo: {
    titleTemplate: "%s | Peluqueria y Estética Noelia Serrano",
    defaultTitle: "Peluquería y Estética Noelia Serrano | Manzanares",
    defaultDescription: "Peluquería y maquillaje profesional en Manzanares. Corte, color, peinados y maquillaje para eventos. Valorados 4.8★ en Google. ¡Pide cita: 664 71 28 89!",
    keywords: [
      "peluquería Manzanares",
      "Peluqueria y Estética Noelia Serrano",
      "maquillaje profesional Manzanares",
      "peluquería Ciudad Real",
      "corte de pelo Manzanares",
      "maquilladora Manzanares",
      "coloración cabello Manzanares",
      "peinados para bodas Manzanares",
      "manicura Manzanares",
      "tratamientos capilares Manzanares",
      "salón de belleza Manzanares",
      "estética Manzanares Ciudad Real"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Peluqueria y Estética Noelia Serrano",
    cif: "",
    registeredAddress: "Carr. de la Solana, n16, 13200 Manzanares, Ciudad Real, España, Manzanares, Ciudad Real"
  },
  heroHeadline: [
    "Tu Centro de",
    "Belleza",
    "en Manzanares"
  ],
  heroDescription: "En Peluquería y Estética Noelia Serrano combinamos la experiencia de una peluquera experta con la precisión de una maquilladora profesional. Ubicados en Manzanares, ofrecemos servicios de peluquería completos y maquillaje para cualquier ocasión, con rapidez, profesionalidad y ese toque personal que nos hace únicos.",
  specialty: "Peluquería y Maquillaje",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para lucir espectacular?",
  ctaDescription: "Reserva tu cita en Peluquería y Estética Noelia Serrano y descubre por qué nuestras clientas recorren kilómetros para visitarnos. Un equipo profesional te espera en Manzanares.",
  statsLabel: "Clientas",
  schemaType: "BeautySalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
