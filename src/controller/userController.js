import { userService } from "../service/userService.js";

export const createUser = async (req, res) => {
  try {
    const response = await userService.addUsers(req.body);

    return res.json({
        message:"OK",
        data:response,
        success:true
    })
   
  } catch (error) {

    console.log(error);
    return res.status(400).json({
        message:"fail",
        data:{},
        success:false
    })
    

  }
};
