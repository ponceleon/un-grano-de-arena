export interface Programa {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  slug: string;
  icon?: string;
}

export const programas: Programa[] = [
  {
    id: "granos-sobre-ruedas",
    title: "Granos sobre Ruedas",
    subtitle: "Bibliobús Móvil - El Principito",
    description: "La lectura es una de las herramientas más poderosas para despertar la imaginación, la empatía y el pensamiento crítico en los niños y niñas. Nuestro bibliobús El Principito lleva cuentos, colores y conocimientos a los rincones de Colombia donde más se necesitan, creando encuentros, despertando preguntas y transformando el acto de leer en una experiencia compartida.",
    slug: "granos-sobre-ruedas",
    icon: "book",
    image: "/images/programas/bibliobús.jpg",
  },
  {
    id: "granos-de-sonrisas",
    title: "Granos de Sonrisas",
    subtitle: "¡Un día para que todos sonrían!",
    description: "Muchas personas no tienen acceso a atención dental preventiva. En alianza con el consultorio odontológico Perfect Smile, brindamos servicios odontológicos gratuitos incluyendo limpiezas dentales, evaluaciones preventivas y consejería sobre higiene bucal. Cada sonrisa recuperada es una semilla de dignidad y bienestar.",
    slug: "devolviendo-sonrisas",
    icon: "smile",
    image: "/images/programas/sonrisas.jpg",
  },
  {
    id: "granos-de-sabor",
    title: "Granos de Sabor",
    subtitle: "¡Porque nadie debería irse a dormir con hambre!",
    description: "La pobreza es una de las principales causas del hambre. Nuestro proyecto Come Conmigo brinda alimentos a personas en situación de calle y familias que enfrentan inseguridad alimentaria extrema. Entregamos comidas calientes, arepas y frutas en comunidades vulnerables, porque el primer paso hacia la dignidad comienza por el estómago.",
    slug: "granos-de-sabor",
    icon: "utensils",
    image: "/images/programas/sabor.jpg",
  },
  {
    id: "granos-de-diversion",
    title: "Granos de Diversión",
    subtitle: "¡Un día especial para ti! Porque lo mereces",
    description: "La recreación no es un lujo, es una necesidad esencial para una buena salud emocional y mental. Creado para celebrar la vida, especialmente para niños, niñas y adultos mayores en contextos de vulnerabilidad, ofreciéndoles un día lleno de alegría, actividades lúdicas, música, comida y afecto. Un espacio seguro donde cada persona se sienta querida, vista y valorada.",
    slug: "celebrando-la-vida",
    icon: "party",
    image: "/images/programas/celebrando.jpg",
  },
  {
    id: "granos-de-encuentro",
    title: "Granos de Encuentro",
    subtitle: "Acompañando a quienes construyen futuro lejos de casa",
    description: "Un espacio de contención, comunidad y apoyo para familias migrantes en Estados Unidos. Actualmente en Tampa (Florida) en alianza con la Misión Santa María, y en desarrollo en el área DMV (Washington D.C., Maryland y Virginia). Acompañamos a familias a través de jornadas de entrega de alimentos, orientación, actividades comunitarias y acompañamiento espiritual y emocional.",
    slug: "un-grano-tampa",
    icon: "home",
    image: "/images/programas/tampa.jpg",
  },
];


