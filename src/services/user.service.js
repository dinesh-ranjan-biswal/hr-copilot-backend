import UserRepository from "../repositories/user.repository.js";
import ApiError from "../utils/apierror.utils.js";
import { Constants } from "../utils/constant.utils.js";
class UserService {

    static async createUserDetails(userDetails){
        const {data,error}= await UserRepository.savedUserDetailsToSupbase(userDetails);
        if(error){
            throw new ApiError(Constants.HTTPINTERNALSERVERERROR,Constants.FAILED_STATUS,error.message);
        }else{
            return data;
        }
        
    }

    static async loginUser(userDetails){
        const {email,password}=userDetails;
        const {data,error}=await UserRepository.signInWithSupbase(email,password);
        if(error){
            throw new ApiError(Constants.HTTPINTERNALSERVERERROR,Constants.FAILED_STATUS,error.message);
        }else{
            return {token:data.session.access_token,user:data.user};
        }    
    }

    static async signoutUser(userId){
        const error=await UserRepository.signoutUser(userId);
        console.log(error);
        if (error) {
            throw new ApiError(Constants.HTTPINTERNALSERVERERROR,Constants.FAILED_STATUS,"Failed to log out user");
        }else{
            return true;
        }
        
    }
}

export default UserService;
