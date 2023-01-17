import { GET_DETAILS, UPDATE_DETAILS ,DELETE_DETAILS} from "../constants";
import {DeleteApiDetails, GetApiDetails, UpdateApiDetails } from "../../api/axiosRequest";
import { PostApiDetails } from "../../api/axiosRequest";
import { POST_DETAILS } from "../constants";
import { toast } from "react-toastify";
const GetApiAction=()=>{
    return function(dispatch){
        return GetApiDetails().then((res)=>{
            dispatch({
                type:GET_DETAILS,
                payload:res.data
            });
        });
    }
    
};

const PostApiAction=(request)=>{
    return function(dispatch){
        return PostApiDetails(request).then((res)=>{
            if(res.data)  toast.success("Data Inserted!!!!!!");
            else toast.error("Not able to Add. Try Again!!!!");
            dispatch({
                type:POST_DETAILS,
                payload:'',
            });
        });
    }
    
};


const UpdateApiAction=(request,id)=>{
    return function(dispatch){
        return UpdateApiDetails(request,id).then((res)=>{
            if(res.data)  toast.success("Data Updated!!!!!!");
            else toast.error("Not able to Update. Try Again!!!!");
            dispatch({
                type:UPDATE_DETAILS,
                payload:'',
            });
        });
    }
    
};


const DeleteApiAction=(id)=>{
    return function(dispatch){
        return DeleteApiDetails(id).then((res)=>{
            if(res.data)  toast.success("Data Deleted!!!!!!");
            else toast.error("Not able to Detail. Try Again!!!");
            window.location.reload(false);
            dispatch({
                type:DELETE_DETAILS,
                payload:'',
            });
        });
    }
    
};


export {GetApiAction,PostApiAction,UpdateApiAction,DeleteApiAction};