import { heroes, IHero } from '../data/heroes';

export const getHeroesByPublisher = (publisher: string): IHero[] => {
    const validPublisher: string[] = ['Marvel Comics', 'DC Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(publisher + " is not a valid publisher");
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
};
