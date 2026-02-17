export const clinic = {
  name: "Peluqueria y Estética Noelia Serrano",
  logo: "/images/logo.png",
  tagline: "Tu belleza en las mejores manos de Manzanares",
  description: "Peluquería y Estética Noelia Serrano es tu centro de referencia en Manzanares, Ciudad Real, donde la peluquería profesional y el maquillaje se unen en perfecta armonía. Con Noelia y Beatriz, un equipo de profesionales valorado con 4.8 estrellas, ofrecemos servicios de peluquería, maquillaje profesional, tratamientos capilares y estética facial con un trato cercano que enamora. Clientes recorren kilómetros para disfrutar de nuestra rapidez, profesionalidad y ese ambiente donde no dan ganas de irse.",
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
      id: "peluqueria-profesional",
      name: "Peluquería Profesional",
      description: "Cortes, peinados y técnicas de peluquería realizadas con una rapidez y manejo de tijeras que te sorprenderá. Noelia domina cada técnica con precisión y agilidad, ofreciendo resultados impecables en tiempo récord. Desde cortes modernos hasta peinados para ocasiones especiales.",
      benefits: [
        "Rapidez excepcional sin perder calidad",
        "Técnicas profesionales de corte y estilismo",
        "Atención personalizada a cada tipo de cabello"
      ],
      icon: "Sparkles"
    },
    {
      id: "maquillaje-profesional",
      name: "Maquillaje Profesional",
      description: "Beatriz es nuestra experta maquilladora, con paciencia infinita y resultados espectaculares para cualquier ocasión. Desde maquillaje de novia hasta looks de fiesta, cada servicio se realiza con productos de alta calidad y técnicas profesionales. Su sonrisa y profesionalidad te harán sentir especial.",
      benefits: [
        "Maquilladora profesional con amplia experiencia",
        "Looks personalizados para cada ocasión",
        "Atención detallista y ambiente relajado"
      ],
      icon: "Flower2"
    },
    {
      id: "tratamientos-capilares",
      name: "Tratamientos Capilares",
      description: "Devuelve vida, brillo y salud a tu cabello con nuestros tratamientos especializados. Hidratación profunda, reparación de puntas, tratamientos de keratina y cuidados específicos para cada tipo de melena. Productos premium que transforman tu pelo desde la primera sesión.",
      benefits: [
        "Recuperación del brillo y suavidad natural",
        "Tratamientos adaptados a tu tipo de cabello",
        "Resultados visibles desde la primera aplicación"
      ],
      icon: "Sparkles"
    },
    {
      id: "coloracion-mechas",
      name: "Coloración y Mechas",
      description: "Transforma tu look con servicios de coloración, mechas, balayage y técnicas de color actuales. Trabajamos con tintes de alta calidad que respetan tu cabello mientras consiguen el tono perfecto. Asesoramiento personalizado para encontrar el color que mejor te favorece.",
      benefits: [
        "Colores vibrantes y duraderos",
        "Técnicas modernas de mechas y balayage",
        "Productos que cuidan la salud capilar"
      ],
      icon: "Zap"
    },
    {
      id: "tratamientos-faciales",
      name: "Tratamientos Faciales",
      description: "Cuidados personalizados para tu rostro que aportan luminosidad, hidratación y juventud. Limpieza facial profunda, tratamientos antiedad e hidratantes adaptados a las necesidades específicas de tu piel. Disfruta de un momento de relax mientras mejoras tu aspecto.",
      benefits: [
        "Piel más luminosa e hidratada",
        "Tratamientos adaptados a cada tipo de piel",
        "Resultados visibles y duraderos"
      ],
      icon: "Heart"
    },
    {
      id: "manicura-pedicura",
      name: "Manicura y Pedicura",
      description: "Cuidado completo de manos y pies con técnicas profesionales y esmaltes de larga duración. Manicura tradicional, semipermanente, diseños de uñas y tratamientos hidratantes. Tus manos y pies lucirán impecables durante semanas.",
      benefits: [
        "Esmaltes de alta calidad y larga duración",
        "Diseños personalizados y tendencias actuales",
        "Cuidado integral de uñas y cutículas"
      ],
      icon: "Hand"
    },
    {
      id: "depilacion",
      name: "Depilación",
      description: "Servicios de depilación profesional con técnicas que respetan tu piel. Depilación con cera de diferentes zonas corporales, realizada con productos de calidad que minimizan las molestias y garantizan resultados duraderos.",
      benefits: [
        "Piel suave durante semanas",
        "Técnicas profesionales menos invasivas",
        "Productos de calidad que cuidan tu piel"
      ],
      icon: "Flower2"
    },
    {
      id: "pestanas-cejas",
      name: "Pestañas y Cejas",
      description: "Realza tu mirada con nuestros servicios de diseño de cejas, tinte de pestañas y cejas, y tratamientos que aportan definición a tu rostro. Resultados naturales que destacan tu belleza sin necesidad de maquillaje diario.",
      benefits: [
        "Mirada más expresiva y definida",
        "Resultados naturales y favorecedores",
        "Ahorra tiempo en tu rutina de maquillaje"
      ],
      icon: "Eye"
    }
  ],
  process: [
    {
      step: 1,
      title: "Reserva tu Cita",
      description: "Llámanos al 664 71 28 89 o escríbenos por WhatsApp. Te atenderemos personalmente para encontrar el mejor momento para ti y conocer qué servicio necesitas, ya sea peluquería, maquillaje o estética."
    },
    {
      step: 2,
      title: "Asesoramiento Personalizado",
      description: "En tu visita, Noelia o Beatriz te asesorarán sobre el mejor tratamiento, corte, color o maquillaje según tus necesidades y estilo. Escuchamos lo que deseas y te proponemos opciones profesionales adaptadas a ti."
    },
    {
      step: 3,
      title: "Tratamiento con Maestría",
      description: "Disfruta de la rapidez y precisión de Noelia con las tijeras o de la paciencia y profesionalidad de Beatriz con el maquillaje. Trabajamos con productos premium y técnicas avanzadas en un ambiente donde te sentirás como en casa."
    },
    {
      step: 4,
      title: "Resultados que Enamoran",
      description: "Sal de nuestro centro radiante y satisfecha, con resultados que superarán tus expectativas. Nuestras clientas recorren kilómetros para volver, y tú entenderás por qué desde la primera visita."
    }
  ],
  whyUs: [
    {
      title: "Valoradas con 4.8 Estrellas",
      description: "Nuestras 19 reseñas en Google con 4.8 estrellas reflejan la satisfacción de clientas que recorren kilómetros para visitarnos. La rapidez de Noelia, la profesionalidad de Beatriz y nuestro ambiente acogedor nos convierten en referencia en Manzanares.",
      icon: "Sparkles"
    },
    {
      title: "Equipo Experto y Cercano",
      description: "Noelia destaca por su rapidez y manejo excepcional con las tijeras, mientras Beatriz es una maquilladora profesional con paciencia infinita. Juntas forman el tándem perfecto de peluquería y maquillaje, siempre con sonrisa y disposición para todo.",
      icon: "Heart"
    },
    {
      title: "Ambiente donde No Dan Ganas de Irse",
      description: "Nuestras clientas destacan lo a gusto que se encuentran con nosotras. Creamos un espacio acogedor donde te sentirás como en casa, con un trato simpático, agradable y personalizado que hace de cada visita una experiencia única.",
      icon: "Flower2"
    },
    {
      title: "Rapidez sin Perder Calidad",
      description: "La velocidad y precisión de Noelia con las tijeras es algo que nuestras clientas no han visto en ningún otro sitio. Ofrecemos servicios profesionales en tiempo récord sin renunciar a la excelencia en cada detalle, optimizando tu tiempo sin comprometer resultados.",
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
      question: "¿Dónde está ubicada Peluquería y Estética Noelia Serrano?",
      answer: "Estamos en Manzanares, Ciudad Real, un centro de referencia en la zona donde clientas recorren kilómetros para visitarnos. Nuestro equipo de Noelia y Beatriz te espera en un espacio acogedor donde te sentirás como en casa desde el primer momento."
    },
    {
      question: "¿Qué servicios ofrecéis en el centro?",
      answer: "Ofrecemos el tándem perfecto de peluquería y maquillaje profesional. Noelia es experta en cortes, coloración, mechas y tratamientos capilares con una rapidez excepcional. Beatriz es nuestra maquilladora profesional para bodas, eventos y ocasiones especiales. También realizamos tratamientos faciales, manicura, pedicura y servicios de estética completos."
    },
    {
      question: "¿Cómo puedo reservar una cita?",
      answer: "Puedes llamarnos directamente al 664 71 28 89 o escribirnos por WhatsApp. Te atenderemos personalmente para encontrar el mejor horario según tu disponibilidad y el servicio que necesites. Recomendamos reservar con antelación, especialmente para servicios de maquillaje y ocasiones especiales."
    },
    {
      question: "¿Cuánto tiempo dura un servicio de peluquería?",
      answer: "Una de nuestras características más valoradas es la rapidez de Noelia sin perder calidad. Un corte puede durar entre 30-45 minutos, mientras que servicios de coloración o mechas requieren entre 1,5 y 3 horas según la técnica. En tu reserva te informaremos del tiempo estimado para tu servicio específico."
    },
    {
      question: "¿Realizáis maquillaje para bodas y eventos?",
      answer: "Sí, Beatriz es nuestra maquilladora profesional especializada en novias y eventos especiales. Trabaja con paciencia, profesionalidad y productos de alta calidad para conseguir el look perfecto para tu día especial. Ofrecemos pruebas previas para asegurar que el resultado sea exactamente lo que deseas."
    },
    {
      question: "¿Qué opinan las clientas de Peluquería y Estética Noelia Serrano?",
      answer: "Tenemos una valoración de 4.8 estrellas sobre 5 en Google con 19 reseñas. Nuestras clientas destacan la rapidez y manejo excepcional de Noelia con las tijeras, la profesionalidad y sonrisa de Beatriz en maquillaje, el ambiente acogedor y el trato cercano. Muchas recorren kilómetros para visitarnos y repiten encantadas."
    },
    {
      question: "¿Qué productos utilizáis en los tratamientos?",
      answer: "Trabajamos exclusivamente con productos profesionales de alta calidad tanto en peluquería como en estética y maquillaje. Utilizamos tintes que respetan el cabello, cosméticos de primeras marcas y productos específicos para cada tipo de piel y cabello, garantizando resultados óptimos y duraderos."
    },
    {
      question: "¿Ofrecéis buenos precios?",
      answer: "Nuestras clientas destacan en sus reseñas la excelente relación calidad-precio de nuestros servicios. En Peluquería y Estética Noelia Serrano encontrarás tarifas competitivas sin renunciar a la profesionalidad, productos premium y ese trato personalizado que nos caracteriza. Consulta precios específicos al reservar tu cita."
    }
  ],
  seo: {
    titleTemplate: "%s | Peluqueria y Estética Noelia Serrano",
    defaultTitle: "Peluquería y Estética Noelia Serrano | Manzanares",
    defaultDescription: "Peluquería y maquillaje profesional en Manzanares. Equipo experto valorado 4.8★. Cortes, color, tratamientos y maquillaje para eventos. ☎️ 664 71 28 89",
    keywords: [
      "peluquería Manzanares",
      "maquillaje profesional Manzanares",
      "Peluqueria y Estética Noelia Serrano",
      "peluquería Ciudad Real",
      "maquilladora Manzanares",
      "tratamientos capilares Manzanares",
      "coloración y mechas Manzanares",
      "maquillaje novias Manzanares",
      "estética Manzanares",
      "salón belleza Manzanares",
      "manicura pedicura Manzanares",
      "peluquería profesional Ciudad Real"
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
  heroDescription: "En Peluquería y Estética Noelia Serrano combinamos la excelencia en peluquería con servicios de maquillaje profesional y estética. Ubicados en Manzanares, nuestro equipo de expertas te ofrece tratamientos personalizados con la rapidez y precisión que nos caracteriza, en un ambiente donde te sentirás como en casa.",
  specialty: "Peluquería y Maquillaje",
  ctaLabel: "Realza tu Belleza",
  ctaHeadline: "¿Lista para transformar tu look con profesionales de confianza?",
  ctaDescription: "Reserva tu cita en Peluquería y Estética Noelia Serrano y descubre por qué nuestras clientas recorren kilómetros para visitarnos. Te esperamos con una sonrisa y la mejor atención.",
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
