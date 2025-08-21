import { useEffect, useState } from "react";

const TaskItem = ({ task }) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted ? "Finalizada" : "Não finalizada"}</p>
        </>
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
