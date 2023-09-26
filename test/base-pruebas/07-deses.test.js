import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses',()=>{

    test('GetUser debe retornar un string y un numero', ()=>{
   
        //1. Inicializacion
        const [ letters , numbers] = retornaArreglo();
        // 2. estimulo
      
        //3. Observar el comportamiento ... esperado
       expect(letters).toBe('ABC');
       expect(numbers).toBe(123);

       expect(typeof numbers).toBe('number');
       expect(typeof letters).toBe('string');
       
       expect(letters).toStrictEqual( expect.any(String));
   
       
    })

    
})