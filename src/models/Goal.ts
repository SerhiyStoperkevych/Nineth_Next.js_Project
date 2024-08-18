import mongoose, {Schema, model, models} from "mongoose";

export const GoalSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    targetDate: Date
});

const Goal = models.Goal || model('goals', GoalSchema);

export default Goal