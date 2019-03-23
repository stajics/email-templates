import React, { Component } from 'react';


class DashboardComponent extends Component {
  render() {
    return (

          <div>
            <div className="layers">
              <div className="layer w-100 pX-20 pT-20">
                <h6 className="lh-1">Monthly Stats</h6>
              </div>
              <div className="layer w-100 p-20">
                <canvas id="line-chart" height={220} />
              </div>
              <div className="layer bdT p-20 w-100">
                <div className="peers ai-c jc-c gapX-20">
                  <div className="peer">
                    <span className="fsz-def fw-600 mR-10 c-grey-800">10% <i className="fa fa-level-up c-green-500" /></span>
                    <small className="c-grey-500 fw-600">APPL</small>
                  </div>
                  <div className="peer fw-600">
                    <span className="fsz-def fw-600 mR-10 c-grey-800">2% <i className="fa fa-level-down c-red-500" /></span>
                    <small className="c-grey-500 fw-600">Average</small>
                  </div>
                  <div className="peer fw-600">
                    <span className="fsz-def fw-600 mR-10 c-grey-800">15% <i className="fa fa-level-up c-green-500" /></span>
                    <small className="c-grey-500 fw-600">Sales</small>
                  </div>
                  <div className="peer fw-600">
                    <span className="fsz-def fw-600 mR-10 c-grey-800">8% <i className="fa fa-level-down c-red-500" /></span>
                    <small className="c-grey-500 fw-600">Profit</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}
}

export default DashboardComponent;
