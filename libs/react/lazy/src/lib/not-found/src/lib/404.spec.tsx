import React from 'react';

import { render } from '@testing-library/react';

import NotFound from './404';

describe('NotFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotFound />);
    expect(baseElement).toBeTruthy();
  });
});
