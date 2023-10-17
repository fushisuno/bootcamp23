import axios from "./Axios";
import { Task }  from '../interfaces/Task'

export const createTask = async (task: Task) =>{
  await axios.post('/task', {title: task.title, descricao: task.descricao})
} 
 
