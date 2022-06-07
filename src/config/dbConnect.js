import mongoose from "mongoose";
mongoose.connect("mongodb+srv://ivn:123@first.ivk2v.mongodb.net/First")
let db = mongoose.connection
export default db
