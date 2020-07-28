import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  id?: string;
}

const StyledButton = styled.button`
  padding: 0.5em;
  border-radius: 3px;
  border: 0;
  background-color: #b0e298;
  color: white;
  box-sizing: border-box;
`;

export default function Button({ id, onClick, children }: Props) {
  return (
    <StyledButton id={id} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
