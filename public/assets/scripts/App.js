import React, { Component } from 'react';
import MenuDrawer from './components/menu-drawer';
import TopBar from './components/topbar';
import ContentComponent from './components/content/ContentComponent';

class App extends Component {
  render() {
    return (
      <div>
      <MenuDrawer />
      <div className="page-container">
      <TopBar />
      
      </div>
      </div>
    );
  }
}

export default App;
