import animalNames from "./animal-names.ts";

export type AnimalName = typeof animalNames[number];

export function randomAnimalName(
    filter?: (item: AnimalName) => boolean
): AnimalName | null {
    const names = filter ? animalNames.filter(filter) : animalNames;
    if (names.length === 0) return null;

    return names[Math.floor(Math.random() * names.length)];
}

export function randomAnimalNames(
    count: number,
    filter?: (item: AnimalName) => boolean
): AnimalName[] {
    const names = filter ? animalNames.filter(filter) : animalNames;
    if (names.length === 0) return [];

    return Array.from({ length: count }, () =>
        names[Math.floor(Math.random() * names.length)]
    );
}