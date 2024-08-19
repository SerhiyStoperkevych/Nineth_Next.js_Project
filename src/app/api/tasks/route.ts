import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Task from "@/models/Task";

export async function GET() {
    await dbConnect();
    const goals = await Task.find({});
    return NextResponse.json(goals);
};

export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const newTask = new Task(data);
    await newTask.save();
    return NextResponse.json(newTask);
};