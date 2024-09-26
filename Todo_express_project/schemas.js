import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String,      
        required: true,   
    },
    completed: {
        type: Boolean,    
        default: false,    
    },
  
});


// create the model from the schema

const Todo = mongoose.model('Todo',todoSchema)

export default Todo


