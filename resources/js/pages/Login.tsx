import React from "react";
import Form from "../components/Form";

const Login = () => (
  <div className="flex justify-center items-center w-full h-full bg-gradient-to-r from-[#9e45b9] to-[#7304a7]">
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-4 px-10">
      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
        Olá novamente! Faça seu login
      </h1>
      <Form
        className="flex flex-col"
        setErrors = {(res) => {
          if(res?.response.data?.errors?.find((element) => element?.message?.includes("E_INVALID_AUTH_PASSWORD"))) {
            return {
              "password": "Senha incorreta",
            }
          }
          if(res?.response.data?.errors?.find((element) => element?.message?.includes("E_INVALID_AUTH_UID"))) {
            return {
              "email_or_username": "Credencial não encontrada",
            }
          }
          return null;
        }}
        onSubmit={(res) => {
          if(!res.errors && res.response) {
            console.log(res)
            window.location.href = "/";
          }
        }}
        postRoute="/api/login"
        fields={[
          {
            name: "email_or_username",
            type: "text",
            label: "Email ou nome de usuário",
            placeholder: "Ex: exemplo@email.com ou joaosilva",
          },
          {
            name: "password",
            type: "password",
            label: "Senha",
            placeholder: "Insira sua senha",
          }
        ]}
      />
    </div>
  </div>
);

export default Login;
