import Bento from '../components/Bento'
import styled from 'styled-components'
import Grid from '../components/Grid'
import GridItem from '../components/GridItem'
import PageContainer from '../components/PageContainer'

const Test = styled.div`
justify-content: center;
align-items: center;
display: flex;
`

const InnerTest = () => {
  return (
    <Test>
    </Test>
  );
}

const Home = () => {

  return (
    <PageContainer>
      <Grid>
        <GridItem column={1} row={1}>
          <Bento>test2</Bento>
        </GridItem>
        <GridItem column={2} row={1} colspan={2}>
          <Bento>test2</Bento>
        </GridItem>
        <GridItem column={1} row={0}>
          <Bento><Test>test</Test></Bento>
        </GridItem>
        <GridItem column={2} row={0}>
          <Bento><Test>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</Test></Bento>
        </GridItem>
        <GridItem column={3} row={0}>
          <Bento><Test>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</Test></Bento>
        </GridItem>
      </Grid>
    </PageContainer>
  )
}

export default Home