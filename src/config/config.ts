
const SERVER_PROTOCOL = 'http';
const SERVER_HOSTNAME = 'localhost';
const SERVER_PORT = 8000;
const SERVER_PREFIX = 'api'

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    prefix: SERVER_PREFIX,
    url: `${SERVER_PROTOCOL}://${SERVER_HOSTNAME}:${SERVER_PORT}/${SERVER_PREFIX}`
};

const BASE_PROTOCOL = 'http';
const BASE_HOSTNAME = 'localhost';
const BASE_PORT = 8081;

const BASE = {
    hostname: BASE_HOSTNAME,
    port: BASE_PORT,
    url: `${BASE_PROTOCOL}://${BASE_HOSTNAME}:${BASE_PORT}`
};

const WSS_URL = "http://localhost:8000"

const WSS = {
    url: WSS_URL
}


const config = {
    server: SERVER,
    base: BASE,
    wss: WSS
}

export default config