import styled from "styled-components";

const LevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 74px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const LevelContainerDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const SphereLevel = styled.figure`
  display: block;
  background: black;
  opacity: 50%;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 0;
`;

const LevelSkill = () => {
  return (
    <LevelContainer>
      <LevelContainerDetail>
        <b>Confirmé</b>
        <SphereLevel /> <SphereLevel />
        <SphereLevel />
      </LevelContainerDetail>
      <LevelContainerDetail>
        <b>Intermédiaire</b>
        <SphereLevel />
        <SphereLevel />
      </LevelContainerDetail>
      <LevelContainerDetail>
        <b>Notions</b>
        <SphereLevel />
      </LevelContainerDetail>
    </LevelContainer>
  );
};

export default LevelSkill;
