import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and
              everything web.
            </p>
            <p>
              When my dev senses kick-in I build presumably{' '}
              <span className="highlight"> awesome stuff</span>. I stay close to
              the community and try to keep tabs with the pace at which the web
              is evolving. I also like to{' '}
              <span className="highlight">blog</span> what I learn.
            </p>
            
            <p>
              HTML, CSS, Javascript, React, Node.js(basic), and Java 
              are the main tricks up my sleeve. I am also obsessed with making the web look pretty with CSS.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
