import { Router, Request, Response } from 'express'
const router  = Router();

import User from '../models/User'
import Task from '../models/Task'



router.get('/tasks', async (req, res) =>{
  const tasks = await Task.findTasks()
  res.status(200).json({"task": tasks});
});

router.get('/user', async (req, res) =>{
  res.json({"msg": 'ok'})
});

router.get('/task/:id', async (req, res) =>{
  const { id } =  req.params;
  const task = await Task.findTaskToken(id)
  res.status(200).json({"task": task});
});

router.post('/task', async (req: Request, res: Response) =>{
  const {title, descricao, token} = req.body
  const taskIn = await Task.findTaskToken(token)

  try {
    if(taskIn == undefined || !taskIn){
      const task = new Task(title, descricao, token)
      task.insertTask()
      res.status(201).json({"task": task});
    }else{
      res.status(406).json({"error": {"msg": "Task já foi inserida"}});
    }
  } catch (error) {
    console.log("Error no post")
  }
 
});

router.put('/task/:id', async (req, res) =>{
  const {title, descricao} = req.body
  const { id } = req.params
  const taskIn = await Task.findTaskToken(id)

  if(taskIn){
    const task = new Task(title, descricao, id)
    task.updateTask()
    res.status(201).json({"task": task});
  }else{
    res.status(406).json({"error": {"msg": "Task não existe"}});
  }
});

router.delete('/task/:id', async (req, res) =>{
  const { id } = req.params
  try{
    Task.deleteTask(id);
    res.status(200).json({"task": "Deletada"});
  }catch{
    res.status(406).json({"error": {"msg": "Task não deletada"}});
  } 
});

export default router;