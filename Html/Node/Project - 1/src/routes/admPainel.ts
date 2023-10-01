import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Página do adm');
})

router.get('/details', (req, res) => {
    res.send('Detalhes do site');
})


export default router;