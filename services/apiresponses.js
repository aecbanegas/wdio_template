import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const AS_BASE_URL = process.env.WEB_API;
//TODO Actualizar a la nueva api
export const login = async(userName,password) => {
    try {
        let response = await axios.post(AS_BASE_URL + "/Account/v1/Login", {
            userName,password
        } , {
            headers: {
                "content-type": "application/json"
            }
                    })
        return response.data;
    } catch (error) {
        console.error(error)
    }
} 
export const getUserData = async(userName,password)=>{
    try {
        let {userId,token} = await login(userName,password)
        let response = await axios.get(AS_BASE_URL + "/Account/v1/User/" + userId, {
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
                      }
                    })
        return response.data;
        //se pueden recuperar los libros con .books
    } catch (error) {
        console.error(error)
    }
}