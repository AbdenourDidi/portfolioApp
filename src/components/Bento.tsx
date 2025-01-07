import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f3f3ff;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  min-width: 46%;

  @media (max-width: 768px) {
    min-width: 90%;
    min-height: auto;
  }
`;

const Bento = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Bento;
