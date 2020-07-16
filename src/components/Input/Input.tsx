import * as React from 'react';

export interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Input({ onChange, value }: Props) {
  return <input onChange={onChange} value={value} />;
}
