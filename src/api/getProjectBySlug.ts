import { Project } from "./models/Project";

const projects: Project[] = [
  {
    id: 1,
    title: "FoodX",
    category: "developpement web",
    year: "2022",
    description:
      "Un site de recettes de cuisine qui aide à choisir quoi préparer pour le dîner en fonction des ingrédients disponibles. Il offre aussi la possibilité de créer et partager ses propres recettes, favorisant ainsi l'inspiration culinaire et l'échange entre passionnés de cuisine.",
    link: "",
    slug: "foodx",
    content: [
      {
        title: "Accueil",
        images: [require("../assets/FoodX Home.png")],
      },
      {
        title: "Login / Register",
        images: [
          require("../assets/FoodX Login.png"),
          require("../assets/FoodX Register.png"),
        ],
      },
      {
        title: "Profil",
        images: [require("../assets/FoodX profil.png")],
      },
      {
        title: "Recettes",
        images: [
          require("../assets/FoodX Add recipe.png"),
          require("../assets/FoodX Details recipe.png"),
        ],
      },
    ],
  },
  {
    id: 2,
    title: "QuickFire",
    category: "developpement Mobile",
    year: "2022",
    description:
      "Une application mobile similaire à Twitter qui permet aux utilisateurs de publier des messages courts, de suivre d'autres personnes, et d'interagir avec du contenu en temps réel. Les utilisateurs peuvent partager des pensées, des liens, des images ou des vidéos, tout en participant à des conversations publiques ou privées. La plateforme encourage l'engagement rapide et favorise la création de communautés autour de sujets d'intérêt commun.",
    link: "",
    slug: "quickfire",
    content: [
      {
        title: "Video Presentation",
        videos: [require("../assets/QuickFire Video.mp4")],
      },
    ],
  },
  {
    id: 3,
    title: "Doc & Vous",
    category: "developpement web",
    year: "2023",
    description:
      "J’ai conçu une application web pour un agenda médical destiné aux centres d'imagerie médicale. L'objectif était de créer un calendrier permettant aux patients et aux médecins de planifier leurs rendez-vous de manière plus efficace.",
    link: "",
    slug: "doc & vous",
    content: [
      {
        title: "Accueil",
        images: [require("../assets/Admin Home stage.png")],
      },
      {
        title: "Planning",
        images: [
          require("../assets/Admin planning event stage.png"),
          require("../assets/Admin detail event pop-up green stage.png"),
          require("../assets/Admin detail event pop-up red stage.png"),
        ],
      },
      {
        title: "Rendez-vous",
        images: [
          require("../assets/Patient prendre rendez-vous stage.png"),
          require("../assets/Quidam prendre rendez-vous stage.png"),
        ],
      },

      {
        title: "Historique",
        images: [
          require("../assets/Patient historique stage.png"),
          require("../assets/Admin historique stage.png"),
        ],
      },

      {
        title: "Administration",
        images: [require("../assets/Admin administration stage.png")],
      },
    ],
  },

  {
    id: 4,
    title: "Quiz app",
    category: "developpement web & mobile",
    year: "2024",
    description:
      "Mon application de quiz est une plateforme interactive conçue pour permettre aux utilisateurs d’évaluer leurs connaissances à travers des questions générées dynamiquement. Elle propose une large variété de thématiques, allant de la culture générale aux sciences, en passant par l’histoire, la technologie et bien d’autres domaines.",
    link: "https://quizapp-abdenourdidis-projects.vercel.app",
    slug: "quiz app",
    content: [
      {
        title: "Presentation",
        images: [require("../assets/Quiz App presentation.png")],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) => {
  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase()
  );
};
