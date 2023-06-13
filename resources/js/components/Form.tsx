import axios, { AxiosResponse } from "axios";
import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

type FormErrors = {
    [key: string]: string;
};

type SubmitResponse = {
    formEvent: React.FormEvent<HTMLFormElement>;
    errors?: FormErrors;
    response?: AxiosResponse;
};
interface Props {
    className?: string; 
    onSubmit: (res: SubmitResponse) => void;
    setErrors?: (data: {
        error?: any;
        response?: AxiosResponse;
    }) => FormErrors | null;
    postRoute: string;
    fields: {
        name: string;
        type: string;
        label: string;
        placeholder?: string;
        value?: string;
    }[];
}

const Form: React.FC<Props> = ({ onSubmit, postRoute, fields, className, setErrors: externalSetErrors }) => {
    const [errors, setErrors] = React.useState<FormErrors | null>(null);
    return (
        <form
            className={className}
            onSubmit={async (e) => {
                e.preventDefault();

                const payload = fields.reduce((acc, field) => {
                    acc[field.name] = e.currentTarget[field.name].value;
                    return acc;
                }, {} as any);
                let response;
                let errors;
                try {
                    response = await axios.post(postRoute, payload);
                    if(externalSetErrors){
                        errors = externalSetErrors({
                            response
                        });
                    }
                    setErrors(errors);
                } catch (error) {
                    if (error.response.status === 422) {
                        error?.response?.data?.errors?.forEach((element) => {
                            errors = {
                                ...errors,
                                [element.field]: element.message,
                            };
                        });
                        setErrors(errors);
                    }
                    if(!errors && externalSetErrors){
                        errors = externalSetErrors({
                            error,
                            response: error.response,
                        });
                        setErrors(errors);
                    }
                    if(!errors){
                        errors = [
                            {
                                "general_error": "Algo de errado aconteceu...",
                            }
                        ]
                        setErrors(errors);
                    }
                }
                onSubmit({
                    formEvent: e,
                    errors,
                    response,
                });
            }}
        >
            {fields.map((field, index) => (
                <TextInput
                    key={index}
                    name={field.name}
                    type={field.type}
                    label={field.label}
                    value={field.value}
                    placeholder={field.placeholder}
                    error={errors && errors[field.name]}
                    className="mb-4"
                />
            ))}
            <Button name="Enviar" type="submit" className="mt-4 mx-auto" />
        </form>
    );
};

export default Form;
