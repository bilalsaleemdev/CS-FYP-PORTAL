import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Avatar_01,
  Avatar_02,
  Avatar_03,
  Avatar_04,
  Avatar_05,
  Avatar_11,
  Avatar_12,
  Avatar_09,
  Avatar_10,
  Avatar_08,
  Avatar_13,
  Avatar_16,
} from "../../../../Entryfile/imagepath";
import {
  getAllEmployeeUser,
  deleteUserById,
  getAllTaskEmployee,
  getAllProgressOfEmployee,
  getAllProjectOfEmployee
} from "../../../../api/network/customer/EmployeeApi";

const Employee = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [allEmployees, setAllEmployees] = useState([]);
  const [progresUser, setProgressUser] = useState([]);
  const [prgressUserAvail, setPrgressUserAvail] = useState(false);
  const [topUser, setTopUser] = useState({});
  const [selectedUserId, setSelectedUserId] = useState();
  const [countCompletedTask, setCountCompletedTask] = useState();
  const [countPendingTask, setCountPendingTask] = useState();
  const [countAllTask, setCountAllTask] = useState();

  const [employeeTaskData, setEmployeeTaskData] = useState([]);
  const [completedCount, setCompletedCount] = useState();
  const [fiveStarCount, setFiveStarCount] = useState();
  const [countData, setCountData] = useState(false);

  const [cardOneCondition, setCardOneCondition] = useState(false);
  const [cardTwoCondition, setCardTwoCondition] = useState(false);
  const [cardThreeCondition, setCardThreeCondition] = useState(false);
  const [positionOneEmployee, setPositionOneEmployee] = useState();

  const [starCardOneCondition, setStarCardOneCondition] = useState(false);
  const [starCardTwoCondition, setStarCardTwoCondition] = useState(false);
  const [starCardThreeCondition, setStarCardThreeCondition] = useState(false);

  const [starWidthCardOne, setStarWidthCardOne] = useState();
  const [WidthCardOne, setWidthCardOne] = useState();

  const [starWidthCardTwo, setStarWidthCardTwo] = useState();
  const [WidthCardTwo, setWidthCardTwo] = useState();

  const [starWidthCardThree, setStarWidthCardThree] = useState();
  const [WidthCardThree, setWidthCardThree] = useState();
  const [numOfProoject,setNumOfProoject] = useState();

  //for css classes style apply
  const [cardClass, setCardClass] = useState("");

  useEffect(() => {
    getAllPosition(selectedUserId);
  }, [selectedUserId]);
  useEffect(() => {
    if (completedCount) {
      let cardOne = Math.round((completedCount / 10) * 100);
      let CardTwo = Math.round((completedCount / 15) * 100);
      let CardThree = Math.round((completedCount / 20) * 100);

      let starOne = Math.round((fiveStarCount / 5) * 100);
      let starTwo = Math.round((fiveStarCount / 10) * 100);
      let starThree = Math.round((fiveStarCount / 15) * 100);

      if (cardOne > 99 && starOne > 99) {
        setCardClass("changeSilver");
      }

      if (CardTwo > 99 && starTwo > 99) {
        setCardClass("changeGold");
      }

      if (CardThree > 99 && starThree > 99) {
        setCardClass("changePlatinum");
      }

      console.log("awais checking cardOne Value 1", cardOne);
      console.log("awais checking cardOne Value 2", CardTwo);
      console.log("awais checking cardOne Value 3", CardThree);

      let widthCardOn, widthCardTw, widthCardThre, starWidthCardOne;

      widthCardOn = Math.round((completedCount / 10) * 100);
      widthCardOn > 100 ? setWidthCardOne(100) : setWidthCardOne(widthCardOn);

      widthCardTw = Math.round((completedCount / 15) * 100);
      widthCardTw > 100 ? setWidthCardTwo(100) : setWidthCardTwo(widthCardTw);

      widthCardThre = Math.round((completedCount / 20) * 100);
      widthCardThre > 100
        ? setWidthCardThree(100)
        : setWidthCardThree(widthCardThre);

      starWidthCardOne = Math.round((fiveStarCount / 5) * 100);
      starWidthCardOne > 100
        ? setStarWidthCardOne(100)
        : setStarWidthCardOne(starWidthCardOne);

      let starsCardTwo = Math.round((fiveStarCount / 10) * 100);
      starsCardTwo > 100
        ? setStarWidthCardTwo(100)
        : setStarWidthCardTwo(starsCardTwo);

      let starsCardThree = Math.round((fiveStarCount / 15) * 100);
      starsCardThree > 100
        ? setStarWidthCardThree(100)
        : setStarWidthCardThree(starsCardThree);

      if (cardOne > 99) {
        // setForSilver("silvercurrentLevel");
        setCardOneCondition(true);
      }
      if (CardTwo > 99) {
        // setCardOneCondition(true);
        setCardTwoCondition(true);
      }
      if (CardThree > 99) {
        setCardThreeCondition(true);
      }
      // console.log("awais checking starWidthCardOne Value 1", starWidthCardOne);
      // console.log("awais checking widthCardOne Value 2", WidthCardOn);
      // console.log("awais checking cardOne Value 3", CardThree);
    }
  }, [completedCount, fiveStarCount]);

  useEffect(() => {
    if (fiveStarCount) {
      let cardOne = Math.round((fiveStarCount / 5) * 100);
      let CardTwo = Math.round((fiveStarCount / 10) * 100);
      let CardThree = Math.round((fiveStarCount / 15) * 100);
      // console.log("awais checking star cardOne Value 1", starsCardOne);
      // console.log("awais checking star cardOne Value 2", starsCardTwo);
      // console.log("awais checking star cardOne Value 3", starsCardThree);

      if (cardOne > 99) {
        setStarCardOneCondition(true);
      }
      if (CardTwo > 99) {
        setStarCardTwoCondition(true);
      }
      if (CardThree >= 100) {
        setStarCardThreeCondition(true);
      }
    }
  }, [fiveStarCount]);

  useEffect(() => {
    console.log("awais checking setCardThreeCondition 1", cardOneCondition);
    console.log("awais checking setCardThreeCondition 2", cardTwoCondition);
    console.log("awais checking setCardThreeCondition 3", cardThreeCondition);

    console.log(
      "awais checking setCardThreeCondition star 1",
      starCardOneCondition
    );
    console.log(
      "awais checking setCardThreeCondition star2",
      starCardTwoCondition
    );
    console.log(
      "awais checking setCardThreeConditionstar  3",
      starCardThreeCondition
    );
  }, [cardThreeCondition, cardTwoCondition, cardOneCondition, WidthCardOne]);

  useEffect(() => {
    // ManagerProfileCreateApi();
    if (selectedUserId) {
      getAllTaskOFEmployee(selectedUserId);
    }

    // UserProfilePic();
  }, [selectedUserId]);

  useEffect(() => {
    // ManagerProfileCreateApi();
    getTotalCompletedTask();
    // UserProfilePic();
  }, [employeeTaskData, selectedUserId]);

  const getAllTaskOFEmployee = async (id) => {
    const response = await getAllTaskEmployee(
      selectedUserId,
      cancelTokenSource.token
    );

    if (response.success == true) {
      console.log("awais checking 0", response.data);

      setEmployeeTaskData(response.data.completed_task);

      // console.log(taskData, "awais data for all task");
    }
    // console.log(taskData, "awais data for all task");
  };
  const getTotalCompletedTask = () => {
    let countTotalCompletedTask = 0;
    let countFiveStarTask = 0;

    employeeTaskData.map((item) => {
      countTotalCompletedTask++;
      if (item.rating == 5) {
        countFiveStarTask++;
      }
    });
    console.log("awais checking 2 fivestar", countFiveStarTask);
    console.log("awais checking 2 completed", countTotalCompletedTask);
    if (countFiveStarTask && countTotalCompletedTask) {
      console.log("awais checking 2 111");
      setFiveStarCount(countFiveStarTask);
      setCompletedCount(countTotalCompletedTask);
      setCountData(true);
    }
  };

  // const [searchName, setSearchName] = useState("");

  const [barPenTask, setBarPenTask] = useState(0);
  const [countCompletedTaskPercentage, setCountCompletedTaskPercentage] =
    useState();
  const [countPendingTaskPercentage, setCountPendingTaskPercentage] =
    useState();

  useEffect(() => {
    if (countAllTask) {
      let completedCountPercentage = Math.round(
        (countCompletedTask / countAllTask) * 100
      );
      setCountCompletedTaskPercentage(completedCountPercentage);
      let pendingTask = Math.round((countPendingTask / countAllTask) * 100);
      setCountPendingTaskPercentage(pendingTask);
    }
  }, [
    countAllTask,
    countPendingTask,
    countCompletedTask,
    barPenTask,
    selectedUserId,
  ]);

  const controlBadges = () => {
    setCardThreeCondition(false);
    setCardOneCondition(false);
    setCardTwoCondition(false);
    setStarCardOneCondition(false);

    setStarCardTwoCondition(false);

    setStarCardThreeCondition(false);
  };

  useEffect(() => {
    getEmployeeUser();
  }, [countAllTask]);
  useEffect(() => {
    getEmployeeAllTask();
  }, [selectedUserId]);
  const getEmployeeAllTask = async (id) => {
    setBarPenTask(0);
    const res = await getAllTaskEmployee(id, cancelTokenSource.token);
    console.log("awais checking tasokk", res.data);
    if (res.success == true) {
      setCountPendingTask(res.data.pending_task.length);
      setCountCompletedTask(res.data.completed_task.length);
      let temp = 0;
      if (res.data.total_task.length > 0) {
        temp =
          (res.data.completed_task.length / res.data.total_task.length) * 100;
        temp = Math.floor(temp);

        setBarPenTask(temp);
      }
      setCountAllTask(res.data.total_task.length);
      console.log("asdasdasdasdasdasdsd  333");
    }
  };
  const deleteUser = async () => {
    const response = await deleteUserById(
      selectedUserId,
      cancelTokenSource.token
    );
    if (response.success == true) {
      console.log("Data::", response.data.id);
      // getUserWorkshopes();
    }
  };

  const deleteSerVal = (id) => {
    console.log("asdasdasdasdasdas", id);
    setSelectedUserId(id);
  };

  const deleteSerVal2 = (id) => {
    console.log("asdasdasdasdasdas", id);
    setSelectedUserId(id);
    getEmployeeAllTask(id);
  };
  const getEmployeeUser = async () => {
    const response = await getAllEmployeeUser(cancelTokenSource.token);
    if (response.success == true) {
      const filtered = [];

      console.log("employee res", response.data);
      setAllEmployees([...response.data]);
    } else {
      console.log("employee error");
    }
  };
  //for Position
  const getAllPosition = async (iid) => {
    const res2 = await getAllProjectOfEmployee(iid ,cancelTokenSource.token)
    const res = await getAllProgressOfEmployee(cancelTokenSource.token);
    console.log("aaaaaaaaaaaaaaaaaaaaaa 1");
    console.log("aaaaaaaaaaaaaaaaaaaaaa 1 2", res.data[0]);
    console.log("aaaaaaaaaaaaaaaaaaaaaa 1 3", res2.data);
    setNumOfProoject(res2.data.length)
    if (res.success == true) {
      setProgressUser(res.data);
      setPrgressUserAvail(true);
      // let selectesUsser = res.data.filter((elm)=> {
      //   elm.id === !selectedUserId;
      // })
      let count = 0;
      for (let i = 0; i <= res.data.length; i++) {
        count++;
        if (res.data[i].id == selectedUserId) {
          setTopUser(res.data[i]);
          setPositionOneEmployee(count);
          break;
        }
      }

      console.log("aaaaaaaaaaaaaaaaaaaaaa 1 4", selectedUserId);
    }
  };

  console.log("miral data employees", allEmployees);
  return (
    <div className="page-wrapper" data-dismiss="modal">
      <Helmet>
        <title>All Employee</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col">
              <h3 className="page-title">All Employee</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Ceo</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        {/* Search Filter */}
        <div className="row filter-row">
          <div style={{ marginBottom: "15px" }} className="col-sm-12 col-md-12">
            <div className="btn btn-success btn-block"> All Employees </div>
          </div>
        </div>
        {/* Search Filter */}
        {/* all employees */}
        <div className="row staff-grid-row">
          {allEmployees.map((item, key) => (
            <div
              className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
              onClick={() => {
                deleteSerVal2(item.user_id);
              }}
              onMouseOver={() => deleteSerVal2(item.user_id)}
            >
              <div
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#performance_employee"
                onClick={() => {
                  getEmployeeAllTask();
                }}
                className="profile-widget"
              >
                <div className="profile-img">
                  <div className="avatar">
                    <img
                      style={{ height: "100%" }}
                      src={item.image_url}
                      alt="No Image"
                    />
                  </div>
                </div>
                <div className="dropdown profile-action">
                  <a
                    href="#"
                    className="action-icon dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="material-icons">more_vert</i>
                  </a>
                  <div
                    style={{ marginTop: "-20px" }}
                    className="dropdown-menu dropdown-menu-right"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      onClick={() => deleteSerVal(item.user_id)}
                      data-target="#delete_employee"
                    >
                      <i className="fa fa-trash-o m-r-5" /> Delete
                    </a>
                  </div>
                </div>
                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                  <div>{item.name}</div>
                </h4>
                <div className="small text-muted">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
        {/* end of all employees*/}
      </div>
      {/* /Page Content */}
      {/**popup on every employee */}
      <div
        className="modal custom-modal fade"
        onClick={() => controlBadges()}
        id="performance_employee"
        role="dialog"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Employee Information</h3>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-12 col-xl-12 d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <h4 className="card-title">
                        Task Statistics : {topUser ? `${topUser.name}` : ""}
                      </h4>
                      <div className="statistics">
                        <div className="row">
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box mb-4">
                              <p>Total Tasks</p>
                              <h3>{countCompletedTask}</h3>
                            </div>
                          </div>
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box mb-4">
                              <p>Overdue Tasks</p>
                              <h3>{countPendingTask}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box mb-4">
                              <p>
                                Current Badge:{" "}
                                {starCardThreeCondition &&
                                starCardTwoCondition &&
                                starCardOneCondition &&
                                cardOneCondition &&
                                cardTwoCondition &&
                                cardThreeCondition ? (
                                  <h7>Platinum</h7>
                                ) : starCardTwoCondition &&
                                  starCardOneCondition &&
                                  cardOneCondition &&
                                  cardTwoCondition ? (
                                  <h7>Gold</h7>
                                ) : starCardOneCondition && cardOneCondition ? (
                                  <h7>Silver</h7>
                                ) : (
                                  <h7>No Level</h7>
                                )}
                              </p>
                              <h1>
                                {" "}
                                {starCardThreeCondition &&
                                starCardTwoCondition &&
                                starCardOneCondition &&
                                cardOneCondition &&
                                cardTwoCondition &&
                                cardThreeCondition ? (
                                  <i
                                    style={{ color: "#6087aa" }}
                                    class="fas fa-medal"
                                  ></i>
                                ) : starCardTwoCondition &&
                                  starCardOneCondition &&
                                  cardOneCondition &&
                                  cardTwoCondition ? (
                                  <i
                                    style={{ color: "#f1b92a" }}
                                    class="fas fa-medal"
                                  ></i>
                                ) : starCardOneCondition && cardOneCondition ? (
                                  <i
                                    style={{ color: "#404040" }}
                                    class="fas fa-medal"
                                  ></i>
                                ) : (
                                  <i
                                    style={{ color: "black" }}
                                    className={`fas fa-user-clock `}
                                  ></i>
                                )}
                              </h1>
                            </div>
                          </div>
                          <div className="col-md-6 col-6 text-center">
                            <div className="stats-box mb-4">
                              <p>Current Position</p>
                              {topUser ? <h3>{positionOneEmployee}</h3> : ""}
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12 col-lg-12 d-flex">
                            <div className="card flex-fill">
                              <div className="card-body">
                                <h4 className="card-title">
                                  Employee Progress
                                </h4>
                                <p>
                                  <span
                                    style={{ fontSize: "13px" }}
                                    className="text-success float-right"
                                  >
                                    {" "}
                                    {`${barPenTask}%`}
                                  </span>
                                </p>
                                <div
                                  style={{
                                    width: "100%",
                                    marginLeft: "-11px",
                                    marginRight: "-17px",
                                  }}
                                  className="progress progress-xs mb-0"
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    data-toggle="tooltip"
                                    title="40%"
                                    style={{
                                      width: `${barPenTask}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                     
                      </div>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar bg-purple"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {countCompletedTaskPercentage}%
                        </div>

                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={14}
                          aria-valuemin={0}
                          aria-valuemax={`${countPendingTaskPercentage}`}
                        >
                          {countPendingTaskPercentage}%
                        </div>
                      </div>
                      <div>
                        <p>
                          <i className="fa fa-dot-circle-o text-purple mr-2" />
                          Completed Tasks{" "}
                          <span className="float-right">
                            {countCompletedTask}
                          </span>
                        </p>

                        <p>
                          <i className="fa fa-dot-circle-o text-danger mr-2" />
                          Pending Tasks{" "}
                          <span className="float-right">
                            {countPendingTask}
                          </span>
                        </p>
                      </div>
                      <div className="row">
                      <div className="col-md-12 col-lg-12 col-xl-12 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <h4 className="card-title">
                              Project Statistics {" "}
                            </h4>
                            <div className="statistics">
                              <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                  <div className="stats-box mb-4">
                                    <h3>OnGoing Projects</h3>
                                    <h4>{numOfProoject}</h4>
                                  </div>
                                </div>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-12">
                    <a
                      href=""
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      ok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Employee Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_employee"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Employee</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      onClick={() => deleteUser()}
                      href=""
                      className="btn btn-primary continue-btn"
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href=""
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Employee Modal */}
    </div>
  );
};

export default Employee;
