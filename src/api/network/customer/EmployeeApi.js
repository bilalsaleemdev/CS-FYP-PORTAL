import axios, { Cancel, CancelToken } from "axios";
import { processRequest } from '../Network.js';
import 'regenerator-runtime/runtime'
import { type } from "jquery";
//setting token in axios headers to prevent request failure
// if (localStorage.getItem('user-token')) axios.defaults.headers = { 'x-auth-token': localStorage.getItem('user-token') };

// export function getErrorResponse(error) {    
//     console.log(error,'error error    error ')
//     let customResponse = {};
//     try{
//     if(error.data?.masssage == 'timeout exceeded' ){
//         customResponse.success = false
//         customResponse.status_code = { key: "failed", value: -1, name: "timeout" }
//         customResponse.user_message = "Timeout Exceeded"

//     }else
//     if (error && error?.toJSON().message === 'Network Error') {        
//         customResponse.success = false
//         customResponse.status_code = { key: "failed", value: -1, name: "network" }
//         customResponse.user_message = "Internet problem"
//     } 
//     else {        
//         customResponse = error?.response.data
//         !!error && console.error(`FAILED API = ${error.response.config.url} | Error Code = ${customResponse.status_code?.value} | System Message = ${customResponse.system_message}`);
//         !!!error  &&  console.log('FAILED API with undefined error');
//     }
// }catch(e){
//     console.log(e,'error catch')
//     customResponse.success = false
//     customResponse.status_code = { key: "failed", value: -1, name: "network" }
//     customResponse.user_message = "Internet problem"
// }
// return customResponse;

// }

export const loginAdmin = async (email, password, cancelToken) => {    
    const url = `user/login`;
    const data = { 'email': email, 'password': password };
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const Registration = async (name, email, type, password, cancelToken) => {    
    const url = 'users';
    const data = {'name': name, 'email': email, 'type':type,'password': password, 'status':0};
    const request = { type: 'POST', urlString: url, params: data };
    console.log('awais data', data)
    try {
         const response = await processRequest(request, cancelToken);
         console.log('awais api response ', response) 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};



export const ProfileCreate = async (user_id, first_name,last_name, dob,cnic,department ,phoneNumber,gender,address,country, postal_code,cancelToken) => {    
    const url = `users-profile`;
    const data = { 'user_id': user_id , 'first_name':first_name,'last_name':last_name, 'dob':dob ,'cnic': cnic,'department':department,'phone': phoneNumber, 'gender':gender,'address':address, 'country':country , 'postal_code': postal_code };
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('manager profile', response)
        return response.data;
    } catch (error) { 
        console.log('manager  error', error)
        return {error:error};
    }
};

//user profile put api for edit

export const ProfileEdit = async (user_id, first_name,last_name, dob,cnic, department, phoneNumber,gender,address,country, postal_code,cancelToken) => {    
    const url = `users-profile/${user_id}`;
    const data = { 'user_id': user_id , 'first_name':first_name,'last_name':last_name, 'dob':dob ,'cnic': cnic,'department':department,'phone': phoneNumber, 'gender':gender,'address':address, 'country':country , 'postal_code': postal_code };
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('manager profile', response)
        return response.data;
    } catch (error) { 
        console.log('manager  error', error)
        return {error:error};
    }
};



export const getUserProfileAPI = async (userId, cancelToken) => {    
    const url = `users-profile/${userId}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getUsersPendingRequestAPI = async (cancelToken) => {    
    const url = `pending-approve-request-users`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const approveUsersPendingRequestAPI = async (userId,cancelToken) => {    
    const url = `approve-request-user/${userId}`;    
    const request = { type: 'PUT', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const deleteUsersPendingRequestAPI = async (userId,cancelToken) => {    
    const url = `approve-request-user/${userId}`;    
    const request = { type: 'DELETE', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const createWorkShopeAPI = async (data,cancelToken) => {    
    const url = `conference`;    
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference', response)
        return response.data;
    } catch (error) { 
        console.log('conference', error)
        return {error:error};
    }
};

export const updateWorkShopeAPI = async (data,cancelToken) => {    
    const url = `conference/${data.id}`;    
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference', response)
        return response.data;
    } catch (error) { 
        console.log('conference', error)
        return {error:error};
    }
};
export const deleteWorkShopeAPI = async (selectedWorkShopId,cancelToken) => {    
    const url = `conferance/${selectedWorkShopId}`;    
    const request = { type: 'DELETE', urlString: url};
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference', response)
        return response.data;
    } catch (error) { 
        console.log('conference', error)
        return {error:error};
    }
};

export const createUserWorkShopeAPI = async (data,cancelToken) => {    
    const url = `user-conference`;    
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference', response)
        return response.data;
    } catch (error) { 
        console.log('conference', error)
        return {error:error};
    }
};

export const getUserWorkshopesAPI = async (user_id,cancelToken) => {    
    const url = `user-conference/${user_id}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

//find all conference

export const getAllWoekShop = async (cancelToken) => {    
    const url = `conferance`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

//manager api crate project


export const createProjectAPI = async (data,cancelToken) => {    
    const url = `project`;    
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference', response)
        return response.data;
    } catch (error) { 
        console.log('conference', error)
        return {error:error};
    }
};

export const getEmployeeUserAPI = async (user_id,cancelToken) => {    
    const url = `employees-users`    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getUserProjectAPI = async (user_id,cancelToken) => {    
    const url = `project-all-data/${user_id}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getUserProjectForTaskAPI = async (user_id,cancelToken) => {    
    const url = `manager-project/${user_id}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};
export const getTaskApi = async (cancelToken) => {    
    const url = `task`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getProjectEmployeeAPI = async (user_id,cancelToken) => {    
    const url = `project-employee/${user_id}`    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};
export const getProjectTaskAPI = async (projectId,cancelToken) => {    
    const url = `project-task/${projectId}`    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const createTaskAPI = async (data,cancelToken) => {    
    const url = `task`;    
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('task', response)
        return response.data;
    } catch (error) { 
        console.log('task', error)
        return {error:error};
    }
};

export const updateTaskAPI = async (id ,data, cancelToken) => {    
    const url = `task/${id}`;    
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        console.log('task', error)
        return {error:error};
    }
};

export const putTaskApi = async (id, data,cancelToken) => {    
    const url = `task/${id}`;    
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('task', response)
        return response.data;
    } catch (error) { 
        console.log('task', error)
        return {error:error};
    }
};
export const updateProjectAPI = async (id ,data, cancelToken) => {    
    const url = `project/${id}`;    
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log(response.data)
        return response.data;
    } catch (error) { 
        console.log('task', error)
        return {error:error};
    }
};

