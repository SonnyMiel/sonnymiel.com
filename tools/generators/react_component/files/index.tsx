import React from 'react';

import styles from './index.module.scss';

// eslint-disable-next-line
export interface <%= classify(name) %>Props { }

const <%= classify(name)%> = (): React.FC<<%= classify(name) %>Props> => {
  
  return (
    <div>
      <%= classify(name)%> works !
    </div>
  );
};

export default <%= classify(name)%>;
