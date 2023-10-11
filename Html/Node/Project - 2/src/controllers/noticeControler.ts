import { Request, Response } from 'express';
import { Notice } from '../models/Notice';

export const form = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/noticia', {
        nome,
        idade
    });
};
export const formAdd = (req: Request, res: Response) => {
    Notice.addNotice(req.body.autor, req.body.titleNoticia, req.body.contentNoticia);

    let list = Notice.getAll();

    console.log(Notice.getAll());

    res.render('pages/noticia', {
        name: 'Fushisuno',
        lastName: 'Lacerda',
        notices: list
    });
};