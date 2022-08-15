import mongoose from 'mongoose';
import { CONSTANTS, DB_URI } from '@config';
import logger from '@logger';

export default async () => {
  try {
    await mongoose.connect(<string>DB_URI);
    logger.info(CONSTANTS.DB_CONNECTED);
  } catch (error) {
    logger.error(error);
  }
};
