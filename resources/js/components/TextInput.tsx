import React from "react";

interface Props {
    name: string;
    label: string;
    type: string;
    value?: string;
    error?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ name, label, type, value, error, onChange, placeholder, className }) => {
    return (
        <div className={className}>
            <label htmlFor={name}
            className={
                error ? "block mb-2 text-sm font-medium text-red-700" :
                "block mb-2 text-sm font-medium text-gray-900"
            }>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={
                    error ?
                    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" : 
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                }
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
}

export default TextInput;