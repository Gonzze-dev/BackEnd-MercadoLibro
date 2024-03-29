import { AppDataSource } from "./Connection/Connection"
import { Usuario } from "./Entities/Usuario"

const cron = require("node-cron")

async function resetContraseniasTemporales() {
    await AppDataSource
        .createQueryBuilder()
        .update(Usuario)
        .set({ contraseniaTemporal: null})
        .execute()
}

export async function cronResetContraseniasTemporales()
{
    cron.schedule('59 59 04 * * *', async () => {
        await resetContraseniasTemporales()
    })
}