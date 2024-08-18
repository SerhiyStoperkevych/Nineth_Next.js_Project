import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Goal from "@/models/Goal";

export async function GET() {
    await dbConnect();
    const goals = await Goal.find({});
    return NextResponse.json(goals);
};

export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const newGoal = new Goal(data);
    await newGoal.save();
    return NextResponse.json(newGoal);
};