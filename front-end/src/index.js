// Import de dependencias
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, Flip } from "react-toastify";

// Import de arquivos
import "./index.scss";

// Import de functions
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnHover={true}
            pauseOnFocusLoss={true}
            theme="dark"
            transition={Flip}
        />
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
