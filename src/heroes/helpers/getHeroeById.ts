import { heroes, IHero } from '../data/heroes';
export const getHeroeById = (id: string | undefined): IHero | undefined => {
    
    return heroes.find(heroe => heroe.id === id);
}


