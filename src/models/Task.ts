import mongoose, {Schema, model, models} from "mongoose";

export const TaskSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    dueDate: Date,
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: "Low"
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = models.Task || model('tasks', TaskSchema);

export default Task