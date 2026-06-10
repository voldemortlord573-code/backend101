import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: { //kisne kiya hai
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: { // kise kiya hai
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)