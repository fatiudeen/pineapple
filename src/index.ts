import { Server } from 'socket.io';
import { PORT } from '@config';
import logger from '@logger';
// import morgan from 'morgan';
import DB from '@helpers/db';

const io = new Server({
  /* options */
});
// io.use(morgan('dev'));
DB();
io.on('connection', (socket) => {
  // ...
  logger.info(socket.id);
});
logger.info(PORT);

io.listen(<number>(<unknown>PORT));
