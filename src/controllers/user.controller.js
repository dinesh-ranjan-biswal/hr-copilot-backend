import UserService from "../services/user.service.js";
import ApiError from "../utils/apierror.utils.js";
import  {Constants}  from "../utils/constant.utils.js";
import { handelDataNotFound, handelLogin, handelServerDataCreated, handleServerError } from "../utils/responsehandler/index.utils.js";

class UserController {

  static async createUserDetails(req,res){
      const {fullName,email,password}=req.body;
      if(!fullName || !email || !password){
        throw new ApiError(Constants.HTTPBADREQUEST,Constants.FAILED_STATUS,"Please provide all the required fields");
      }
      if(!email.includes("@") || !email.includes(".")){
        throw new ApiError(Constants.HTTPBADREQUEST,Constants.FAILED_STATUS,"Please provide a valid email address");
      }else if(typeof fullName !== "string" || fullName==="" || fullName===undefined){
        throw new ApiError(Constants.HTTPBADREQUEST,Constants.FAILED_STATUS,"Please provide a valid name");
      }else{
        const createUserDetails=await UserService.createUserDetails({fullName,email,password});
        createUserDetails? handelServerDataCreated(res,createUserDetails): handelDataInvalid(res);
      }
  }

  static async loginUser(req,res){
    const {email,password}=req.body;
    if(!email || !password){
      return handleServerError(res,"Please provide all the required fields",Constants.HTTPBADREQUEST);
    }else if(!email.includes("@") || !email.includes(".")){
      return handleServerError(res,"Please provide a valid email address",Constants.HTTPBADREQUEST);
    }else{
      const loginUserDetails=await UserService.loginUser({email,password});
      loginUserDetails? handelLogin(res,loginUserDetails): handelDataNotFound(res);
    }
  }
}

export default UserController;
