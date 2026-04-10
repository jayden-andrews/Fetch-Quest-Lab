# Pokémon Viewer

A React web application that lets you explore Pokémon by type. Select any of the 18 Pokémon types to instantly browse every Pokémon belonging to that type, complete with their sprites displayed in a grid. The app also features the Pokémon Center theme from Generation 5, which plays when you press the music button in the bottom-right corner.

## API

This project uses the [PokéAPI](https://pokeapi.co/docs/v2) which is a free, open RESTful API providing data for all Pokémon games. No authentication is required.

## Running Locally

1. Clone the repository:
```bash
   git clone https://github.com/jayden-andrews/Fetch-Quest-Lab
```
2. Install dependencies:
```bash
   npm install
```
3. Start the development server:
```bash
   npm run dev
```

## Technical Challenge

One challenge I encountered was figuring out how to iterate over the data returned from the API. The PokéAPI returns Pokémon data as nested objects within arrays, so I had to research how to properly access and handle each object, which led me to learn about the .map() method. Understanding .map() not only solved the looping problem but also taught me how to dynamically render components, which is how each Pokémon sprite card gets displayed on the page.