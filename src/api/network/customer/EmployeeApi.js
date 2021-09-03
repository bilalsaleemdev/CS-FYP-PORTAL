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



export const ManagerProfileCreate = async (user_id, first_name,last_name, dob,gender,address,country, cancelToken) => {    
    const url = `users-profile`;
    const data = { 'user_id': user_id , 'first_name':first_name,'last_name':last_name, 'dob':dob ,'gender':gender,'address':address, 'country':country};
    const request = { type: 'POST', urlString: url, params: data };
    try {
         const response = await processRequest(request, cancelToken); 
        return response.data;
    } catch (error) { 
        return {error:error};
    }
};


