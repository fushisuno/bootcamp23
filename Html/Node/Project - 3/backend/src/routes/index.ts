import { Router, Request, Response } from "express";


const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    'pong': true
  });
});

router.get('/test', (req: Request, res: Response) => {
  res.send("oie");
});

router.post('/test', (req: Request, res: Response) => {
  console.log(req.body)
  res.json({
    'wqe': true
  });
});


export default router;