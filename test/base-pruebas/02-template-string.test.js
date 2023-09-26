import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string',()=>{

    test('GetSaludo debe retornar Max Verstappen You are the world champion', ()=>{
   
        //1. Inicializacion
        const name = 'Max Verstappen'
        const message = getSaludo(name);
        
        // 2. estimulo
       
        //3. Observar el comportamiento ... esperado
        expect(message).toBe( `${name} You are the world champion`)
       
    })
})