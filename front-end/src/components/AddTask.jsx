// Import de dependências
import { useState } from "react";

// Import de functions
import CustomInput from "./CustomInput";

// Import de arquivos
import "./AddTask.scss";

const AddTask = () => {
    const [task, setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div className="app-container">
            <div className="add-task-container">
                <CustomInput
                    label="Adicionar tarefa..."
                    value={task}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default AddTask;
