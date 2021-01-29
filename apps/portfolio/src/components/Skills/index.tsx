import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useVisibility } from '@sonnymiel/react/hooks';

import './index.scss';
import { SKILLS } from '../../constant';
import { RootState } from '../../state/index';
import { actions } from '../../state/navbar';
import softDeveloper from './softDeveloper.svg';
import teamwork from './teamwork.svg';
import webDeveloper from './webDeveloper.svg';

const Skills = (): JSX.Element => {
  const dispatch = useDispatch();
  const anchorStyle = useSelector(
    (state: RootState) => state.navbar.anchorStyle,
  );
  const [isVisibleTop, skillsRefTop] = useVisibility(0);
  const [isVisibleBottom, skillsRefBottom] = useVisibility(0);

  useEffect(() => {
    if (isVisibleTop || (isVisibleBottom && window.innerWidth <= 1366)) {
      dispatch(actions.changeActive(SKILLS));
    }
    // eslint-disable-next-line
  }, [isVisibleTop, isVisibleBottom]);

  return (
    <section className="hasTextCentered skills">
      <div className="anchor" style={anchorStyle} id="skills" />
      <div className="container isNarrow" id="heightMapperSkills">
        <div className="skills-box">
          <div>
            <div className="columns isCentered skills-columns">
              <div className="column skills-column">
                <figure className="skills-image">
                  <img
                    className="isSkillIcon"
                    src={webDeveloper}
                    alt="icon of developer tool"
                  />
                </figure>
                <h1 className="title">Skills_WebTitle</h1>
                <p className="skill-listTitle" ref={skillsRefTop}>
                  Skills_LanguagesSoft
                </p>
                <p>HTML, CSS, JS, TS, PHP </p>
                <p className="skill-listTitle">Frameworks:</p>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Node/Express</li>
                  <li>Jest</li>
                  <li>ELK</li>
                </ul>
              </div>
              <div className="column skills-column">
                <figure className="skills-image">
                  <img
                    className="isSkillIcon"
                    src={softDeveloper}
                    alt="icon of developer tool"
                  />
                </figure>
                <h1 className="title">Skills_SoftwareTitle</h1>
                <p className="skill-listTitle">Skills_LanguagesSoft</p>
                <p>C, C++, Java, Python, SQL/NoSQL </p>
                <p className="skill-listTitle">Dev Tools:</p>
                <ul>
                  <li>VSCode</li>
                  <li>Git/Github/Gitlab</li>
                  <li>Docker</li>
                  <li>AWS </li>
                  <li>UI Path</li>
                  <li>Google/StackOverflow</li>
                </ul>
              </div>
              <div className="column skills-column">
                <figure className="skills-image">
                  <img
                    className="isSkillIcon"
                    src={teamwork}
                    alt="icon of hands helping each other"
                  />
                </figure>
                <h1 className="title">Skills_Teamwork</h1>
                <p className="skill-listTitle" ref={skillsRefBottom}>
                  Skills_Languages
                </p>
                <p>Skills_LanguagesSpoken </p>
                <p className="skill-listTitle">Tools:</p>
                <ul>
                  <li>Git</li>
                  <li>Jira/Trello</li>
                  <li>Slack</li>
                  <li>Skype/Zoom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
