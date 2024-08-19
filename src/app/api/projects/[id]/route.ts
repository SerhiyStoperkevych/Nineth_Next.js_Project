import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Project from "@/models/Project";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    const data = await req.json();
    const updatedProject = await Project.findByIdAndUpdate(new ObjectId(id), data, {new: true});
    return NextResponse.json(updatedProject);
}

export async function DELETE({params}: {params: {id: string}}) {
    await dbConnect();
    const {id} = params;
    await Project.findByIdAndDelete(new ObjectId(id));
    return NextResponse.json({ success: true });
}