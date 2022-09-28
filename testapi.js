import { getUserData, login } from "./services/apiresponses.js";

// const response= await login(process.env.KEY, process.env.PASSWORD);

const response = await getUserData(process.env.KEY,process.env.PASSWORD)

console.log(response);