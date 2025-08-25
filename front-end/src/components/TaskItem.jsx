// Import de dependências
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'

// Import de arquivos
import './TaskItem.scss'

const TaskItem = ({ task, fetchTasks }) => {
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${task._id}`)

      await fetchTasks()

      toast.success(`Tarefa [${task.description}] deletada com sucesso!`)
    } catch (_e) {
      toast.error('Erro ao deletar a tarefa!')
    }
  }

  const handleTaskUpdate = async (e) => {
    try {
      await axios.patch(
        `https://fsc-fullstack.onrender.com/tasks/${task._id}`,
        {
          isCompleted: e.target.checked
        }
      )

      await fetchTasks()

      toast.success(`A tarefa [${task.description}] foi atualizada!`)
    } catch (_e) {
      toast.error('Erro ao atualizar a tarefa!')
    }
  }

  return (
    <div className='task-item-container'>
      <div className='task-description'>
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input
            type='checkbox'
            checked={task.isCompleted}
            onChange={(e) => handleTaskUpdate(e)}
          />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className='delete'>
        <MdDelete onClick={handleTaskDeletion} />
      </div>
    </div>
  )
}

export default TaskItem
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
