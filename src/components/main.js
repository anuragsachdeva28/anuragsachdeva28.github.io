import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Project from './projects';
import {Switch, Route} from 'react-router-dom';

const Main = ()=>(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Project} />
    <Route path="/contact" component={Contact} />

  </Switch>
)

export default Main;
