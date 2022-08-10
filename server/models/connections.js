import mongoose from "mongoose";
const { Schema } = mongoose;

const ConnectionsSchema = new Schema(
  {
    social: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timeSeries: true }
);

ConnectionsSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
export default mongoose.model("Connections", ConnectionsSchema);
