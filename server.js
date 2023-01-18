import express from "express";
import cookieParser  from 'cookie-parser';
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/index.js";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v1`, router);

app.use((req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(8000, function () {
  console.info('Server is running on Port:' + 8000);
});

export default app;