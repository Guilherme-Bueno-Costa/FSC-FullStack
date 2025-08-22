// Import de arquivos
import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div className="app-container">
            <div className="custom-input-container">
                <input
                    type="text"
                    className="custom-input"
                    onChange={(e) => onChange(e)}
                />

                {label ? (
                    <label
                        className={`${
                            value.length > 0 ? "shrink" : ""
                        } custom-input-label`}
                    >
                        {label}
                    </label>
                ) : null}
            </div>
        </div>
    );
};

export default CustomInput;
