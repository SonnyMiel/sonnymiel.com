import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useVisibility } from '@sonnymiel.com/react';

import './index.scss';
import { WORK } from '../../constant';
import { RootState } from '../../state';
import { actions } from '../../state/navbar';
import works from './work.json';

const Work = (): JSX.Element => {
  const dispatch = useDispatch();
  const anchorStyle = useSelector(
    (state: RootState) => state.navbar.anchorStyle,
  );
  const [isVisible, workRef] = useVisibility(0);

  useEffect(() => {
    if (isVisible) {
      dispatch(actions.changeActive(WORK));
    }
  }, [isVisible, dispatch]);

  return (
    <section className="work">
      <div className="container" id="heightMapperWork">
        <div className="anchor" style={anchorStyle} id="work" />
        <div className="box">
          <h1 className="work-h1" ref={workRef}>
            Experiences
          </h1>
          <div>
            <div className="columns work-columns">
              {works.map((work: any) => (
                <div className="work-card" key={work.id}>
                  <div>
                    <h4 className="work-h4">{work.title}</h4>
                    <p className="work-p">{work.content}</p>
                    {work.link && (
                      <p className="work-p">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={work.link}
                        >
                          See Demo
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
