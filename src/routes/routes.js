import { Router } from 'express';
import * as PokedexController from '../controllers/PokedexController.js';

const routes = Router();

routes.get('/pokedex', PokedexController.getAll);
routes.get('/pokedex/:id', PokedexController.getOne);
routes.get('/pokedex/type/:type', PokedexController.getByType);

export default routes;