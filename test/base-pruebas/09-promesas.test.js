import { getPilotByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-Promesas', () => {

    test('getPilotByIdAsync debe retornar un piloto', (done) => {

        //1. Inicializacion
        const id = 1;
        // 2. estimulo
        const pilot = getPilotByIdAsync(id).then(pilot => {
            // expect(pilot).toEqual(expect.any(Object));
            expect(pilot).toEqual({
                id: 1,
                name: 'Max Verstappen',
                team: 'RedBullRacing'
            }
            );
            done(); // Espera a que me responda para validar
        });

        //3. Observar el comportamiento ... esperado

    })

    test('getPilotByIdAsync debe retornar un error si piloto no existe', (done) => {

        //1. Inicializacion
        const id = 100;
        // 2. estimulo
        const pilot = getPilotByIdAsync(id).catch(error => {
          
        expect(error).toBe('No se pudo encontrar el Piloto ' + id)
        done(); // Espera a que me responda para validar
        });

        //3. Observar el comportamiento ... esperado

    })

})