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
    description: "Una de las mejores herramientas para desarrollar la creatividad de los niños y niñas es la lectura. El poder que tiene un libro es indiscutible, pero no todos tienen acceso a ellos. Esta es la razón por la cual Un Grano de Arena comienza el proyecto del bibliobús, para poner esos libros en las manos de los niños y comenzar así un movimiento de bibliotecas móviles que recorran cada rincón de Venezuela.",
    slug: "granos-sobre-ruedas",
    icon: "book",
    image: "/images/programas/bibliobús.jpg",
  },
  {
    id: "devolviendo-sonrisas",
    title: "Devolviendo Sonrisas",
    subtitle: "Pequeños Granos de Sonrisas",
    description: "Las personas que no pueden visitar al dentista se pierden la atención dental preventiva que podría ayudar en gran medida a su salud bucal. El proyecto Devolviendo Sonrisas está enfocado en brindar atención dental a quienes no pueden pagar los servicios dentales. Nuestro programa está estrecha y orgullosamente asociado con el consultorio odontológico Perfect Smile.",
    slug: "devolviendo-sonrisas",
    icon: "smile",
    image: "/images/programas/sonrisas.jpg",
  },
  {
    id: "celebrando-la-vida",
    title: "Celebrando la Vida",
    subtitle: "Un día especial para ti",
    description: "Las actividades recreativas son necesarias para una buena salud física y mental. Celebrando la vida está diseñado para proporcionar un día divertido para niños y ancianos, proporcionando momentos llenos de música, juegos, comida y mucha diversión. Es un día especial dedicado solo a ellos, porque lo merecen.",
    slug: "celebrando-la-vida",
    icon: "party",
    image: "/images/programas/celebrando.jpg",
  },
  {
    id: "granos-de-sabor",
    title: "Granos de Sabor",
    subtitle: "Come Conmigo",
    description: "La pobreza es la principal razón por la cual los niños, niñas y adultos tienen hambre. Somos conscientes de que el problema del hambre es grave y, aunque la organización no tiene como objetivo principal la nutrición, la situación no puede ignorarse. El proyecto Come Conmigo nació como una pequeña contribución para aquellos que en situación de calle tienen poco o ningún acceso a la comida.",
    slug: "granos-de-sabor",
    icon: "utensils",
    image: "/images/programas/sabor.jpg",
  },
  {
    id: "un-grano-tampa",
    title: "Un Grano Tampa",
    subtitle: "Apoyo a Familias Migrantes",
    description: "Nuestros granitos se extienden a la ciudad de Tampa, Florida, para ser puente a las familias migrantes que viven en los campos de cosechas. Un Grano Tampa ofrece apoyo, recursos y acompañamiento a estas familias en su proceso de adaptación y crecimiento en una nueva tierra.",
    slug: "un-grano-tampa",
    icon: "home",
    image: "/images/programas/tampa.jpg",
  },
  {
    id: "actividades",
    title: "Actividades",
    subtitle: "Eventos y Talleres Comunitarios",
    description: "A través de diversos eventos, talleres y actividades comunitarias, Un Grano de Arena crea espacios de encuentro, aprendizaje y crecimiento. Estas actividades fortalecen los lazos comunitarios y promueven el desarrollo integral de las personas.",
    slug: "actividades",
    icon: "calendar",
    image: "/images/programas/actividades.jpg",
  },
];


