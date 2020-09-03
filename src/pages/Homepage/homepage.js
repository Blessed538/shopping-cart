import React from 'react';
import './homepage.styles.scss';
import Directory from '../../component/Directory/Directory';
import Header from '../../component/Header/Header';

const Homepage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="homepage">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
