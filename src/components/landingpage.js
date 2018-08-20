import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component {
  render(){
    return(
      <div style={{width: '100%' , margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
              alt='avatar'
              className='avatar-img'
            />

            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Materialize | JavaScript | JQuery | AJAX | React</p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a href="/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
