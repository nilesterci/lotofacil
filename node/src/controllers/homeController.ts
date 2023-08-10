import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer';
import homeService from '../services/homeService';

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await homeService.getCustomers();
    res.json(customers);
}

async function atualizaBanco(req: Request, res: Response, next: NextFunction) {
    var ret = await homeService.atualizaBanco();
    res.json(ret);
}

async function retornaResultados(req: Request, res: Response, next: NextFunction) {
    var ret = await homeService.retornaResultados();
    res.json(ret);
}

export default {
    getCustomers,
    atualizaBanco,
    retornaResultados
}