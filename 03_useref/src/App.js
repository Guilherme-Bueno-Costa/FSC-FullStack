import { useState, useRef, useEffect } from "react";

const App = () => {
    const [name, setName] = useState("");

    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello! My name is {name}</p>
        </div>
    );
};

export default App;
