import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promised: Promise<mongoose.Connection> | null;
  };
}

export {};
