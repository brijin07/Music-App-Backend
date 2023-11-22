import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";

// add video function
export const addVideo=async (body)=>{
   return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

// get video  --- view
export const getVideo=async ()=>{
   return await commonRequest("GET",`${BASE_URL}/videos`,"")
}

// delete
export const deleteVideo=async (id)=>{
   return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// add categories
export const addCategory=async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}

// get catogory
export const getallCategories=async()=>{
   return await commonRequest("GET",`${BASE_URL}/categories`,"")
}

// delete category
export const deleteCategory=async (id)=>{
   return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// get hisory
export const getHistory=async()=>{
   return await commonRequest("GET",`${BASE_URL}/watchhistory`,"")
}

// Add hisory
export const addHistory=async(body)=>{
   return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
}

// get single card details(drag)
export const getsingleVideo=async (id)=>{
   return await commonRequest("GET",`${BASE_URL}/videos/${id}`,"")
}

// to update card details in category section
export const updateCategory=async (id,body)=>{
   return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}