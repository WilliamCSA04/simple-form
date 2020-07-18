import * as React from 'react';
import Button from '.';
import { GlobalStyles } from '../../styles';

export default {
  title: 'Button',
  decorators: [
    (storyFn) => (
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    ),
  ],
};

export const Default = () => <Button onClick={(e) => e.preventDefault}>Press me</Button>;
