import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 323px;
  padding-right: 323px;
`;

const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageContainer