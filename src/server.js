import server from './server/index.js';

const port = Number(process.env.PORT) || 5000;
const host = process.env.HOST || 'localhost';

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});