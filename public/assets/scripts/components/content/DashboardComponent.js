import React, { Component } from 'react';


class DashboardComponent extends Component {
  render() {
    return (

     <div className="row gap-20 masonry pos-r">
       <div className="masonry-sizer col-md-6" />
       <div className="masonry-item  w-100">
         <div className="row gap-20">
           {/* #Toatl Visits ==================== */}
           <div className="col-md-3">
             <div className="layers bd bgc-white p-20">
               <div className="layer w-100 mB-10">
                 <h6 className="lh-1">Total Leads</h6>
               </div>
               <div className="layer w-100">
                 <div className="peers ai-sb fxw-nw">
                   <div className="peer peer-greed">
                     <span id="sparklinedash" />
                   </div>
                   <div className="peer">
                     <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* #Total Page Views ==================== */}
           <div className="col-md-3">
             <div className="layers bd bgc-white p-20">
               <div className="layer w-100 mB-10">
                 <h6 className="lh-1">Total Emails Opened</h6>
               </div>
               <div className="layer w-100">
                 <div className="peers ai-sb fxw-nw">
                   <div className="peer peer-greed">
                     <span id="sparklinedash2" />
                   </div>
                   <div className="peer">
                     <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* #Unique Visitors ==================== */}
           <div className="col-md-3">
             <div className="layers bd bgc-white p-20">
               <div className="layer w-100 mB-10">
                 <h6 className="lh-1">Unique Leads</h6>
               </div>
               <div className="layer w-100">
                 <div className="peers ai-sb fxw-nw">
                   <div className="peer peer-greed">
                     <span id="sparklinedash3" />
                   </div>
                   <div className="peer">
                     <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">~12%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* #Bounce Rate ==================== */}
           <div className="col-md-3">
             <div className="layers bd bgc-white p-20">
               <div className="layer w-100 mB-10">
                 <h6 className="lh-1">Email Open Rate</h6>
               </div>
               <div className="layer w-100">
                 <div className="peers ai-sb fxw-nw">
                   <div className="peer peer-greed">
                     <span id="sparklinedash4" />
                   </div>
                   <div className="peer">
                     <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33%</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="masonry-item row gap-20">
         {/* #Monthly Stats ==================== */}
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
       </div>
       <div className="masonry-item row gap-20">
         {/* #Sales Report ==================== */}
         <div className="bd bgc-white">
           <div className="layers">
             <div className="layer w-100 p-20">
               <h6 className="lh-1">Sales Report</h6>
             </div>
             <div className="layer w-100">
               <div className="bgc-light-blue-500 c-white p-20">
                 <div className="peers ai-c jc-sb gap-40">
                   <div className="peer peer-greed">
                     <h5>November 2017</h5>
                     <p className="mB-0">Sales Report</p>
                   </div>
                   <div className="peer">
                     <h3 className="text-right">$6,000</h3>
                   </div>
                 </div>
               </div>
               <div className="table-responsive p-20">
                 <table className="table">
                   <thead>
                     <tr>
                       <th className=" bdwT-0">Name</th>
                       <th className=" bdwT-0">Status</th>
                       <th className=" bdwT-0">Date</th>
                       <th className=" bdwT-0">Price</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td className="fw-600">Item #1 Name</td>
                       <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Unavailable</span> </td>
                       <td>Nov 18</td>
                       <td><span className="text-success">$12</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #2 Name</td>
                       <td><span className="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                       <td>Nov 19</td>
                       <td><span className="text-info">$34</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #3 Name</td>
                       <td><span className="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">New</span></td>
                       <td>Nov 20</td>
                       <td><span className="text-danger">-$45</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #4 Name</td>
                       <td><span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Unavailable</span></td>
                       <td>Nov 21</td>
                       <td><span className="text-success">$65</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #5 Name</td>
                       <td><span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Used</span></td>
                       <td>Nov 22</td>
                       <td><span className="text-success">$78</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #6 Name</td>
                       <td><span className="badge bgc-orange-50 c-orange-700 p-10 lh-0 tt-c badge-pill">Used</span> </td>
                       <td>Nov 23</td>
                       <td><span className="text-danger">-$88</span></td>
                     </tr>
                     <tr>
                       <td className="fw-600">Item #7 Name</td>
                       <td><span className="badge bgc-yellow-50 c-yellow-700 p-10 lh-0 tt-c badge-pill">Old</span></td>
                       <td>Nov 22</td>
                       <td><span className="text-success">$56</span></td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
           <div className="ta-c bdT w-100 p-20">
             <a href="#">Check all the sales</a>
           </div>
         </div>
       </div>
     </div>
   );
}
}

export default DashboardComponent;
