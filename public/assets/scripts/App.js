import React, { Component } from 'react';
import MenuDrawer from './components/menu-drawer';
import TopBar from './components/topbar';
import ContentComponent from './components/content/ContentComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <MenuDrawer />
      <div className="page-container">
      <TopBar />
      <ContentComponent />
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
