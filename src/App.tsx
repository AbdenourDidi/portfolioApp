import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route
            path="/projects/1"
            element={
              <Projects
                titre="FoodX"
                category="developpement web"
                year="2022"
                description="Un site de recettes de cuisine qui aide à choisir quoi préparer pour
            le dîner en fonction des ingrédients disponibles. Il offre aussi la
            possibilité de créer et partager ses propres recettes, favorisant
            ainsi l'inspiration culinaire et l'échange entre passionnés de
            cuisine."
                img=""
              />
            }
          />
          <Route
            path="/projects/2"
            element={
              <Projects
                titre="QuickFire"
                category="developpement Mobile"
                year="2022"
                description="Une application mobile similaire à Twitter qui permet aux utilisateurs de publier des messages courts, de suivre d'autres personnes, et d'interagir avec du contenu en temps réel. Les utilisateurs peuvent partager des pensées, des liens, des images ou des vidéos, tout en participant à des conversations publiques ou privées. La plateforme encourage l'engagement rapide et favorise la création de communautés autour de sujets d'intérêt commun."
                img=""
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
