import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

export const CONSTANTS = {
  DB_CONNECTED: 'database connected',
};

export const { PORT, DB_URI } = process.env;
