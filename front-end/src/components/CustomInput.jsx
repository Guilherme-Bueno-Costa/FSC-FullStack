const CustomInput = ({ label, value }) => {
    return (
        <div className="app-container">
            <div className="custom-input-container">
                <input type="text" className="custom-input" />

                {label ? (
                    <label
                        className={`${
                            value.lenght != "" ? "shrink" : ""
                        } custom-input-label`}
                    ></label>
                ) : null}
            </div>
        </div>
    );
};

export default CustomInput;
