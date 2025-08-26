import { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "add-task":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { name: action.payload, isCompleted: false },
                ],
            };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, { tasks: [] });

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add-task", payload: inputValue });
                    setInputValue("");
                }}
            >
                Adicionar
            </button>

            {state.tasks.map((task) => (
                <p>{task.name}</p>
            ))}
        </div>
    );
};

export default App;

// import { useReducer } from "react";

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "increment":
//             return {
//                 counter: state.counter + 1,
//             };
//         case "decrement":
//             return {
//                 counter: state.counter - 1,
//             };
//         default:
//             return state;
//     }
// };

// const App = () => {
//     const [state, dispatch] = useReducer(reducer, { counter: 0 });

//     return (
//         <div>
//             <p>{state.counter}</p>
//             <button onClick={() => dispatch({ type: "increment" })}>
//                 Increment
//             </button>
//             <button onClick={() => dispatch({ type: "decrement" })}>
//                 Decrement
//             </button>
//         </div>
//     );
// };

// export default App;
