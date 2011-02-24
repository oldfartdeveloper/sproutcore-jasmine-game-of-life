# BDD Game of Life Application in SproutCore Using Jasmine

Gregory Moeck, Brandon Murphy, James Gary, and Scott Smith (OldFartDeveloper) sat down
to BDD the "Game of Life" using SproutCore and Jasmine.

At the end of the evening, this is what they had.  OldFartDeveloper uploaded it
so people could continue if desired.  Later on, OldFart and James cleaned it up a bit to

- More automate the installation.
- Make it run properly on both FireFox and Chrome browsers.

This has Jasmine integrated into the SproutCore project instead of QUnit.

# Prerequisites

- Has been tested under Ruby 1.9.2-p136.

# Installation

    $ cd <your directory containing your projects>
    $ git clone git@github.com:oldfartdeveloper/sproutcore-jasmine-game-of-life.git
    $ cd sproutcore-jasmine-game-of-life
    $ gem install bundler
    $ bundle install

# Running the Application

    $ sc-server

## To see the application

- [http://localhost:4020/life](http://localhost:4020/life) shows the application.  Right now all you get is a vertical column of 10 white squares.

## To see the test results

- [http://localhost:4020/life/en/current/tests.html](http://localhost:4020/life/en/current/tests.html) shows the test results

# Acknowledgements

- Thanks to Greg Moeck for driving down to our Orange County hackfest and leading us in learning Jasmine and SproutCore.  Am using his  [jasmine-sproutcore](https://github.com/gmoeck/jasmine-sproutcore) project.
- Thanks to rvm