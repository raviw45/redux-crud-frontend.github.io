import axios from "axios";



export async function AxiosRequest(url,method,headers,params){
    return params ? axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):
    axios({
        url:url,
        method:method,
        headers:headers,
        data:{ },
        timeout:1000
    })
};

const GetApiDetails=()=>{
    const headers={
        "Content_Type":"application/json"
    }
    return AxiosRequest("http://localhost:7890/",'GET',headers,{});
};

const PostApiDetails=(data)=>{
    const headers={
        "Content_Type":"application/json"
    }
    return AxiosRequest("http://localhost:7890/",'POST',headers,data);
};


const GetDetailsById=(id)=>{
    const headers={
        "Content_Type":"application/json"
    }
    return AxiosRequest("http://localhost:7890/"+id,'GET',headers,{});
};

const UpdateApiDetails=(data,id)=>{
    const headers={
        "Content_Type":"application/json"
    }
    return AxiosRequest("http://localhost:7890/"+id,'PUT',headers,data);
};


const DeleteApiDetails=(id)=>{
    const headers={
        "Content_Type":"application/json"
    }
    return AxiosRequest("http://localhost:7890/"+id,'DELETE',headers,{});
};

export  {GetApiDetails,PostApiDetails,GetDetailsById,UpdateApiDetails,DeleteApiDetails};