import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import ConnectionsComponent from "./ConnectionsComponent";
import EmailStatsComponent from "./EmailStatsComponent";
import EmailTemplatesComponent from "./EmailTemplatesComponent";

class ContentComponent extends Component {
  render() {
    return (
    <div>
             <Route path="/" exact           component={DashboardComponent} />
             <Route path="/connections/"     component={ConnectionsComponent} />
             <Route path="/email-templates/" component={EmailTemplatesComponent} />
             <Route path="/email-stats/"     component={EmailStatsComponent} />
     </div>
   );
}
}

export default ContentComponent;
