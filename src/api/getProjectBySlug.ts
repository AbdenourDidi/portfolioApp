import { Project } from "./models/Project";


const projects: Project[] =
  [
    {
      id: 1,
      title: "FoodX",
      category: "developpement web",
      year: "2022",
      description: "Un site de recettes de cuisine qui aide à choisir quoi préparer pour le dîner en fonction des ingrédients disponibles. Il offre aussi la possibilité de créer et partager ses propres recettes, favorisant ainsi l'inspiration culinaire et l'échange entre passionnés de cuisine.",
      slug: "foodx",
      content: [
        {
          title: 'Accueil',
          images: [
            require("../assets/FoodX Home.png"),
          ]
        },
        {
          title: 'Login / Register',
          images: [
            require("../assets/FoodX Login.png"),
            require("../assets/FoodX Register.png"),
          ]
        },
        {
          title: 'Profil',
          images: [
            require("../assets/FoodX profil.png"),
          ]
        },
        {
          title: 'Recettes',
          images: [
            require("../assets/FoodX Add recipe.png"),
            require("../assets/FoodX Details recipe.png"),
          ]
        }
      ]
    },
    {
      id: 2,
      title: "",
      category: "",
      year: "",
      description: "",
      slug: "",
      content: [
        {
          title: 'Login / Register',
          images: [
            "../assets/FoodX Login.png",
            "../assets/FoodX Register.png",
          ]
        },
        {
          title: 'Profil',
          images: [
            "../assets/FoodX profil.png",
          ]
        },
        {
          title: 'Recettes',
          images: [
            "../assets/FoodX Add recipe.png",
          ]
        }
      ]
    },
  ];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug.toLowerCase() === slug.toLowerCase());
}
