import React, { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useVisibility } from '@sonnymiel.com/react';

import './index.scss';
import { CONTACT } from '../../constant';
import { RootState } from '../../state';
import { actions } from '../../state/navbar';

const Contact = () => {
  const dispatch = useDispatch();

  const anchorStyle = useSelector(
    (state: RootState) => state.navbar.anchorStyle,
  );
  const [isVisible, contactRef] = useVisibility(-100);

  useEffect(() => {
    if (isVisible) {
      dispatch(actions.changeActive(CONTACT));
    }
  }, [isVisible, dispatch]);

  const sendEmail = (event: FormEvent): void => {
    event.preventDefault();
  };

  return (
    <section className="hasTextCentered contact" ref={contactRef}>
      <div>
        <div className="container" id="contact-container">
          <div className="columns">
            <div className="anchor" style={anchorStyle} id="contact" />
            <div className="column" id="heightMapperContact">
              <h1 id="contact-title">Contact_me</h1>
              <div>
                <form
                  onSubmit={sendEmail}
                  autoComplete="off"
                  method="POST"
                  className="contact-form"
                >
                  <div className="contact-line">
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="contact-line">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Contact_Subject"
                    />
                  </div>
                  <div className="contact-line">
                    <textarea
                      name="message"
                      rows={7}
                      placeholder="Contact_Content"
                    />
                  </div>
                  <div className="contact-line">
                    <input type="submit" id="contact-submit" name="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
