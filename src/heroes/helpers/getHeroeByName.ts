import { heroes, IHero } from '../data/heroes';
export const getHeroeByName = (name: string = '' ): IHero[] | [] => {
    name = name.toLocaleLowerCase().trim();
    if (name.length === 0) return []
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )

}