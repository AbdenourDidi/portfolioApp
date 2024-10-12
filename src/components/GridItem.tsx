import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface Props {
  column: number;
  row: number;
  colspan?: number;
  rowspan?: number;
}

const GridItemContainer = styled.div<{ column: number, row: number, colspan?: number, rowspan?: number }>`
  grid-column: ${({ column }) => column} / span ${({ colspan }) => colspan ?? 1};
  grid-row: ${({ row }) => row} / span ${({ rowspan }) => rowspan ?? 1};
`;

const GridItem = ({ children, column, row, rowspan, colspan }: PropsWithChildren<Props>) => {
  return (
    <GridItemContainer column={column} row={row} colspan={colspan} rowspan={rowspan}>{children}</GridItemContainer>
  )
}

export default GridItem