import app from './app';
import { config } from './config/config';
import { AppDataSource } from './helpers/Data-Source';


const port = config.port || 5000;

const connectToDB = async () => {
  await AppDataSource.initialize();
  console.log(`Connected to Database`);
};

connectToDB();



app.listen(Number(port), () => {
  console.log(`App listening on http://localhost:${port}`);
});
