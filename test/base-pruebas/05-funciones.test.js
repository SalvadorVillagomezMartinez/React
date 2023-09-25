import { getUser , getUsuarioActivo} from "../../src/base-pruebas/05-funciones"


describe('Pruebas en 05-funciones',()=>{

    test('GetUser debe retornar un objeto', ()=>{
   
        //1. Inicializacion
        const testUser = {
            uid : 'RedBullRacing',
            username : 'Max Verstappen'
        }
        // 2. estimulo
       const user = getUser();
       
        //3. Observar el comportamiento ... esperado
        expect(testUser).toEqual(user)
       
    })

    test('getUsuarioActivo debe retornar un objeto', ()=>{
   
        //1. Inicializacion
        const testUser = {
            uid : 'RedBullRacing',
            username : 'Max Verstappen'
        }
        // 2. estimulo
       const user = getUsuarioActivo('Max Verstappen');
       console.log(user)
       
        //3. Observar el comportamiento ... esperado
        expect(testUser).toEqual(user)
       
    })
})