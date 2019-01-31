# Countdown Timer | Vue.js

By [Hedi Jabri](https://github.com/HediJabri)

## Demo
<p align="center">
  <img src="https://res.cloudinary.com/dravwgiq1/image/upload/v1548954954/qmvz5ockibjrtvwgdizi.gif" width="700px">
  <br>
</p>

## Instructions

1. Clone locally using `git clone git@github.com:HediJabri/countdown-timer.git`
2. Install dependencies using `npm install`
3. Run tests using `npm run test:unit`
4. Start your server using `npm run serve`
5. Navigate to app in [browser](http://localhost:8080)


## Discussion

The main technologies I used to build this app are: Vue 2, HTML, SCSS, Webpack and Jest.


## Requirements

The user should be able to enter a # of minutes (positive integer) and click a “Start”
button to initialize the countdown.

- Timer format: MM:SS
- The user should be able to pause & resume the countdown using pause/resume
buttons.
- While the countdown timer is active, the user should be able to speed up / slow down the
speed at the following rates:
  - 1.0X (normal speed, selected by default)
  - 1.5X
  - 2X
- When half of the selected duration has been passed, display a string of text above the
countdown timer reading: “More than halfway there!”
  - When the countdown timer reaches 0, this text should change to: “Time’s up!”
  - When the countdown is within 20 seconds of ending, the countdown timer text should
turn red.
  - At 10 seconds, the text should start blinking.

Include unit testing for applicable functionality.
The countdown timer functionality should be appropriately divided into well-defined
components. 
The look of the countdown timer should have a production-ready clean/modern
aesthetic. Feel free to creatively stylize the elements.
