import { DataTypes, Model } from 'sequelize';
import db from '../../../config/database.config';
import SecretSanta from "./secret_santa.interface";


export class SecretSantaInstance extends Model<SecretSanta> {
}

SecretSantaInstance.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    receiver: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: false,
    }
}, {
    sequelize: db,
    tableName: 'santa',
})
