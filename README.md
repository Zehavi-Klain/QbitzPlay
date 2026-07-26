# Q-bitz Puzzle Game

## Overview

Q-bitz Puzzle Game is an interactive browser-based puzzle game developed with **HTML, CSS, and JavaScript**.

The player is presented with a reference image and must recreate the pattern by dragging, rotating, and arranging puzzle pieces on a 4×4 game board before the timer expires.

The project demonstrates JavaScript programming, DOM manipulation, drag-and-drop functionality, game logic, timers, and code refactoring.

---

## Features

* Three difficulty levels:

  * Easy
  * Medium
  * Hard
* Drag & Drop puzzle pieces
* Rotate puzzle pieces
* Countdown timer
* Score tracking
* Life system
* High score saved using Local Storage
* Win/Lose screens
* Dynamic loading of game levels

---

## Technologies

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage API
* Drag & Drop API

---

## Project Structure

```
                     ┌──────────────────┐
                     │  instruction.html│
                     │   Instructions   │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │    login.html    │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │  register.html   │
                     │ (new users only) │
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │   stages.html    │
                     │ Select Difficulty│
                     └────────┬─────────┘
                              │
                              ▼
                     ┌──────────────────┐
                     │    game.html     │
                     │   Puzzle Game    │
                     └───────┬──────────┘
                    Correct  │   Time/Lives End
                             │
                 All puzzles │
                   completed │
                             ▼
                 ┌───────────┴───────────┐
                 ▼                       ▼
        ┌──────────────────┐    ┌──────────────────┐
        │    win.html      │    │ gameover.html   │
        └──────────────────┘    └──────────────────┘
```

---

## Gameplay

1. Select a difficulty level.
2. A reference image is displayed.
3. Drag puzzle pieces onto the board.
4. Rotate pieces until they match the reference.
5. Complete the puzzle before time runs out.
6. Earn points for every correct solution.
7. Lose a life for incorrect solutions or when time expires.
8. Finish all puzzles to win the game.

---

## Refactoring Improvements

Originally, the project contained separate HTML and JavaScript files for each difficulty level.

The project was refactored to improve maintainability and reduce duplicated code.

### Improvements include:

* Unified all game logic into a single **game.js**
* Replaced multiple game pages with a single **game.html**
* Introduced a centralized **levels** configuration object
* Dynamic loading of:

  * images
  * puzzle solutions
  * timer duration
* Removed duplicated logic across levels
* Improved code readability and maintainability

Adding a new level now only requires inserting a new object into the `levels` configuration without changing the game logic.

---

## Learning Outcomes

This project strengthened my experience with:

* JavaScript programming
* DOM manipulation
* Event handling
* Drag & Drop API
* Game state management
* Local Storage
* Code refactoring
* Writing reusable and maintainable code
* Problem solving and debugging

---

## Future Improvements

Possible future enhancements include:

* Responsive mobile support
* Sound effects and animations
* Multiple game modes
* Online leaderboard
* Player profiles
* Additional puzzle packs

---

## Author

**Zehava Klain**

Software Developer

GitHub: *([GitHub](https://github.com/Zehavi-Klain))*

Portfolio: *([portfolio](https://zehavaklain.onrender.com/))*
