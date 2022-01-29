import { DataTypes, Model } from 'sequelize';
import db from '../../../config/database.config';
import { PlayerDB } from "./player.interface";




export class PlayerInstance extends Model<PlayerDB> {
}

PlayerInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    wishes: {
        type: DataTypes.JSON,
        allowNull: false,
    }
}, {
    sequelize: db,
    tableName: 'users',
})

export default new PlayerInstance()
