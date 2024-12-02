import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContent, Project as ProjectInterface } from "../api/models/Project";
import { getProjectBySlug } from "../api/getProjectBySlug";
import ProjectImage from "../components/ProjectImage";
import { useEffect, useState } from "react";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const TopContainer = styled.div`
  
`;

const ProjectsDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 50px;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageProjets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

const Project = () => {
  const [project, setProject] = useState<ProjectInterface | undefined>(undefined)
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      const proj = getProjectBySlug(slug)
      if (proj) {
        setProject(proj);
      } else {
        navigate("/notfound", { replace: true });
      }
    }
  }, [slug])
  return (
    <Page>
      <TopContainer>
        <h1>{project?.title}</h1>
        <hr
          style={{
            width: 500,
            border: `1px solid black`,
            marginLeft: 0,
          }}
        />
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
          </DescriptionContainer>
        </ProjectsDescriptionContainer>
      </TopContainer>
      <ImageProjets>
        {project?.content.map((content: ProjectContent) => {
          if (content.images) {
            return <ProjectImage title={content.title} images={content.images} />
          }
        })}
      </ImageProjets>
    </Page>
  )
}

export default Project
