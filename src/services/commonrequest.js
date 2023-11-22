import axios from "axios";

// function definition common request
export const commonRequest=async(method,url,body)=>{

    // request configaration
    let reqConfig={
  
        url,
        method,
        data:body,
        headers:{
            "content-type":"application/json" 
                            // multipart from data - other files
        }
    }
    
    // api call using axios library
    return await axios(reqConfig).then((response)=>{
        return response
    }).catch((error)=>{
        return error
    })

}


