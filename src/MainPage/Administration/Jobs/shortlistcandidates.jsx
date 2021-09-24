/**
 * Signin Firebase
 */

 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import {  Avatar_01 ,Avatar_02,Avatar_03 } from "../../../Entryfile/imagepath"

 import { Table } from 'antd';
 import 'antd/dist/antd.css';
 import {itemRender,onShowSizeChange} from "../../paginationfunction"
 import "../../antdstyle.css"
 
 class ShortlistCandidate extends Component {
 
   constructor(props) {
      super(props);
      this.state = {
         data : [
           {id:1,image:Avatar_02,name:"John Doe",role:"Web Designer",jobtitle:"Web Designer",department:"Development",startdate:"1 Jan 2013",expirydate:"31 May 2019",jobtype:"Full Time",status:"Open",applicants:"3 Candidates"},
           {id:2,image:Avatar_01,name:"Richard Miles",role:"Web Developer",jobtitle:"Web Developer",department:"Designing",startdate:"18 Mar 2014",expirydate:"31 May 2019",jobtype:"Part Time",status:"Closed",applicants:"2 Candidates"},
           {id:3,image:Avatar_03,name:"John Smith",role:"Android Developer",jobtitle:"Android Developer",department:"Android",startdate:"1 Apr 2014",expirydate:"31 May 2019",jobtype:"Internship",status:"Cancelled",applicants:"1 Candidates"},
           ],          
      };
    }
     render() {
      const{data} = this.state
      const columns = [
        {
          title: '#',
          dataIndex: 'id',
            sorter: (a, b) => a.id.length - b.id.length,
        },
        {
         title: 'Name',
         dataIndex: 'name',
         render: (text, record) => (            
             <h2 className="table-avatar">
               <a href="/app/profile/employee-profile" className="avatar"><img alt="" src={record.image} /></a>
               <a href="/app/profile/employee-profile">{text} <span>{record.role}</span></a>
             </h2>
           ), 
           sorter: (a, b) => a.name.length - b.name.length,
       },
        {
          title: 'Job Title',
          dataIndex: 'jobtitle',
          render: (text, record) => (            
              <a href="/app/administrator/job-details">{text}</a>
            ), 
            sorter: (a, b) => a.jobtitle.length - b.jobtitle.length,
        },
      
        {
          title: 'Department',
          dataIndex: 'department',
          sorter: (a, b) => a.department.length - b.department.length,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          render: (text, record) => (
            <div className="action-label">
               <a className="btn btn-white btn-sm btn-rounded" href="#">
                  <i className="fa fa-dot-circle-o text-danger" /> Offered
               </a>
            </div>
            ),
          sorter: (a, b) => a.status.length - b.status.length,
        },    
    
      ]
       return ( 
         <>
         {/* Page Wrapper */}
         <div className="page-wrapper">
            <Helmet>
                  <title>Shortlist Candidates - HRMS Admin Template</title>
                  <meta name="description" content="Login page"/>					
            </Helmet>
           {/* Page Content */}
           <div className="content container-fluid">
             {/* Page Header */}
             <div className="page-header">
               <div className="row align-items-center">
                 <div className="col-12">
                   <h3 className="page-title">Shortlist Candidates</h3>
                   <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="/app/main/dashboard">Dashboard</a></li>
                     <li className="breadcrumb-item">Jobs</li>
                     <li className="breadcrumb-item active">Shortlist Candidates</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <div className="row">
               <div className="col-md-12">
                 <div className="table-responsive">
                  <Table className="table-striped"
                    pagination= { {total : data.length,
                      showTotal : (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                      showSizeChanger : true,onShowSizeChange: onShowSizeChange ,itemRender : itemRender } }
                    style = {{overflowX : 'auto'}}
                    columns={columns}                 
                    // bordered
                    dataSource={data}
                    rowKey={record => record.id}
                    onChange={this.handleTableChange}
                  />
                 </div>
               </div>
             </div>
           </div>
           {/* /Page Content */}           
         </div>
         {/* /Page Wrapper */}
         </>
       );
    }
 }
 
 export default ShortlistCandidate;
 