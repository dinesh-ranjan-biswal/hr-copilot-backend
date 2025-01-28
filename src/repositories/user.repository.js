import { supabase } from "../config/supabaseclient.config.js";
class UserRepository {

  static async savedUserDetailsToSupbase(userDetails){
    const {data,error}=await supabase.auth.signUp({
      email:userDetails.email,
      password:userDetails.password,
      options:{
        data:{
          display_name:userDetails.fullName
        }
      }
    })
    return {data,error};
  }

  

  
  static async signInWithSupbase(email,password){
    const {data,error}=await supabase.auth.signInWithPassword({
      email,
      password
    });
    return {data,error};
  }
}

export default UserRepository;
