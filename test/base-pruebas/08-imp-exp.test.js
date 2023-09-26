import { getPilotById , getHeroesByOwner , getPilotByTeam} from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en 08-import',()=>{

    test('getPilotById debe retornar un Piloto', ()=>{
   
        //1. Inicializacion
        const id = 1;
        const pilot = getPilotById(id);
        // 2. estimulo
        const result = {
            id: 1,
            name: 'Max Verstappen',
            team: 'RedBullRacing'
        }
        //3. Observar el comportamiento ... esperado
        // expect(result).toEqual(pilot)
        expect(typeof pilot).toBe('object');
       
   
       
    })

    test('getPilotById debe no es un Piloto', ()=>{
   
        //1. Inicializacion
        const id = 100;
        const pilot = getPilotById(id);
        // 2. estimulo
    
        //3. Observar el comportamiento ... esperado
      
        // expect(typeof pilot).toBe('undefined');
        expect( pilot).toBeFalsy();
       
   
       
    })

    test('getHeroesByOwner debe arreglo un objecto de 2 pilotos RedBullRacing', ()=>{
   
        //1. Inicializacion
        const team = 'RedBullRacing';
        const pilots = getPilotByTeam(team);
     
        //3. Observar el comportamiento ... esperado
        expect(pilots).toEqual(expect.any(Array));
        expect( pilots).toHaveLength(2);  // Evaluamos que son dos pilotos

        //Evaluamos que si sean los del equipo
        pilots.forEach((pilot) => {
            expect(pilot).toEqual(expect.any(Object));
            expect(pilot.team).toBe('RedBullRacing');
          });
       
    
       
    })

    test('getHeroesByOwner debe arreglo un objecto de 2 pilotos Mclaren', ()=>{
   
        //1. Inicializacion
        const team = 'Mclaren';
        const pilots = getPilotByTeam(team);
     
        //3. Observar el comportamiento ... esperado
        expect( pilots).toHaveLength(2);
    
       
    })

    test('getHeroesByOwner debe arreglo un objecto de 1 pilotos Ferrari', ()=>{
   
        //1. Inicializacion
        const team = 'Ferrari';
        const pilots = getPilotByTeam(team);
     
        //3. Observar el comportamiento ... esperado
        expect( pilots).toHaveLength(1);
    
       
    })

    
})