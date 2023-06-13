import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async me({ auth }: HttpContextContract){
        const user = await auth.use('web').authenticate();
        return user.toJSON()
    }
}
