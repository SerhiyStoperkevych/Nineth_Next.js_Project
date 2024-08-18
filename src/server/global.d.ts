import mongoose from "mongoose";

declare global {
    var mongoose: {
        conn: mongoose.Connection | null
        promised: Promised<mongoose.Connection> | null
    }
}

export {};