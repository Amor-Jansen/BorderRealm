# Border Realm

![Image of mockup](/assets/docs/responsive.png)

For this website I really wanted to challenge myself and learn how to code a 2D game using Vanilla JavaScript, no libraries and no frameworks. I bought a few extra courses through Udemy https://www.udemy.com/courses/search/?src=ukw&q=javascript+game and watched a tonne of game development videos from https://www.franksworld.com/tag/franks-laboratory/. I followed many instructions from W3Schools as well, an also the Love-Maths project. I initially wanted it to be a steampunk game, however it has now evolved into something completely different.

I hope you will enjoy this game as much as I enjoyed making it. 

## Features
1. [User stories](#user-stories)
    1. [First time visitor goals](#first-time-visitor-goals)
    2. [Returning visitor goals](#returning-visitor-goals)
    3. [Frequent user goals](#frequent-user-goals)
2. [Design](#design)
    1. [Colour scheme](#colour-scheme)
    2. [Typography](#typography)
    3. [Wireframes](#wireframes)
3. [Existing features](#exising-features)
    1. [Home page](#home-page)
    2. [Game](#gallery)
    3. [Contact us](#contact-us)
    4. [Features to add](#features-to-add)
4. [Testing](#testing)
    1. [HTML](#html)
    2. [CSS](#css)
    3. [JSHint](#jshint)
    3. [Wave](#wave)
    4. [Lighthouse](#lighthouse)
5. [Unfixed bugs](#unfixed-bugs)
6. [Fixed bugs](#fixed-bugs)
7. [Deployment](#deployment)
8. [Credits](#credits) 
    1. [Content](#content)
    2. [Media](#media)

### User stories
- ### First time visitor goals:
    1. As a first time visitor, I was unsure of how to play the game.
    2. As a first time visitor, I could not see my game score.
    3. As a first time visitor, I did not understand the game.

- ### Returning visitor goals:
    1. As a returning visitor, I want to be able to play this on my phone.
    2. As a returning visitor, I would like to increase the difficulty.
    3. As a returning visitor, I would like more enemies.

- ### Frequent user goals
    1. As a frequent user, I would like more games.
    2. As a frequent user, I would like to see a leaderboard.
    3. As a frequent user, I would like to make contact with the game developer.

### Design
- ### Colour scheme
    |Colour   | Hex / name|
    |------   |-----------|
    |Black    |      black|
    |Turqouise|#30d5c8    |
    |Turquoise|#00cccc    |
    |White    |whitesmoke |

- ### Typography
    - I used the following fonts: Ruslan Display, Slackey, Abril Fatface, Sarpanch and sans-serif.

- ### Wireframes
    - Home page wire frames - [View](/assets/docs/homescreen.png)
    - Game wire frames - [View](/assets/docs/game-screen-small.png)
    - Contact us page  - [View](/assets/docs/contact-us-small.png)

### Existing features:

- ### Home page
    - The home page has a start game option.
    - As well as social media links.

- ### Game 
    - The game has a scrolling background, animated sprites and user information.

- ### Features to add
    - A contact form. 
    - Scroller bar for difficulty.
    - More enemies.
    - More games.


## Technologies used

- ### Languages used

    - [HTML](https://html.com/)
    - [CSS](https://www.w3schools.com/Css/)
    - [JavaScript](https://www.javascript.com/)

- ### Frameworks, Libraries and Programs used

    - [Google Fonts](https://fonts.google.com/) - Used to import the fonts.
    - [Font awesome](https://fontawesome.com/) - Used for the footer icons and copyright icon.
    - [Git](https://git-scm.com/) - Used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
    - [Github](https://github.com/) - Used to store code after being pushed from Git.
    - [Balsamiq](https://balsamiq.com/) - Used to create wireframes for this website.

## Testing

- ### Validator testing

    - ### HTML

    - I used the W3C HTML validator. I used direct input.
       - [Image of validated HTML](/assets/docs/homescreen.png)
       - [Image of validated HTML](/assets/docs/game.html.png)

    - ### CSS

    - I used the W3C CSS validator.
       - [Image of validated CSS](/assets/docs/css.png)

    - ### JSHint
    - I used jshint to validate my Javascript. There are warnings they are all for ES6.
        - [Image of JavaScript validation](/assets/docs/js.png)
    - ### Wave accessibility

    - I ran the entire website through wave and the only warnings to come up were links to home page that
          are adjacent.
        -  [Wave accessibility Home page](/assets/docs/wave.png)
    
    - ### Lighthouse

    - I ran my page through lighthouse in chrome.
       - [Lighthouse Home page](/assets/docs/lighthouse.png)
       - [Lighthouse Game page](/assets/docs/lighthouse2.png)

    - ### Testing user stories

- ### First time visitor goals:
    1. As a first time visitor, I was unsure of how to play the game.
    - I included a description of the game controls. 
    - [Controls](/assets/docs/game-controls.png)

    2. As a first time visitor, I could not see my game score.
    - I added a game score on the page, as well as a timer and ammo counter.
    - [Score](/assets/docs/player-stats.png)

    3. As a first time visitor, I did not understand the game.
    - There is a game description on the home page.
    - [Description](/assets/docs/instructions.png)

- ### Returning visitor goals:
    1. As a returning visitor, I want to be able to play this on my phone.
    - I have attempted to add touch events.
    - I have the character moving up and down. I am unable to make him fire.

    2. As a returning visitor, I would like to increase the difficulty.
    - I want to add a scroller at the bottom that will increase the speed of the game.

    3. As a returning visitor, I would like more enemies.
    - I intend to include more enemies.

- ### Frequent user goals
    1. As a frequent user, I would like more games.
    - I would like to add more JS games to this page at a later date.

    2. As a frequent user, I would like to see a leaderboard.
    - If the user clicks on the links they can share their score on social media.
    - [Socials](/assets/docs/socials.png)

    3. As a frequent user, I would like to make contact with the game developer.
    - As my wireframes show I intend to include a contact form.

- ### Unfixed bugs

|Bug  |Reason  |
|-----------|-----|
|Js Hint shows 38 warnings| Its all ES6 warnings|
|Touch action for shooting not working| I have tried a few things to get it tap sensitive|
|                                     | Including adding a click option on the game canvas|

- ### Fixed bugs

| Bug                                | How I fixed it            | Outcome |
|-----                               |----------------           |---------|
|Background image was not full screen| I used min-height: 100vh; | As desired|
|Touch motions did not work|contacted student support, I was pushing into the wrong array| As desired|

## Deployment

The method I used to deploy this site is as follows:

    - Go to my Github and click on this repository
    - Click on settings 
    - On the left hand menu select pages
    - Select main branch 
    - Select save

The live website can be found at :  https://amor-jansen.github.io/BorderRealm/

## Credits

 - ### Code
    - I followed a lot of tutorials and have done a few extra courses just for this project.

    |Code               | Source                                                                            |
    |-----              |-------                                                                            |
    |Sprite animation   |https://www.youtube.com/watch?v=1bj7g6sXit8                                        |
    |                   |https://www.youtube.com/watch?v=CY0HE277IBM                                        |
    |Parallax background|https://www.youtube.com/watch?v=Mg7ibYWhjPI&t=1401s                                |
    |Enemy animation    |https://www.youtube.com/watch?v=aEDADLtLEbk                                        |
    |All Other resources|https://www.youtube.com/watch?v=gCa0z4B-CRo                                        |
    |                   |https://www.youtube.com/watch?v=eYTnoJluds0                                        |
    |                   |https://www.youtube.com/watch?v=EvC3ge_puQk                                        |
    |                   |https://www.youtube.com/watch?v=CY0HE277IBM&list=PLYElE_rzEw_uryBrrzu2E626MY4zoXvx2|
    |                   |https://www.youtube.com/watch?v=4q2vvZn5aoo                                        |
    |                   |https://www.udemy.com/course/learn-game-development-with-javascript/               |
    |                   |https://www.udemy.com/course/javascript-game-development-step-by-step/             |
    |                   |https://www.w3schools.com/graphics/game_intro.asp                                  |
 
 - ### Content

    |Content| Source| Other |
    |-------|-------|-------|
    |Fonts  | Google fonts| |
    |Logos  | Fontawesome|  |
    |Favicon| Favicon.oi |  |
    |WireFrames| Balsamiq|  |
    |Image under logo| https://ui.dev/amiresponsive|

 - ### Media
    
    |Content | Source | Other |
    |--------|--------|-------|
    |Responsive logo|https://ui.dev/amiresponsive||
    |Sprite image|https://bevouliin.com/| Free to use|
    |Enemy images|https://bevouliin.com/| Free to use|
    |Parallax background|https://craftpix.net/freebies/free-halloween-2d-game-backgrounds/| Free to use|
    |Background image| Image by Enrique Meseguer from Pixabay||

- ### Thanks

    - A special thank you to my mentor for his helpful input and information throughout.