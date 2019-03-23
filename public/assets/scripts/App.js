import React, { Component } from 'react';
import MenuDrawer from './components/menu-drawer';
import TopBar from './components/topbar';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <MenuDrawer />
        <TopBar />
        <Content />
      </div>
    );
  }
}

export default App;
