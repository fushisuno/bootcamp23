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


export default router;