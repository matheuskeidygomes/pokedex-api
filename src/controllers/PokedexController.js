import { pokedex } from '../models/pokedex.js';

export function getOne(req, res) {
    const { id } = req.params;
    const pokemon = pokedex.find((pokemon) => pokemon.id === Number(id));
    if (!pokemon) res.status(404).json({ error: 'Pokémon not found! Please, insert another ID.' });
    else res.status(200).json(pokemon);
}

export function getAll(req, res) {
    res.status(200).json(pokedex);
}

export function getByType(req, res) {
    const { type } = req.params;
    const typeFormat = type.charAt(0).toUpperCase() + type.slice(1);
    const pokemon = pokedex.filter((pokemon) => pokemon.type.includes(typeFormat));
    if (!pokemon) res.status(404).json({ error: 'Pokémon not found! Please, insert another type.' });
    else res.status(200).json(pokemon);
}

