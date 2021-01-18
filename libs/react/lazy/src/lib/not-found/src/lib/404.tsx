import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './404.module.scss';

export interface NotFoundPageProps {
  description: string;
  lang: string;
  title: string;
}

const NotFoundPage = ({
  description,
  lang,
  title,
}: NotFoundPageProps): JSX.Element => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang={lang} />
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:700,900"
        rel="stylesheet"
      />
    </Helmet>
    <section className={styles.notFoundPage}>
      <div className={styles.notFoundPage_container}>
        <div className={styles.notFoundPage_404}>
          <h1>404</h1>
        </div>
        <h2>We are sorry, but the page you requested was not found</h2>
        <a href="/" className={styles.notFoundPage_back}>
          Go Home
        </a>
      </div>
    </section>
  </>
);

export default NotFoundPage;
export { NotFoundPage };
