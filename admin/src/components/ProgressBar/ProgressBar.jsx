import React from "react";

const ProgressBar = ({
    value = 0,
    type = "default",
    height = 8,
    width = 80,
}) => {
    const progress = Math.min(Math.max(Number(value) || 0, 0), 100);

    const progressColor =
        type === "success"
            ? "bg-green-600"
            : type === "danger"
                ? "bg-red-500"
                : type === "warning"
                    ? "bg-yellow-500"
                    : "bg-blue-500";

    return (
        <div
            className="overflow-hidden rounded-full bg-gray-200"
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${progressColor}`}
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
};

export default ProgressBar;