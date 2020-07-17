import * as React from 'react';

export interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  id?: string;
}

export default function Button({ id, onClick, children }: Props) {
  return (
    <button id={id} onClick={onClick}>
      {children}
    </button>
  );
}
