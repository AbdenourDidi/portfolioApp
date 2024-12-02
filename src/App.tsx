import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import PageContainer from "./components/PageContainer";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <PageContainer>
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageContainer>
  );
}

export default App;
