import React from "react";

const Card = (props) => {
    return (
        <div className="w-full h-full lg:w-auto flex flex-col items-center gap-4">
            <div
                className="w-72 h-96 lg:w-56 lg:h-72 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${props.Data.url})` }}
            ></div>
            <h3 className="text-white font-semibold text-xl">
                {props.Data.name}
            </h3>
        </div>
    );
};

export default Card;
