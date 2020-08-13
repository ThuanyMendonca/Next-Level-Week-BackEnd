import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();

const connectionsControllers = new ConnectionsController();
// GET: Buscar ou listar uma informações
// POST: Criar uma nova informação
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação

// Corpo (Request Body): Dados para a criação ou atualização de um registro
// Route Params: identifica qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenações
routes.post('/classes', classesControllers.create); 
routes.get('/classes', classesControllers.index); 

routes.post('/connections',connectionsControllers.create);
routes.get('/connections',connectionsControllers.index);
export default routes;
