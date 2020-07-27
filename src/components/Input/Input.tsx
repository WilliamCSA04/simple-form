import * as React from 'react';

export interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  id?: string;
}

export default function Input({ id, onChange, value, type }: Props) {
  return <input id={id} onChange={onChange} value={value} />;
}
