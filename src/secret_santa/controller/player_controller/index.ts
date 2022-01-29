import { Request, Response } from "express";

import { PlayerInstance } from "../../models/player";
import { v4 as uuidv4 } from "uuid";
import { SecretSantaInstance } from "../../models/secret_santa";

class PlayerController {
    async create (req: Request, res: Response) {
        try {
            await SecretSantaInstance.destroy({
                where: {},
                truncate: true
            })

            let count = await PlayerInstance.count({where: {}})

            if (count > 499) {
                throw new Error("Maximum number of players is 500")
            }

            const id = uuidv4()

            const record = await PlayerInstance.create({...req.body, id});
            return res.json({record, msg: `Successfully create new player`});
        } catch (e) {
            let errorMessage = "Failed to create player"

            if (e instanceof Error) {
                errorMessage = e.message
            }
            return res.json({msg: errorMessage, status: 500, route: "/create"});
        }
    }

    async getAll () {
        try {
            return await PlayerInstance.findAll({})
        } catch (e) {
            let errorMessage = "Failed to get all players"

            if (e instanceof Error) {
                errorMessage = e.message
            }
            console.log(errorMessage);
        }
    }
}

export default new PlayerController()
