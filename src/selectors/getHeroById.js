import {heroes} from "../data/heros";

export const getHerosById = (id) =>{

    return heroes.find( hero => hero.id === id);
}