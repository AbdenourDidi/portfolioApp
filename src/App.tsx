import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <PageContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/project/:slug" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageContainer>
  );
}

export default App;
