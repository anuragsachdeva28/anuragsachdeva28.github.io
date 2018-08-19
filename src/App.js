import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main';

export default class App extends Component<{}> {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header title="MY PORTFOLIO" scroll>
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact Me</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact Me</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>

    );
  }
}