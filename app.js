import express from "express";
import "core-js";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
//import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";

import videoRouter from "./routers/videoRouter";

import routes from "./routes";

const app = express();




app.use(cookieParser());
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;




