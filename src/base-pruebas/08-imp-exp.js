
import pilots from '../data/pilot.js';

export const getPilotById = (id) => pilots.find( (pilot) => pilot.id === id );

export const getHeroesByOwner = ( team ) => pilots.filter( (pilot) => pilot.team === team );

export function getPilotByTeam (team){
    return pilots.filter((pilot) => pilot.team == team);
}



