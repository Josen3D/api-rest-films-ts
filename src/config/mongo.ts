// import connect from mongoose
import { connect } from "mongoose";

// create connection function
async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
}

// export connection
export default dbConnect;
