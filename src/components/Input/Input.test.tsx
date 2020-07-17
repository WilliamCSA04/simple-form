import React from 'react';
import { render } from '@testing-library/react';
import Input from '.';

describe('<Input /> snapshot', () => {
  it('renders the component with default props', () => {
    const container = render(<Input id="Test" value="" onChange={() => {}} />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
