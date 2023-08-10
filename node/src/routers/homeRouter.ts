import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

router.get('/', homeController.getCustomers);
router.get('/atualizaBanco', homeController.atualizaBanco);
router.get('/retornaResultados', homeController.retornaResultados);

export default router;