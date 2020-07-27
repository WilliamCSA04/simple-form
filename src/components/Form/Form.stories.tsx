import * as React from 'react';
import Form from '.';
import { GlobalStyles } from '../../styles';

export default {
  title: 'Form',
  decorators: [
    (storyFn: Function) => (
      <>
        <GlobalStyles />
        {storyFn()}
      </>
    ),
  ],
};

export const Default = () => (
  <Form onSubmit={(e) => e.preventDefault}>
    <input value={'test'} />
    <button>Press me</button>
  </Form>
);
