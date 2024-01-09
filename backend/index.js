import app from "./src/app.js";
import { conn } from "./src/db.js";
import * as dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
