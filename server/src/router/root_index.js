import {Router} from 'express';

const root_index = Router();

root_index.get('/',(req,res)=>{
    console.log('Ingresaste al endpoint')
    res.send("<h1>Hola amigos</h1>")
})

export default root_index;