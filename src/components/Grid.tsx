import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); 2 colonnes de tailles égales */
  grid-template-columns: repeat(auto-fill);
  grid-template-rows: repeat(auto-fill);
  gap: 20px;
  padding: 10px;
`;

const Grid = ({ children }: PropsWithChildren) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;
