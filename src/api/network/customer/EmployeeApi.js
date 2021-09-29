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


//manager api crate project


export const createProject = async (data,cancelToken) => {    
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
