import Todo from "./schemas.js";


// get all tasks
async function getAllTasks(req,res){
    const tasks = await Todo.find();
    if(tasks){
        res.json(tasks)
    }else{
        res.status(500).json({message: "Error fetching tasks"})
    }
}

// add new task

async function addTask(req,res){
    const {task} = req.body
    const newTask = new Todo({task: task, completed:false})
    const savedTask = await newTask.save()

    if(savedTask){
        res.json(savedTask)
    }
    else{
        res.status(500).json({message: "Error adding task"})
    }
}

// delete a task

async function deleteTask(req,res){
    const {id} = req.params
    const deleteTask = await Todo.findByIdAndDelete(id)

    if(deleteTask){
        res.json({message: "Task deleted"})
    }
    else{
        res.status(500).json({message: 'Error deleting task'})
    }
}


// update an existing task

async function updateTask(req, res) {
    const { id } = req.params;
    const { task, completed } = req.body;

    const updatedTask = await Todo.findByIdAndUpdate(
        id,
        { task, completed },
        { new: true } // This returns the updated document
    );

    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
}



export {getAllTasks, addTask, deleteTask, updateTask}