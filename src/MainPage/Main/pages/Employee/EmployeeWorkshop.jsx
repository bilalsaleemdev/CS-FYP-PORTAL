import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import Button from "@mui/material/Button";
import {
  getAllWoekShop,
  deleteWorkShopeAPI,
  updateWorkShopeAPI,
  createWorkShopeAPI,
  getUserWorkshopesAPI,
  createUserWorkShopeAPI,
} from "../../../../api/network/customer/EmployeeApi";
import { Link, useHistory } from "react-router-dom";

import moment from "moment";

const Workshopes = () => {
  const history = useHistory();

  
  const cancelTokenSource = axios.CancelToken.source();
  var user_id = localStorage.getItem("user_id");
  const [conferanceData, setConferanceData] = useState([]);

  useEffect(() => {
    getAllConference();
  }, []);

  //get al conference
  const getAllConference = async () => {
    const response = await getAllWoekShop(cancelTokenSource.token);

    if (response.success == true) {
      console.log("12121212");
      setConferanceData([...[], ...response.data]);
      console.log(conferanceData, "awais data for all conference");
    }
  };

  const handleJoin = (e, url) => {
    console.log(url, 'url::')
    e.preventDefault();
    // window.location.href = url
    window.open("https://" +url, '_blank' )

  }

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Employee - Workshop</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Workshop</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/app/main/dashboard">Employee Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Workshop</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            {conferanceData.map((key, item) => (
              <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <h4 className="project-title">
                      <a href="/app/projects/projects-view">
                        Manager Workshop
                      </a>
                    </h4>
                    <p className="text-muted">{key.purpose}</p>
                    <div className="pro-deadline m-b-15">
                      <div className="sub-title">Day:</div>
                      <div className="text-muted">{key.day}</div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>
                        Start At:<span>{key.start_at}</span>
                      </div>
                      <div>
                        Start At:<span>{key.last_at}</span>
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>
                        URL:<span>{key.url}</span>
                      </div>
                    </div>
                    <div className="project-members m-b-15">
                      <div>
                        <Button variant="outlined" onClick={(e) => handleJoin(e, key.url)} targrt='blank'>
                          Join Conference
                        </Button>
                     

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  //  }
};

export default Workshopes;
