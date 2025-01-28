import UserController from "../../controllers/user.controller.js";


export default (router)=>{
    router.post('/users/createuser',UserController.createUserDetails);
    router.post('/users/login',UserController.loginUser);
}