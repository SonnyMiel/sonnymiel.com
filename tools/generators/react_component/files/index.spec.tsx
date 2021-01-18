import React from 'react';
import { render } from '@testing-library/react';

import <%= classify(name) %> from './index';

describe('<%= classify(name) %>', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<<%= classify(name) %> />);
    expect(baseElement).toBeTruthy();
  });
});
