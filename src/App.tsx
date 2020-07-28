import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';

const Div = styled.div`
  height: 100vh;
  background-color: #19183a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
        <LabelInputWrapper>
          <label>Name:</label>
          <Input onChange={(e) => setEmail(e.target.value)} value={email} />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label>Password:</label>
          <Input type={'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
        </LabelInputWrapper>
        <Button>Submit</Button>
      </Form>
    </Div>
  );
}

export default App;
