import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Welcome
      <span role="img" aria-label="Welcome icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
