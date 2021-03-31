import {Document, Schema} from 'mongoose';
import * as mongoose from 'mongoose';

export interface IUser extends Document {
    name: string
}

const User: Schema = new Schema(
    {
        name: {
            type: String
        }
    }
)

export default mongoose.model<IUser>('users', User);
