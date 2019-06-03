# Game Of Life

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

Play the original *Game Of Life* [here](https://playgameoflife.com/)

## The Rules

For a space that is 'populated':

- Each cell with one or no neighbors dies, as if by solitude.
- Each cell with four or more neighbors dies, as if by overpopulation.
- Each cell with two or three neighbors survives.

For a space that is 'empty' or 'unpopulated'

- Each cell with three neighbors becomes populated.

## Controls

- Create a figure on the board by clicking on the blocks.

- Click NEXT to see the next pattern.

- Click START to see the animation.

- Click STOP to stop the animation.

- Click CLEAR to clear the board.

## Installation

Use the package manager npm to install Game Of Life.

In the root folder, run

```bash
npm install
```

## Usage

In the root folder, run

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
