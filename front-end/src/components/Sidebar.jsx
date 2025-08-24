// Import de arquivos
import "./Sidebar.scss";

// Import de images
import logo from "../assets/images/1111.png";

// Import de functions
import CustomButton from "./CustomButton";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Stack Club" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
