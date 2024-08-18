import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Goal from "@/models/Goal";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    const data = await req.json();
    const updatedGoal = await Goal.findByIdAndUpdate(new ObjectId(id), data, {new: true});
    return NextResponse.json(updatedGoal);
}

export async function DELETE({params}: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    await Goal.findByIdAndDelete(new ObjectId(id));
    return NextResponse.json({ success: true });
}