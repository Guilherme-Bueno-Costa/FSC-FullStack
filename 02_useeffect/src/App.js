import { useState, useEffect } from "react";

const App = () => {
    const [resourceType, setResourceType] = useState("post");

    useEffect(() => {
        console.log("Resource typo changed!");
    }, [resourceType]);

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    };

    return (
        <div>
            <h1>{resourceType}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
                <button
                    onClick={() => {
                        changeResourceType("post");
                    }}
                >
                    Post
                </button>
                <button
                    onClick={() => {
                        changeResourceType("comments");
                    }}
                >
                    Comments
                </button>
                <button
                    onClick={() => {
                        changeResourceType("todos");
                    }}
                >
                    Todos
                </button>
            </div>
        </div>
    );
};

export default App;
