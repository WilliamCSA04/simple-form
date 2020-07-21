import React from 'react';

export interface Props {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className: string
  id?: string;
}

export default function Form({children, onSubmit, className, id}) {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  )
}