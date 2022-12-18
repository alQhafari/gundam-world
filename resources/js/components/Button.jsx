import React from "react";

const Button = (props) => {
    return (
        <div className="w-full h-full  bg-button font-semibold text-md px-6 py-3 rounded-lg">
            {props.props}
        </div>
    );
};

export default Button;
