import { PeerServer } from "peer";
import cors from 'cors';

const server = PeerServer({
    port: 9000,
    path: '/p2p'
});

server.use(cors());

console.log("P2P Server is online!");