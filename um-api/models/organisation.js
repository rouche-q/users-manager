import { Schema, model } from "mongoose"

const organisationSchema = new Schema(
    {
        name: {type: String, required: true},
    },
    {timestamp: true}
)

export default model("Organisation", organisationSchema)