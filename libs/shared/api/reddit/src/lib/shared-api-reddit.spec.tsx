import React from 'react';
import { render } from '@testing-library/react';

import SharedApiReddit from './shared-api-reddit';

describe('SharedApiReddit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedApiReddit />);
    expect(baseElement).toBeTruthy();
  });
});
