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
        <Input onChange={() => setEmail(email)} value={email} />
        <Input type={'password'} onChange={() => setPassword(password)} value={password} />
        <Button>Submit</Button>
      </Form>
    </Div>
  );
}

export default App;
