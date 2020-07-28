import React from 'react';
import styled from 'styled-components';

export interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 3px;
  background-color: #3d3b8e;
  padding: 1em;
  margin: auto;
  & > * {
    margin: 1em;
  }
`;

export default function Form({ children, onSubmit, className, id }: Props) {
  return (
    <StyledForm id={id} className={className} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}
