// Import de bibliotecas

// Import de componentes
import Tasks from "./components/Tasks.jsx";

const App = () => {
    return (
        <>
            <Tasks />
        </>
    );
};

export default App;

// Para usar componentes de classe segue exemplo abaixo
// import React from "react";
// import TaskItem from "./components/TaskItem";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleStateChange = this.handleStateChange.bind(this);
//         this.state = {
//             tasks: [
//                 {
//                     id: "1",
//                     description: "Estudar programação",
//                     isCompleted: false,
//                 },
//                 {
//                     id: "2",
//                     description: "Ler",
//                     isCompleted: true,
//                 },
//             ],
//         };
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevState);
//         console.log("component was update");
//     }

//     handleStateChange() {
//         this.setState({
//             tasks: [],
//         });
//     }

//     render() {
//         return (
//             <>
//                 {this.state.tasks.map((task) => (
//                     <TaskItem key={task.id} task={task} />
//                 ))}
//                 <button onClick={this.handleStateChange}>Limpar tarefas</button>
//             </>
//         );
//     }
// }

// export default App;
