import mongoose from 'mongoose';
import { config } from 'config/mongodb';

export const connectMongoose = async (): Promise<void> => {
    if (mongoose.connection.readyState !== 0) return;
    // mongoose.set('debug', true);
    const uri = `mongodb+srv://${config.username}:${config.password}@${config.databaseURI}?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(uri);
    } catch (error) {
        if (error && typeof error === 'object' && 'message' in error) {
            throw new Error(`error connecting to MongoDB: ${error.message}`);
        } else {
            throw new Error(`error connecting to MongoDB`);
        }
    }
};

export const closeMongoose = async (): Promise<void> => {
    const readyState = mongoose.connection.readyState;
    if (readyState === 0 || readyState === 3) return;
    await mongoose.connection.close();
};
