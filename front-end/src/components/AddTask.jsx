// Import de dependências
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

// Import de functions
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

// Import de arquivos
import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    // Hooks
    const [task, setTask] = useState("");

    // Metodos
    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.error(
                    "É preciso inserir uma descrição para adicionar uma tarefa!"
                );
            }

            await axios.post("https://fsc-fullstack.onrender.com/tasks", {
                description: task,
                isCompleted: false,
            });

            await fetchTasks();

            toast.success("Tarefa adicionada com sucesso!");

            setTask("");
        } catch (error) {
            return toast.error("Algo deu errado");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
