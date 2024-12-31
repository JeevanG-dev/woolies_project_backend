import { runsRepository } from "../repository/runRepository.js";

export const runService = {
  createRun: async (userName, userPayId, details) => {

    const trasformDataIntoArray = details.route.split(',').map((segment)=> segment.trim().toUpperCase())


    const transformTimeInArray = details.timeTaken.split(',').map(segment => segment.trim().toUpperCase())


    try {
      const response = await runsRepository.createRuns({
        payrollId: userPayId,
        firstName: userName,
        route: trasformDataIntoArray,
        timeTaken: transformTimeInArray,
      });

      return response;

    } catch (error) {
      console.log(error);

      throw { message: "fail" };
    }
  },
};
