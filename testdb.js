import { getUserData } from "./services/apiresponses.js";
import { JsonDB, Config } from 'node-json-db';

// The first argument is the database filename. If no extension, '.json' is assumed and automatically added.
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
var db = new JsonDB(new Config("myDataBase", true, true, '/'));

const response = await getUserData(process.env.KEY,process.env.PASSWORD)
await db.push("/myDataBase",response);
console.log(response);

const respuesta = await db.getData("/myDataBase");
console.log('Respuesta db:',respuesta)

await db.push("/myDataBase",{"name":"Andres"});
