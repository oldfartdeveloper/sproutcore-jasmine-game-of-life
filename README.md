# BDD Game of Life Application in SproutCore Using Jasmine

[Gregory Moeck](http://github.com/gmoeck), [Brendon Murphy](http://github.com/bemurphy), [James Gary](http://github.com/jamesgary), and Scott Smith ([OldFartDeveloper](http://github.com/oldfartdeveloper)) sat down
to BDD [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life) using [SproutCore](http://github.com/sproutcore/sproutcore) with [Ki](git@github.com:FrozenCanuck/Ki.git), the future SproutCore statechart framework, and [Jasmine](http://github.com/pivotal/jasmine).

OldFart has continued development as a learning exercise, especially since the game seems like an excellent candidate for applying statecharts.

# Rules of the Game

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.

Any live cell with two or three live neighbours lives on to the next generation.

Any live cell with more than three live neighbours dies, as if by overcrowding.

Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

## How our Implementation Handles some Issues

The game board will start out with a user-set "X" and "Y" axis sizes.  The user will be able to seed the game on any of the squares that he chooses.  The two dimensions will grow automatically as required as the cells encounter the "border" of the grid.  The game always tries to keep the live cells in view.  If the colony grows too large to be seen by the existing view, the grid will automatically reduce its cell size to bring them all back.  The cell reduction stops when the cell dimension is one pixel on a side.  When the fully-reduced grid is no longer large enough to contain all the live cells, the game stops ticking.

# Test Tool Selection

This uses the Jasmine test framework instead of QUnit because the participants all agreed they preferred Jasmine's more extensive feature set and because they life the [rspec](http://pragprog.com/titles/achbd/the-rspec-book) paradigm instead of the conventional unit test.

# Prerequisites

- Has been tested under Ruby 1.9.2-p136.

# Installation

    $ gem install sproutcore -v 1.5.0.pre.5
    $ cd <your directory containing your projects>
    $ git clone git@github.com:oldfartdeveloper/sproutcore-jasmine-game-of-life.git life
    $ cd life
    $ mkdir frameworks
    $ cd frameworks
    $ git clone git@github.com:FrozenCanuck/Ki.git
    $ git clone git@github.com/gmoeck/jasmine-sproutcore.git
    $ cd ..

# Running the Application

    $ sc-server

## To see the application

- [http://localhost:4020/life](http://localhost:4020/life) shows the application.  Right now all you get is a vertical column of 10 white squares.

## To see the test results

- [http://localhost:4020/life/en/current/tests.html](http://localhost:4020/life/en/current/tests.html) shows the test results
- On the page, try clicking the various links to see the different ways that Jasmine will work with you.

# Acknowledgements

- Thanks to Greg Moeck for driving down to our Orange County hackfest and leading us in learning Jasmine and SproutCore.  Am using his  [jasmine-sproutcore](https://github.com/gmoeck/jasmine-sproutcore) project.
- Thanks to rvm
