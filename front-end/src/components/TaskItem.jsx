import { MdDelete } from "react-icons/md";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
    return (
        <div className="app-container">
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? "checkbox-container-completed"
                                : "checkbox-container"
                        }
                    >
                        {task.description}{" "}
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                        />
                        <span
                            className={
                                task.isCompleted
                                    ? "checkmark completed"
                                    : "checkmark"
                            }
                        ></span>
                    </label>
                </div>

                <div className="delete">
                    <MdDelete />
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
// Mesmo que module.exports = TaskItem

// Para usar Componentes de Classe segue abaixo exemplo
// import React from "react";
// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log("component was mounted");
//     }

//     componentWillUnmount() {
//         console.log("I will unmount");
//     }

//     render() {
//         const { task } = this.props;

//         return (
//             <>
//                 <h1>{task.description}</h1>
//                 <p>{task.isCompleted ? "Finalizado" : "Não finalizado"}</p>
//             </>
//         );
//     }
// }

// export default TaskItem;
