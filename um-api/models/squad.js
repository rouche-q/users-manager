import { Schema, model } from "mongoose"

const squadSchema = new Schema(
    {
        name: {type: String, required: true},
        leader: {type: String, required: false},
        member1: {type: String, required: false},
        member2: {type: String, required: false},
        
    },
    {timestamp: true}
)

export default model("Squad", SquadSchema)