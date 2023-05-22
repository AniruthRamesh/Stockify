import axios from  "axios"


export const profile = async () => {
    const response = await axios.get("http://localhost:8080/currentUser",{withCredentials:true})
    const user = response.data;
    
    return user;
   };