import React from 'react';
import { render } from '@testing-library/react';
import Form from '.';

describe('<Form /> snapshot', () => {
  it('renders the component with default props', () => {
    const container = render(<Form id="Test" onSubmit={() => {}} />);
    expect(container.asFragment()).toMatchSnapshot();
  });
});
