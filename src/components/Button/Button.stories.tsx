import * as React from 'react';
import Button from '.';

export default {
  title: 'Button',
  parameters: {
    info: { inline: true },
  },
};

export const Default = () => <Button onClick={(e) => e.preventDefault}>Press me</Button>;
