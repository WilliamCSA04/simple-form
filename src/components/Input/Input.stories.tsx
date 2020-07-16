import * as React from 'react';
import Input from '.';

export default {
  title: 'Input',
  parameters: {
    info: { inline: true },
  },
};

export const Default = () => <Input value="X" onChange={(e) => e.preventDefault} />;
