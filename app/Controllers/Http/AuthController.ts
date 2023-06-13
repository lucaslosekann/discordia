import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import { LoginValidation, RegisterValidation } from 'App/ValidationSchemas/AuthControllerSchemas';

export default class AuthController {
    public async login({ inertia }: HttpContextContract) {
        return inertia.render('Login')
    }
    public async ActionLogin({ request, auth }: HttpContextContract) {
        const payload = await request.validate(LoginValidation)
        await auth.use('web').attempt(payload.email_or_username, payload.password, true);
    }


    public async register({ inertia }: HttpContextContract) {
        return inertia.render('Register')
    }
    public async ActionRegister({ request, auth }: HttpContextContract) {
        const payload = await request.validate(RegisterValidation)

        await User.create({
            email: payload.email,
            password: payload.password,
            displayName: payload.name,
            username: payload.username
        });
        await auth.use('web').attempt(payload.email, payload.password, true);
    }
}
