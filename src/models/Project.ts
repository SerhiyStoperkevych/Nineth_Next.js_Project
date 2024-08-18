import mongoose, {Schema, model, models} from "mongoose";

export const ProjectSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

const Project = models.Project || model('projects', ProjectSchema);

export default Project