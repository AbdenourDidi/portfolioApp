import { PropsWithChildren } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background-color: #F4F3F3FF;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid #E5E7EB;
  overflow: hidden;
`;

const Bento = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Bento