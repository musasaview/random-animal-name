import animalNames from "./animal-names";
export type AnimalName = typeof animalNames[number];
export declare function randomAnimalName(filter?: (item: AnimalName) => boolean): AnimalName | null;
export declare function randomAnimalNames(count: number, filter?: (item: AnimalName) => boolean): AnimalName[];
