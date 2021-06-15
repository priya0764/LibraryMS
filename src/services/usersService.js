import axios from "axios";

const LOCAL_HOST_URL = "http://localhost:8080/api";

class UsersService{
    async getAllUsers(){
        return await axios.get(LOCAL_HOST_URL+"/users");
    }

    async createUser(user){
        return await axios.post(LOCAL_HOST_URL+"/users/add/",user);
    } 

    async getUserById(userId){
        return await axios.get(LOCAL_HOST_URL + "/users/"+userId);
    }

    async updateUser(userId,user){
        return await axios.put(LOCAL_HOST_URL +"/users/update/"+ userId,user);
    }
    
    async deleteUser(userId){
        return await axios.delete(LOCAL_HOST_URL + "/users/"+ userId);
    }

    async login(loginentity){
        return await axios.post(LOCAL_HOST_URL+"/login",loginentity);
   }  
    async logout(userId){
           return await axios.get(LOCAL_HOST_URL+"logout"+userId);
   } 
 }

export default new UsersService(); 