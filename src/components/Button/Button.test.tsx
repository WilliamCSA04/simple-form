import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('<Button /> snapshot', () => {
  it('renders the component with default props', () => {
    const container = render(<Button id="Test" onClick={() => {}} />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
