import { Router } from 'express'
const router  = Router();

import User from '../models/User'
import Task from '../models/Task'

router.get('/', (req, res) =>{
  res.send('Parabéns, funcionou');
});

router.get('/task', (req, res) =>{
  res.json({"mgs": ""});
});

router.get('/user', (req, res) =>{
  res.json({"mgs": ""});
});

router.get('/task/:id', (req, res) =>{
  const task = new Task('', '', req.body.token);
  task.findTaskToken()
  res.send('Pegando Task');
});

router.post('/task', async (req, res) =>{
  const {title, descricao, token} = req.body
  const task = new Task(title, descricao, token)
  const taskIn = await task.findTaskToken()

  if(taskIn == undefined || !taskIn){
    task.insertTask()
    res.status(201).json({"task": task});
  }else{
    res.status(201).json({"error": {"msg": "Task já foi inserida"}});
  }
  
});

router.put('/task/:id', (req, res) =>{
  res.send('Editando Task');
});

router.delete('/task/:id', (req, res) =>{
  res.send('Deletando Task');
});

export default router;