import React from "react";

interface Props {
  name: string;
  label?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  style?: "normal" | "outline";
}

const Button: React.FC<Props> = ({
  name,
  label,
  type = "button",
  style = "normal",
  className
}) => {
  return (
    <div className={className}>
      {style === "normal" ? (
        <button
          type={type}
          className="text-white bg-gradient-to-r from-[#D145FC] to-[#9203BE] hover:rounded-md transition-all focus:ring-2 focus:outline-none focus:ring-purple-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {name}
        </button>
      ) : (
        <button 
        type={type}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#D145FC] to-[#9203BE] group-hover:from-[#D145FC] group-hover:to-[#9203BE] hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            {name}
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;
