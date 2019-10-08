# Code Kingdoms League Table Interview Task

This is an incomplete program to generate a league table from a list of football scores. 

We would like you to try to finish the program and make sure it is working.

## Football League Rules

### Points

* A win adds 3 points.
* A draw adds 1 point for each team.
* A loss adds 0 points.

### Goal Difference

* This is the 'goals for' a team minus the 'goals against'.

## Tips

* You should spent around 2 hours on this task. If you find you are running out of time, please write any remaining thoughts, ideas or caveats you have in the Notes section at the bottom of this file.
* You should replace the TODOs in the `.ts` files with your own implementation. Don't edit the `.js` files - edit the `.ts` files!
* The `scores.csv` is in the format `homeTeam,awayTeam,homeTeamGoals,awayTeamGoals`.
* If you use VSCode (https://code.visualstudio.com/) you will get helpful hints in the editor because we are using TypeScript.
* If you are on Windows, we recommend using Git Bash (https://gitforwindows.org/) rather than Command Prompt.

## Setup

- Install NodeJS v12 from https://nodejs.org/en/
- Install yarn from https://yarnpkg.com/en/docs/install
- Run `yarn` in a terminal window in this folder to install the project dependencies.

## Running

- Run `yarn run watch` in a terminal window to rebuild the JS files from the TS files whenever you change them.
- Run `yarn run main data/scores.csv` in another terminal window to try the program.
- Run `yarn run test --watch` to run the unit test suite and re-run whenever the JS files are rebuilt.
    - There is a provided unit test to verify whether your ranker method is working correctly.

## Submission

Please make a zip of your code (without `node_modules`). You can do this with `yarn run archive` if your computer has the `zip` command installed.

Then email your zip file to engineering.careers@codekingdoms.com

Please treat your solution, and this task, as confidential and do not share either publicly.

# Notes

- TODO