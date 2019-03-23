import React, { Component } from 'react';

class MenuDrawer extends Component {
  render() {
    return (
  <div className="sidebar">
   <div className="sidebar-inner">
     <ul className="sidebar-menu scrollable pos-r">
       <li className="nav-item mT-30 active">
         <a className="sidebar-link" href="index.html">
           <span className="icon-holder">
             <i className="c-blue-500 ti-home" />
           </span>
           <span className="title">Dashboard</span>
         </a>
       </li>
       <li className="nav-item">
         <a className="sidebar-link" href="connections.html">
           <span className="icon-holder">
             <i className="c-brown-500 ti-settings" />
           </span>
           <span className="title">Connections</span>
         </a>
       </li>
       <li className="nav-item">
         <a className="sidebar-link" href="emailtemplates.html">
           <span className="icon-holder">
             <i className="c-blue-500 ti-share" />
           </span>
           <span className="title">Email templates</span>
         </a>
       </li>
       <li className="nav-item">
         <a className="sidebar-link" href="emailstats.html">
           <span className="icon-holder">
             <i className="c-deep-orange-500 ti-stats-up" />
           </span>
           <span className="title">Email stats</span>
         </a>
       </li>
     </ul>
   </div>
 </div>
    );
  }
}

export default App;
