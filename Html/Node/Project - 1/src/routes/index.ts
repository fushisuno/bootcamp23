// Permite cria rotas em arquivos externos e configura-las como rotas
import { Router, Request, Response } from 'express';

const router = Router();

// configurando página inicial
router.get('/', (req: Request, res: Response)=>{
    res.render('home');
});

// Trabalhando com rotas - Teoria das rotas
let route = 'darth-vader-mata-gaules'

// Rota Dinamica
// Meu pensamento:
/* router.get(`/notice/${route}`, (req: Request, res: Response)=>{
    res.send("Sua ma~e ésta azul")
});    */

// Jeito certo
router.get(`/notice/:slug`, (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
});

// Rota com 2 parametros
router.get(`/voo/:origem-:destino`, (req: Request, res: Response)=>{
    // let origin: string = req.params.origem;
    // let detin: string = req.params.destino;
    let { origem, destino } = req.params; 

    res.send(`Voo encontrado de ${origem.toLocaleUpperCase()} para ${destino.toLocaleUpperCase()}`);
});



router.get(`/notice`, (req: Request, res: Response)=>{
    res.send("Listando todas as noticias")
});

router.post(`/notice`, (req: Request, res: Response)=>{
    res.send("Crie sua noticia")
});


export default router;