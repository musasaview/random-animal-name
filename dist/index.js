"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomAnimalName = randomAnimalName;
exports.randomAnimalNames = randomAnimalNames;
const animal_names_1 = __importDefault(require("./animal-names"));
function randomAnimalName(filter) {
    const names = filter ? animal_names_1.default.filter(filter) : animal_names_1.default;
    if (names.length === 0)
        return null;
    return names[Math.floor(Math.random() * names.length)];
}
function randomAnimalNames(count, filter) {
    const names = filter ? animal_names_1.default.filter(filter) : animal_names_1.default;
    if (names.length === 0)
        return [];
    return Array.from({ length: count }, () => names[Math.floor(Math.random() * names.length)]);
}