import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/crud";

if (!MONGODB_URI) {
    throw new Error('Failed to connect to MONGODB_URI')
};

