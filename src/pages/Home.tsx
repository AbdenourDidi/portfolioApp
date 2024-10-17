import Bento from '../components/Bento'
import styled from 'styled-components'
import Grid from '../components/Grid'
import GridItem from '../components/GridItem'
import PageContainer from '../components/PageContainer'
import React from "react";
import Hero from "../components/Hero";

const Test = styled.div`
justify-content: center;
align-items: center;
display: flex;
`
const Width = styled.div`
width: 100%;
height: 100px;
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Home = () => {

  return (
    <PageContainer>
      <HeroContainer>
        <Hero />
      </HeroContainer>
      <Grid>
        <GridItem column={1} row={1}>
          <Bento>test2</Bento>
        </GridItem>
        <GridItem column={2} row={1} colspan={2}>
          <Bento><Width /></Bento>
        </GridItem>
        <GridItem column={1} row={0}>
          <Bento><Test>test</Test></Bento>
        </GridItem>
        <GridItem column={2} row={0}>
          <Bento><Test>test</Test></Bento>
        </GridItem>
        <GridItem column={3} row={0}>
          <Bento><Test>test</Test></Bento>
        </GridItem>
      </Grid>
    </PageContainer>
  )
};

export default Home;
