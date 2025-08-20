const TaskItem = (props) => {
    // da pra fazer destructuring do props (usando {task}), aí tira o props do h1
    return (
        <>
            <h1>{props.task.description}</h1>
            <p>{props.task.isCompleted ? "Finalizada" : "Não finalizada"}</p>
        </>
    );
};

export default TaskItem;
// Mesmo que module.exports = TasItem
