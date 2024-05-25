import * as dotenv from "dotenv";

dotenv.config();

const app = require('./src/app');

const PORT = parseInt(`${process.env.PORT || 3000}`);
app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));