import { Router } from 'express'
const router  = Router();

import User from '../models/User'

router.get('/', (req, res) =>{
  res.send('Parabéns, funcionou');
});

router.get('/task', (req, res) =>{
  res.send('Pegando Tasks');
});

router.get('/user', (req, res) =>{
  res.json({"mgs": User.findUser()});
});

router.get('/task/:id', (req, res) =>{
  res.send('Pegando Task');
});

router.post('/task', (req, res) =>{
  res.send('Criando Task');
});

router.put('/task/:id', (req, res) =>{
  res.send('Editando Task');
});

router.delete('/task/:id', (req, res) =>{
  res.send('Deletando Task');
});

export default router;