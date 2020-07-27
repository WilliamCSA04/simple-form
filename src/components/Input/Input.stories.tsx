import React, { useState } from 'react';
import Input from '.';

export default {
  title: 'Input',
  parameters: {
    info: { inline: true },
  },
};

export const Default = () => {
  const [text, setText] = useState('');
  return <Input value={text} onChange={(e) => setText(e.target.value)} />;
};
