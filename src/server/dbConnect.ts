import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    throw new Error('Failed to connect to MONGODB_URI')
};

let cached = global.mongoose as any;

if (!cached) {
    cached = global.mongoose = { conn: null, promised: null };
}

async function dbConnect() {
    if(cached.conn) {
        return cached.conn;
    }

    if(!cached.promised) {
        const opts = { bufferCommands: false };

        cached.promised = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    };

    cached.conn = await cached.promised;
    return cached.conn
}

export default dbConnect;