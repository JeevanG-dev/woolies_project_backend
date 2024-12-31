import { runService } from "../service/runService.js"


export const runController = async (req, res)=>{


    try {
        
    await runService.createRun(req.user.firstName, req.user.payrollId, req.body)

        return res.status(200).send("Thanks for loading..")

    } catch (error) {

        console.log(error);

        res.send("No Trucks left")
        
        
    }

   
    
}