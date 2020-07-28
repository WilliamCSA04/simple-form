import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  id?: string;
}

const StyledInput = styled.input`
  padding: 2px 6px;
  border: none;
  border-radius: 3px;
`;

export default function Input({ id, onChange, value, type }: Props) {
  return <StyledInput id={id} onChange={onChange} value={value} type={type} />;
}
