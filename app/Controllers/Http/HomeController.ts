import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index({ inertia, auth }: HttpContextContract) {
        await auth.use('web').check();
        return inertia.render('Home', {
            user: auth?.user
        })
    }
}
