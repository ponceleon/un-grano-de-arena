import type { Translation } from './es';

export const en: Translation = {
  // Site metadata
  site: {
    title: "Un Grano de Arena - Together We Flourish",
    description: "Un Grano de Arena is a non-profit organization that accompanies people in vulnerable situations through their human flourishing process.",
  },

  // Navigation
  nav: {
    inicio: "Home",
    sobreNosotros: "About Us",
    nuestrosProgramas: "Our Programs",
    aliados: "Partners",
    nuestroEquipo: "Our Team",
    donar: "Make a Donation",
  },

  // Hero
  hero: {
    title: "Un Grano de Arena",
    subtitle: "Nobody Flourishes Alone",
    description: "Let's put a grain of sand together",
    ctaProgramas: "Discover Our Programs",
    ctaDonacion: "Make a Donation",
  },

  // Emergency
  emergency: {
    title: "Venezuela Emergency: Earthquake",
    subtitle: "Your help today is a roof, a warm meal, a helping hand",
    description: "Venezuela is going through an emergency that breaks our hearts. Families affected by the earthquake need urgent help: food, shelter, water, medical aid, and essential supplies. At Un Grano de Arena, we are mobilizing all our resources to bring direct assistance to those who need it most. We work with trusted partners on the ground to ensure every donation reaches where it's needed.",
    ctaDonar: "Donate Now",
  },

  // Donation Widget
  widget: {
    selectMethod: "Lo que puedas aportar ayuda, todo acto suma.", 
    paypal: "PayPal",
    zelle: "Zelle (Transfer)",
    paypalDescription: "Pay securely with your card or PayPal account",
    zelleDescription: "Scan the QR code or transfer directly",
    amount: "Amount",
    other: "Other",
    donateButton: "Donate Now",
    feeCovering: "I'd like to add 2.9% + $0.30 to cover transaction fees",
    zelleInstructions: "1. Open your Zelle app\n2. Scan the QR code\n3. Enter the amount\n4. Confirm the transfer",
  },

  // Why Donate
  whyDonate: {
    title: "Why Donate?",
    subtitle: "Your grain of sand today makes a difference",
    paragraph1: "Every donation, no matter the size, becomes direct aid for families who have lost everything. A hot meal, a water filter, temporary shelter, emergency medical care.",
    paragraph2: "Venezuela needs all of us. In times of crisis, solidarity is the bridge that connects us as humanity. It doesn't matter how much you can give; what matters is that you give.",
    oneHundred: "100% of funds raised for this emergency will go directly to helping families in Venezuela.",
    ctaDonar: "Make your donation now",
  },

  // Who We Are
  quienesSomos: {
    title: "Who We Are?",
    intro: "Un Grano de Arena is a non-profit organization that accompanies people in vulnerable situations through their human flourishing process.",
    parrafo1: "We firmly believe that each person has a unique potential waiting to be discovered. Often, that potential is not discovered due to lack of tools or resources, but because they don't believe in it enough.",
    creemos: "We believe in you.",
    parrafo2: "Our work focuses on creating spaces for encounter, learning, and growth, where each person can develop their capacities and contribute to the common good. Through educational programs, health care, promotion of equality, and healthy nutrition, we work day by day to build a more just and inclusive world.",
    odsTitle: "Guided by the SDGs",
    odsDescription: "We are guided by the 2030 Agenda and the 17 Sustainable Development Goals of the United Nations.",
    derechosTitle: "Human Rights",
    derechosDescription: "Our work is based on the Universal Declaration of Human Rights.",
  },

  // Vision and Mission
  visionMision: {
    title: "Our Vision and Mission",
    visionTitle: "Vision",
    visionDescription: "Our vision is in line with an inclusive world, where each person can develop in equality and dignity, where diversity is an added value, and where together we can learn to respect nature and Mother Earth.",
    visionNote: "We are guided by the 2030 Agenda and the 17 sustainable development goals, as well as the Universal Declaration of Human Rights.",
    misionTitle: "Mission",
    misionDescription: "Our mission is to be agents of change by promoting community empowerment, rescuing knowledge and potentialities, awakening a feeling of common responsibility for the dynamization of social change.",
    pilaresTitle: "Our Pillars",
    pilar1: "Cross-cutting educational programs",
    pilar2: "Oral health prevention",
    pilar3: "Promotion of gender equality",
    pilar4: "Healthy nutrition",
  },

  // Founder
  fundadora: {
    title: "Welcome to Un Grano de Arena",
    parrafo1: "We believe that great changes begin with small gestures, and that each person has something to contribute: a story, an idea, a grain of sand. If you made it here, it's because you also believe that change is possible. At Un Grano de Arena, we work to build more humane communities, where each person can flourish, united by cooperation and commitment.",
    parrafo2: "Today we welcome you to this network of grains that believe in the possibility of a more just, more equal, more humane world.",
    destacado1: "Your time, your energy, your point of view matter.",
    destacado2: "Join us. Peace is built with you.",
    pregunta1: "Do you want to be part of our volunteer program?",
    pregunta2: "Support our initiatives or propose a new idea?",
    llamado1: "Join today.",
    llamado2: "Your grain can make the difference.",
    ctaProgramas: "Discover Our Programs",
    ctaDonacion: "Add Your Grain of Sand",
  },

  // Programs
  programas: [
    {
      id: "granos-sobre-ruedas",
      title: "Grains on Wheels",
      subtitle: "Mobile Bibliobus - The Little Prince",
      description: "Reading is one of the most powerful tools to awaken imagination, empathy, and critical thinking in children. Our bibliobus The Little Prince brings stories, colors, and knowledge to the corners of Venezuela where they are most needed, creating encounters, awakening questions, and transforming the act of reading into a shared experience.",
      slug: "granos-sobre-ruedas",
      icon: "book",
      image: "/images/programas/bibliobús.jpg",
    },
    {
      id: "granos-de-sonrisas",
      title: "Grains of Smiles",
      subtitle: "A day for everyone to smile!",
      description: "Many people do not have access to preventive dental care. In partnership with the Perfect Smile dental office, we provide free dental services including dental cleanings, preventive evaluations, and oral hygiene counseling. Each smile recovered is a seed of dignity and well-being.",
      slug: "devolviendo-sonrisas",
      icon: "smile",
      image: "/images/programas/sonrisas.jpg",
    },
    {
      id: "granos-de-sabor",
      title: "Grains of Flavor",
      subtitle: "Because no one should go to bed hungry!",
      description: "Poverty is one of the main causes of hunger. Our project Come Conmigo provides food to homeless people and families facing extreme food insecurity. We deliver hot meals, arepas, and fruits in vulnerable communities, because the first step towards dignity begins with the stomach.",
      slug: "granos-de-sabor",
      icon: "utensils",
      image: "/images/programas/sabor.jpg",
    },
    {
      id: "granos-de-diversion",
      title: "Grains of Fun",
      subtitle: "A special day for you! Because you deserve it",
      description: "Recreation is not a luxury, it is an essential need for good emotional and mental health. Created to celebrate life, especially for children and the elderly in contexts of vulnerability, offering them a day full of joy, playful activities, music, food, and affection. A safe space where each person feels loved, seen, and valued.",
      slug: "celebrando-la-vida",
      icon: "party",
      image: "/images/programas/celebrando.jpg",
    },
    {
      id: "granos-de-encuentro",
      title: "Grains of Encounter",
      subtitle: "Accompanying those who build a future away from home",
      description: "A space of containment, community, and support for migrant families in the United States. Currently in Tampa (Florida) in partnership with Mission Santa María, and in development in the DMV area (Washington D.C., Maryland, and Virginia). We accompany families through food delivery sessions, guidance, community activities, and spiritual and emotional support.",
      slug: "un-grano-tampa",
      icon: "home",
      image: "/images/programas/tampa.jpg",
    },
  ],

  // Team
  equipo: {
    title: "Our Team",
    members: [
      {
        name: "Mareli Aguirre",
        role: "Venezuela Coordinator",
        image: "/images/team/mareli.png",
        bio: "",
      },
      {
        name: "Maritza Blanco",
        role: "Grains on Wheels Director",
        image: "/images/team/maritza.png",
        bio: "",
      },
      {
        name: "María Elena Hernández",
        role: "Grains of Flavor Director",
        image: "/images/team/maria_elena_hernandez.png",
        bio: "",
      },
      {
        name: "Nathalia Amortegui",
        role: "Tampa Coordinator",
        image: "/images/team/nathalia.png",
        bio: "",
      },
    ],
  },

  // Partners
  aliados: {
    title: "Our Partners",
    list: [
      {
        name: "CDEI",
        logo: "/images/aliados/cdei.jpg",
        description: "Liliana Malavé",
      },
      {
        name: "Arte Vita",
        logo: "/images/aliados/arte-vita.jpg",
        description: "Rosicler Ramirez",
      },
      {
        name: "Proyecto Niños de la Selva",
        logo: "/images/aliados/proyecto-ninos-selva.jpg",
        description: "Tony Velazquez",
      },
      {
        name: "Princesa Zumba",
        logo: "/images/aliados/logo-lucia.jpg",
        description: "Zumba Lucía",
      },
      {
        name: "Perfect Smile",
        logo: "/images/aliados/perfect-smile-2.jpg",
        description: "",
      },
    ],
  },

  // CTA Donation
  ctaDonacion: {
    title: "Support Our Programs",
    description: "Your donation allows us to continue and expand these programs to reach more people who need them.",
    boton: "🤝 Make a Donation Now",
    mensaje: "Each contribution makes a difference",
  },

  // Footer
  footer: {
    about: "Non-profit organization that accompanies people in vulnerable situations through their human flourishing process.",
    linksTitle: "Links",
    donacionTitle: "Support Our Work",
    donacionDescription: "Your donation allows us to continue accompanying people in vulnerable situations.",
    donarBoton: "Donate Now",
    sitioCompleto: "View full site",
    contactoTitle: "Contact",
    siguenos: "Follow Us",
    derechos: "All rights reserved.",
    mensaje: "Together we can build positive peace.",
  },
};

