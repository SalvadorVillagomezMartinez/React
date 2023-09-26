
describe('Pruebas en <DemoComponent/>',()=>{

    test('Esta Prueba no debe de fallar', ()=>{
   
        //1. Inicializacion
       
        const message1 = 'Hola mundo'
        
        // 2. estimulo
        const message2 = message1.trim();
       
        //3. Observar el comportamiento ... esperado
        expect(message1).toBe(message2)
    })
})

