import React from "react";
import Form from "../components/Form";

const Register = () => (
  <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#9e45b9] to-[#7304a7]">
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-10">
      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
        Cadastre-se
      </h1>
      <Form
        className="flex flex-col"
        onSubmit={(res) => {
          if(!res.errors) {
            window.location.href = "/";
          }
        }}
        postRoute="/api/register"
        fields={[
          {
            name: "name",
            type: "text",
            label: "Nome",
            placeholder: "Ex: João da Silva",
          },
          {
            name: "email",
            type: "email",
            label: "Email",
            placeholder: "Ex: exemplo@email.com",
          },
          {
            name: "username",
            type: "text",
            label: "Nome de usuário",
            placeholder: "Ex: joaosilva",
          },
          {
            name: "password",
            type: "password",
            label: "Senha",
            placeholder: "Insira sua senha",
          },
          {
            name: "password_confirmation",
            type: "password",
            label: "Confirme sua senha",
            placeholder: "Repita sua senha",
          },
        ]}
      />
    </div>
  </div>
);

export default Register;
