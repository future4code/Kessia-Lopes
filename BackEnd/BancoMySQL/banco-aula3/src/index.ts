import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";



dotenv.config();



const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});



const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getActorByName = async(name: string): Promise<any> =>{
  const result = await connection.raw(
   ` SELECT * FROM Actor WHERE name = '${name}'`
  )
  return result [0][0]
}
//console.log(getActorByName)


const countActors = async (gender: string): Promise<any> =>{
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
  `);
  const count = result[0][0].count;
  return count;
}
//console.log(countActors)

const updateActor = async(id: string, salary: number): Promise<any> =>{
  await connection('Actor')
  .update({
    salary: salary,
  }).where('id',id);
};
//console.log(updateActor)

const avgSalary = async (gender: string): Promise<any> =>{
  const result = await connection('Actor')
  .avg('salary as average').where({gender})
  return result[0].average;
}
//console.log(avgSalary)

app.get("/actor?gender=", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});