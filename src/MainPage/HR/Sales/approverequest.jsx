import React, { useEffect, useState } from "react";
// import { Applogo } from "../Entryfile/imagepath.jsx";
import axios, { CancelTokenSource } from "axios";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import {itemRender,onShowSizeChange} from "../../paginationfunction"
import "../../antdstyle.css"
import {getUserById, getUserProfileAPI, getUsersPendingRequestAPI,approveUsersPendingRequestAPI,deleteUsersPendingRequestAPI } from "../../../api/network/customer/EmployeeApi";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ApproveRequest = () => {
  const[declineOpen, setDeclineOpen]=useState(false);
  const[error, setError]=useState(false);
  const[messageName, setMessageName]= useState();
  const[userIdApi,setUserIdApi] = useState();
  const [open, setOpen]= useState(false);
  const[wrongPassword, setWeongPassword] = useState(false);
  // var  data = [];
  const [data, setdata] = useState([]);
  const [transition, setTransition] = useState(undefined);
  const history = useHistory();
  const [userType, setUsertype] = useState('');    
  const handleErrorCloseSubmitResponseDecline = () => {
    setError(false);
    window.location.reload();
  };

  const handleCloseSubmitResponseDecline = () => {
    setDeclineOpen(false);
    window.location.reload();
  };
  const handleCloseSubmitResponse = () => {
    setOpen(false);
    window.location.reload();
  };
  const cancelTokenSource = axios.CancelToken.source();
  const columns = [                 
   
    {
      title: 'Name',
      dataIndex: 'name', 
      // sorter: (a, b) => a.createddate.length - b.createddate.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
        // sorter: (a, b) => a.duedate.length - b.duedate.length,
    },    
    {
      title: 'Employee Type',
      dataIndex: 'type',
      render: (text, record) => (
      <span>{text}</span>
        ),
      // sorter: (a, b) => a.amount.length - b.amount.length,
    },    
    {
      title: 'Action',            
      render: (text, record) => (
      <button  onClick = { ()=>{ 
        ApproveRequest(record)
      } }
      style={{fontWeight:'900'}}
       className={"btn btn-primary bg-inverse-primary"}> Approve </button>
        ),
        
      // sorter: (a, b) => a.status.length - b.status.length,
    },
     
    {
      title: 'Action',            
      render: (text, record) => (
      <button  onClick = { ()=>{ 
        cancleRequest(record)
      } }
      style={{fontWeight:'900'}}
       className={"btn bg-inverse-danger"}>Decline</button>
        ),
        
      // sorter: (a, b) => a.status.length - b.status.length,
    },

  ]

  useEffect(()=>{
    let userId = window.localStorage.getItem('user_id')    
    getUserProfile(userId);        
  },[])
  useEffect(()=>{    
    if(userType != '')    {      
      getUsersPendingRequest();
    }

  },[userType])

  useEffect(() => {
    getUserName(userIdApi);
  }, [userIdApi])

  // function TransitionLeft(props) {
  //   return <Slide {...props} direction="left" />;
  // }
  
  const getUserProfile = async (userId) => {
    const response = await getUserProfileAPI(userId, cancelTokenSource.token);    
    if (response.success == true) {
      console.log('ArrayData::0bar',response.data)
      setUsertype(response.data.type)            
    } else {      
      console.log("Failed Response", response);
    }
  };

  const getUserName = async (userIdApi) => {
    const response = await getUserById(userIdApi, cancelTokenSource.token);  
    console.log('naaame',response.user.name);
    setMessageName(response.user.name);
    
  };

  const getUsersPendingRequest = async () => {
    
    const response = await getUsersPendingRequestAPI(cancelTokenSource.token);
  
    if (response.success == true) {
      // const awais = response.PromiseResult;
      let localData = []

      console.log(response.data,'ArrayData::', ' ', userType)
      if(userType == 'manager'){
        for (let item in response.data) {
          console.log(item,'ArrayData::')
          if(response.data[item].type != 'ceo' && response.data[item].type != 'manager'){
            localData.push(response.data[item])
          }        
        }  
      }
      else if(userType == 'ceo'){
        for (let item in response.data) {
          console.log(item,'ArrayData::')
          if(response.data[item].type != 'ceo'){
            localData.push(response.data[item])
          }        
        }         
      }
            
      setdata(localData);
      console.log("  data awaiss ", localData);
      setWeongPassword(true);
    } else {
      console.log("Failed Response", wrongPassword);
    }
  };
  const ApproveRequest = async (item) => {

    
    const response = await approveUsersPendingRequestAPI(item.id,cancelTokenSource.token);
    if (response.success == true) {
      // const awais = response.PromiseResult;
      setUserIdApi(item.id)
      setOpen(true);
      getUsersPendingRequest()
      console.log("  data awaiss ", response);
      // setWeongPassword(true);
    } else {
      setError(true);
      console.log("Failed Response", response);
    }
  }
   
  const cancleRequest = async (item) => {
    setUserIdApi(item.id);
    const response = await deleteUsersPendingRequestAPI (item.id,cancelTokenSource.token);
    
    if (response.success == true) {
      // setUserIdApi(item.id);
      setDeclineOpen(true);

      getUsersPendingRequest()
      console.log("Success Response ", response.message);      
    } else {
      setError(true);
      console.log("Failed Response", response.success);
    }
  }



  return (
    <React.Fragment>
    {error && (
      <Dialog
        open={declineOpen}
        onClose={handleErrorCloseSubmitResponseDecline}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Something Went Wrong!
           Please Try Again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button
            onClick={handleErrorCloseSubmitResponseDecline}
            color="primary"
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    )}
    {open && (
      <Dialog
        open={open}
        onClose={handleCloseSubmitResponse}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {`  ${messageName}'s Account Approved Successfully`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button
            onClick={handleCloseSubmitResponse}
            color="primary"
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    )}

    {declineOpen && (
      <Dialog
        open={declineOpen}
        onClose={handleCloseSubmitResponseDecline}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {` ${messageName}'s
              accont has been declined`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button
            onClick={handleCloseSubmitResponseDecline}
            color="primary"
            autoFocus
          >
            ok
          </Button>
        </DialogActions>
      </Dialog>
    )}
    <div className="page-wrapper">
        <Helmet>
            <title>Approve Requests</title>
            <meta name="description" content="Login page"/>					
        </Helmet>
    <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">Approve Request</h3>
              {/* <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/app/main/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active">Approve Request</li>
              </ul> */}
            </div>
            {/* <div className="col-auto float-right ml-auto">
              <a href="/app/sales/createestimates" className="btn add-btn"><i className="fa fa-plus" /> Create Estimate</a>
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
