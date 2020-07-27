import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';

const Div = styled.div``;

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Submitted');
        }}
      >
        <Input onChange={(e) => setEmail(e.target.value)} value={email} />
        <Input type={'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
        <Button>Submit</Button>
      </Form>
    </Div>
  );
}

export default App;
