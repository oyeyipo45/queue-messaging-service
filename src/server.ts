import app from './app';
import { config } from './config/config';


const port = config.port || 5000;


app.listen(Number(port), () => {
  console.log(`App listening on http://localhost:${port}`);
});
