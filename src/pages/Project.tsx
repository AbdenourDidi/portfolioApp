import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  ProjectContent,
  Project as ProjectInterface,
} from "../api/models/Project";
import { getProjectBySlug } from "../api/getProjectBySlug";
import ProjectImage from "../components/ProjectImage";
import { useEffect, useState } from "react";
import ProjectVideo from "../components/ProjectVideo";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 600px) {
    align-items: center;
    text-align: center;
  }
`;

const TopContainer = styled.div``;

const ProjectsDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column; /* Empiler les sections sur mobile */
    align-items: flex-start;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 600px) {
    width: 100%; /* Occupe toute la largeur sur mobile */
    gap: 15px;
  }
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 600px) {
    width: 100%;
    text-align: justify;
  }
`;

const ImageProjets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  @media (max-width: 600px) {
    gap: 20px;
  }
`;

const TitleDesign = styled.hr`
  width: 500px;
  border: 1px solid black;
  margin-left: 0px;
  @media (max-width: 600px) {
    width: 200px;
    border: 1px solid black;
  }
`;

const Project = () => {
  const [project, setProject] = useState<ProjectInterface | undefined>(
    undefined
  );
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      const proj = getProjectBySlug(slug);
      if (proj) {
        setProject(proj);
      } else {
        navigate("/notfound", { replace: true });
      }
    }
  }, [slug]);
  return (
    <Page>
      <TopContainer>
        <h1>{project?.title}</h1>
        <TitleDesign />
        <ProjectsDescriptionContainer>
          <DetailsContainer>
            <RowContainer>
              <b>Catégorie</b>
              <p>{project?.category}</p>
            </RowContainer>
            <RowContainer>
              <b>Année</b>
              <p>{project?.year}</p>
            </RowContainer>
          </DetailsContainer>
          <DescriptionContainer>
            <p>{project?.description}</p>
            {project?.link && (
              <p>
                Découvrez l'application ici :{" "}
                <a
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project?.link}
                </a>
              </p>
            )}
          </DescriptionContainer>
        </ProjectsDescriptionContainer>
      </TopContainer>
      <ImageProjets>
        {project?.content.map((content: ProjectContent) => {
          if (content.images) {
            return (
              <ProjectImage title={content.title} images={content.images} />
            );
          }
          if (content.videos) {
            return (
              <ProjectVideo title={content.title} videos={content.videos} />
            );
          }
        })}
      </ImageProjets>
    </Page>
  );
};

export default Project;
