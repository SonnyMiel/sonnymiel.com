import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useVisibility } from '@sonnymiel.com/react';

import './index.scss';
import { HOME } from '../../constant';
import { actions } from '../../state/navbar';
import home from './hero.svg';

const Home = (): JSX.Element => {
  const dispatch = useDispatch();

  const [isVisible, homeRef] = useVisibility(0);

  useEffect(() => {
    if (isVisible) {
      dispatch(actions.changeActive(HOME));
    }
  }, [isVisible, dispatch]);

  return (
    <section id="home" className="hasTextCentered home">
      <div className="home-body">
        <div className="container" id="heightMapperHome">
          <div className="columns isCentered">
            <div className="column">
              <div className="home-description" ref={homeRef}>
                <h1>Home Title</h1>
                <h2>
                  I <span>code simple</span> things, Stack Overflow{' '}
                  <span>makes it better</span>.
                </h2>
              </div>
              <div className="home-image">
                <img src={home} alt="Applications on multiple devices" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
