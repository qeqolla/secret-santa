import { Request, Response } from "express";

import { SecretSantaInstance } from "../../models/secret_santa";
import PlayerInterface from "../../models/player/player.interface";
import { v4 as uuidv4 } from "uuid";

class SecretSantaController {
    async create (obj: PlayerInterface) {
        try {
            const id = uuidv4()
            await SecretSantaInstance.create({id: id, receiver: obj});

        } catch (e) {
            let errorMessage = "failed to find"

            if (e instanceof Error) {
                errorMessage = e.message
            }

            console.log(errorMessage)
        }

    }

    async getById (req: Request, res: Response) {
        try {
            const {id} = req.params;
            const record = await SecretSantaInstance.findOne({where: {id}});

            return res.json(record);
        } catch (e) {
            let errorMessage = "failed to find"

            if (e instanceof Error) {
                errorMessage = e.message
            }
            return res.json({msg: errorMessage, status: 500, route: "/find/:id"});
        }
    }
}

export default new SecretSantaController()
