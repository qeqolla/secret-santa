import morgan from 'morgan'
import express from 'express'
import cors from "cors";
import helmet from "helmet";
import router from "./secret_santa/route";



const app = express();

app.use(morgan('combined'))
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/secret-santa', router)


export default app
