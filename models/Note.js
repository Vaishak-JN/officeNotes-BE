const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)

const { Schema } = mongoose;

const noteSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

//this will create a seperate collection called counter
//it will track and insert notes
// noteSchema.plugin(AutoIncrement, {
//     inc_field: "ticket",
//     id: "ticketNums",
//     start_seq: 500
// })

module.exports = mongoose.model("Note", noteSchema)