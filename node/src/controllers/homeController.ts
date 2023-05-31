import { Request, Response, NextFunction } from 'express';
import Customer from '../models/customer';
import homeRepository from '../repositories/homeRepository';

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await homeRepository.getCustomers();
    res.json(customers);
}

async function atualizaBanco(req: Request, res: Response, next: NextFunction) {
    var ret = await homeRepository.atualizaBanco();
    res.json(ret);
}

export default {
    getCustomers,
    atualizaBanco
}