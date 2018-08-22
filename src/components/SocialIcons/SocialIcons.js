import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/anuragsachdeva28" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/webcrawlerr" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anurag-sachdeva-589438121/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a rel="noopener noreferrer" href="mailto:anurag.sach28@gmail.com" style={ { color: colorPrimary } }><i className="fas fa-envelope"></i></a>
        
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;