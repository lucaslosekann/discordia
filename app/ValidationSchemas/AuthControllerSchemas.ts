import { ParsedTypedSchema, RequestValidatorNode, TypedSchema, rules, schema } from "@ioc:Adonis/Core/Validator";

export const RegisterValidation: RequestValidatorNode<ParsedTypedSchema<TypedSchema>> = {
    schema: schema.create({
        email: schema.string({ trim: true }, [
            rules.email(),
            rules.unique({ table: 'users', column: 'email' })
        ]),
        password: schema.string({}, [
            rules.confirmed()
        ]),
        password_confirmation: schema.string(),
        name: schema.string({ trim: true }),
        username: schema.string({ trim: true }, [
            rules.unique({ table: 'users', column: 'username' })
        ])
    }),
    messages: {
        'required': 'Campo obrigatório',
        'email.email': 'Email inválido',
        'email.unique': 'Email já cadastrado',
        'password_confirmation.confirmed': 'Senhas não conferem',
        'username.unique': 'Nome de usuário já cadastrado'
    }
}


export const LoginValidation: RequestValidatorNode<ParsedTypedSchema<TypedSchema>> = {
    schema: schema.create({
        email_or_username: schema.string({ trim: true }),
        password: schema.string({}),
    }),
    messages: {
        'required': 'Campo obrigatório',
    }
}