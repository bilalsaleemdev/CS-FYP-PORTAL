import React, { useEffect, useState } from "react";
// import { Applogo } from "../Entryfile/imagepath.jsx";
import axios, { CancelTokenSource } from "axios";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import { getUsersPendingRequestAPI } from "../../../api/network/customer/EmployeeApi";

const ApproveRequest = () => {
  const[wrongPassword, setWeongPassword] = useState(false);

  const [transition, setTransition] = useState(undefined);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const cancelTokenSource = axios.CancelToken.source();
  const columns = [
            
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <a href="/purple/app/sales/estimatesview">{text}</a>
        ),
      sorter: (a, b) => a.invoicenumber.length - b.invoicenumber.length,
    },     
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => a.client.length - b.client.length,
    },
    {
      title: 'Name',
      dataIndex: 'name', 
      sorter: (a, b) => a.createddate.length - b.createddate.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
        sorter: (a, b) => a.duedate.length - b.duedate.length,
    },    
    {
      title: 'Employee Type',
      dataIndex: 'type',
      render: (text, record) => (
      <span>$ {text}</span>
        ),
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text, record) => (
      <span className={"badge bg-inverse-success"}>Accepted</span>
        ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    // {
    //   title: 'Action',
    //   render: (text, record) => (
    //       <div className="dropdown dropdown-action text-right">
    //            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
    //             <div className="dropdown-menu dropdown-menu-right">
    //               <a className="dropdown-item" href="/purple/app/sales/editestimates"><i className="fa fa-pencil m-r-5" /> Edit</a>
    //               <a className="dropdown-item" href="#" data-toggle="modal" data-target="#delete_estimate"><i className="fa fa-trash-o m-r-5" /> Delete</a>
    //             </div>
    //       </div>
    //     ),
    // },
  ]
  // let data = [
  //   {id:1,invoicenumber:"EST-0001",client:"	Global Technologies",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Accepted"},
  //   {id:2,invoicenumber:"EST-0002",client:"Delta Infotech",createddate:"11 Mar 2019",duedate:"11 Mar 2019",amount:"2099",status:"Declined"},
  //  ]
  let data = [
    {
        "id": 7,
        "name": "Bilal",
        "email": "bilalTest1@mailinator.com",
        "type": "ceo",
        "status": 0,
        "password": "12345",
        "created_at": "2021-08-22T12:02:42.000Z",
        "updated_at": "2021-08-22T12:02:42.000Z"
    },
    {
        "id": 10,
        "name": "Bilal 2",
        "email": "bilalTest122@mailinator.com",
        "type": "ceo",
        "status": 0,
        "password": "12345",
        "created_at": "2021-08-25T05:32:31.000Z",
        "updated_at": "2021-08-25T05:32:31.000Z"
    }
]
  useEffect(()=>{
    getUsersPendingRequest()
  },[])
  // function TransitionLeft(props) {
  //   return <Slide {...props} direction="left" />;
  // }

  const getUsersPendingRequest = async () => {
    // setTransition(() => TransitionLeft);
    const response = await getUsersPendingRequestAPI(cancelTokenSource.token);
    if (response.success == true) {
      // const awais = response.PromiseResult;
      const  data  = response.data;
      console.log("  data awaiss ", data);
      setWeongPassword(true);
    } else {
      console.log("Failed Response", wrongPassword);
    }
  };
  
   


  return (
    <React.Fragment>
    <div className="page-wrapper">
        <Helmet>
            <title>Estimates - HRMS Admin Template</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
    <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Approve Request</h3>
              {/* <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/purple/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Approve Request</li>
              </ul> */}
            </div>
            {/* <div className="col-auto float-right ml-auto">
              <a href="/purple/app/sales/createestimates" className="btn add-btn"><i className="fa fa-plus" /> Create Estimate</a>
            </div> */}
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        {/* <div className="row filter-row">
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
              <label className="focus-label">From</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">  
            <div className="form-group form-focus">
              <div className="cal-icon">
                <input className="form-control floating datetimepicker" type="text" />
              </div>
              <label className="focus-label">To</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3"> 
            <div className="form-group form-focus select-focus">
              <select className="select floating"> 
                <option>Select Status</option>
                <option>Accepted</option>
                <option>Declined</option>
                <option>Expired</option>
              </select>
              <label className="focus-label">Status</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">  
            <a href="#" className="btn btn-success btn-block"> Search </a>  
          </div>     
        </div> */}
        {/* /Search Filter */}
        {wrongPassword
              &&      

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
                  // onChange={handleTableChange}
                />
            </div>
          </div>
        </div>
}
      </div>
      </div>
    </React.Fragment>
  );
};

export default ApproveRequest;
