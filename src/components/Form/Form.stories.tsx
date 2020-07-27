import * as React from 'react';
import Form from '.';
import { GlobalStyles } from '../../styles';
import Input from '../Input';
import Button from '../Button';

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
    <Input value={'test'} onChange={() => {}} />
    <Button>Press me</Button>
  </Form>
);
