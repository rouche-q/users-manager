import { Schema, model } from "mongoose"

const userSchema = new Schema(
    {
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        organisation: {type: String, required: false},
        role: {type: String, required: false},
    },
    {timestamp: true}
)

export default model("User", userSchema)