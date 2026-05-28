import Fastify from 'fastify';

const fastify = Fastify();
const port = 3000;

fastify.get('/', async () => {
    return 'Timeweb Cloud + Fastify on bun';
});

fastify.listen({ port, host: '0.0.0.0' }).then((address) => {
    console.log(`Server running on ${address}`);
});
