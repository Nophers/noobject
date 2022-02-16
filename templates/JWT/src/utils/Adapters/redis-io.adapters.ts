/* eslint-disable prettier/prettier */
import { IoAdapter } from "@nestjs/platform-socket.io";
import { RedisClient } from 'redis';
import { ServerOptions } from 'socket.io';
import { createAdapter } from 'socket.io-redis';

const pubClient = new RedisClient({ host: 'localhost', port: 8000});
const subClient = pubClient.duplicate();
const redisApapter = createAdapter({ pubClient, subClient});


export class RedisAdapter extends IoAdapter {

    createIOServer(port: number, options?: ServerOptions): void {
        const server = super.createIOServer(port, options);
        server.adapter(redisApapter)
        return server; 
    }
}