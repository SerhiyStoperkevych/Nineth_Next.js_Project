import { NextResponse } from "next/server";
import dbConnect from "@/server/dbConnect";
import Project from "@/models/Project";

export async function GET() {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json(projects);
};

export async function POST(req: Request) {
    await dbConnect();
    const data = await req.json();
    const newProject = new Project(data);
    await newProject.save();
    return NextResponse.json(newProject);
};