//get allTask of Employees
export const getAllTaskEmployee = async (emloyee_Id,cancelToken) => {   

    const url = `employee-task/${emloyee_Id}`    
    const request = { type: 'GET', urlString: url };
    console.log('All Employee request', request )
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};



// get all project for employee user

export const getProjectEmployee = async (emloyee_Id,cancelToken) => {   

    const url = `employee-project/${emloyee_Id}`    
    const request = { type: 'GET', urlString: url };
    console.log('All Employee project request', request )
    try {
         const response = await processRequest(request, cancelToken); 
         console.log("awaaaaaa");
        return response.data;
    } catch (error) { 
        console.log("awaaaaaa err");
        return {error:error};
    }
};

//get user by id


export const getUserById = async (emloyee_Id,cancelToken) => {   

    const url = `single-user/${emloyee_Id}`    
    const request = { type: 'GET', urlString: url };
    console.log('All Employee project request', request )
    try {
         const response = await processRequest(request, cancelToken); 
         console.log("awaaaaaa");
        return response.data;
    } catch (error) { 
        console.log("awaaaaaa err");
        return {error:error};
    }
};

//get All Project

export const getAllProject = async (cancelToken) => {   

    const url = `project`    
    const request = { type: 'GET', urlString: url };
    console.log('All  project request', request )
    try {
         const response = await processRequest(request, cancelToken); 
         console.log("awaaaaaa");
        return response.data;
    } catch (error) { 
        console.log("awaaaaaa err");
        return {error:error};
    }
};



//Put user profile pic api

// export const ProfilePicPutApi = async (user_id, profile_pic,cancelToken) => {    
//     const url = `upload/pic/${user_id}`;
//     const data = { 'user_id': user_id , ' profile_pic': profile_pic};
//     const request = { type: 'PUT', urlString: url, params: data , {}};
//     try {
//          const response = await processRequest(request, cancelToken); 
//          console.log('manager profile', response)
//         return response.data;
//     } catch (error) { 
//         console.log('manager  error', error)
//         return {error:error};
//     }
// };


//get Employee All projects

export const getAllProjectOfEmployee = async (user_id, cancelToken) => {   

    const url = `employee-project/${user_id}`    
    const request = { type: 'GET', urlString: url };
    console.log('All  project of one employee', request )
    try {
         const response = await processRequest(request, cancelToken); 
         console.log("awaaaaaa");
        return response.data;
    } catch (error) { 
        console.log("awaaaaaa err");
        return {error:error};
    }
};




//notification



export const getEmployeeProjectNotification = async (userId, cancelToken) => {    
    const url = `employees-project-notifications/${userId}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getEmployeeTaskNotification = async (userId, cancelToken) => {    
    const url = `employees-task-notifications/${userId}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};

export const getEmployeeConferenceNotification = async (userId, cancelToken) => {    
    const url = `employees-conference-notifications/${userId}`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};
export const getEmployeeOfTheMonth = async (cancelToken) => {    
    const url = `top-employees-of-month`;    
    const request = { type: 'GET', urlString: url };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};


export const conferenceUpdate = async (conferenceId,data,cancelToken) => {    
    const url = `conference/${conferenceId}`;
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('conference Update', response)
        return response.data;
    } catch (error) { 
        console.log('conference  error', error)
        return {error:error};
    }
};

export const taskConferenceUpdate = async (taskID,data,cancelToken) => {    
    const url = `task/${taskID}`;
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('task Update', response)
        return response.data;
    } catch (error) { 
        console.log('task  error', error)
        return {error:error};
    }
};

export const projectConferenceUpdate = async (projectId,data,cancelToken) => {    
    const url = `project/${projectId}`;
    const request = { type: 'PUT', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
         console.log('task Update', response)
        return response.data;
    } catch (error) { 
        console.log('task  error', error)
        return {error:error};
    }
};