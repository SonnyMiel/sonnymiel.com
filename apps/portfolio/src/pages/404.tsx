import { PageProps } from 'gatsby';
import React from 'react';

import { NotFoundPage } from '@sonnymiel/react/lazy';

const Error404Page: React.FC<PageProps> = () => (
  <NotFoundPage
    description={'This is a gatsby application created by Sonny Miel.'}
    lang={''}
    title={'portfolio'}
  />
);

export default Error404Page;
