import * as React from 'react';

export interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id?: string;
}

export default function Input({ id, onChange, value }: Props) {
  return <input id={id} onChange={onChange} value={value} />;
}
