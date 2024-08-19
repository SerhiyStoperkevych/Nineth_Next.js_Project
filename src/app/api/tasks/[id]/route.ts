import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Task from "@/models/Task";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    const data = await req.json();
    const updatedTask = await Task.findByIdAndUpdate(new ObjectId(id), data, {new: true});
    return NextResponse.json(updatedTask);
}

export async function DELETE({params}: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    await Task.findByIdAndDelete(new ObjectId(id));
    return NextResponse.json({ success: true });
}