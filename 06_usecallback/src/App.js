import { useState, useCallback } from "react";

import List from "./List";

const App = () => {
    const [text, setText] = useState("");
    const [resourceType, setResourceType] = useState("post");

    const getItems = useCallback(async () => {
        console.log("getItens is being called!");

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${resourceType}`
        );

        const responseJSON = await response.json();

        return responseJSON;
    }, [resourceType]);

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={() => setResourceType("post")}>Posts</button>
            <button onClick={() => setResourceType("comments")}>
                Comments
            </button>
            <button onClick={() => setResourceType("todos")}>Todos</button>

            <List getItems={getItems} />
        </div>
    );
};

export default App;
