# TBC Academy technical task

This project was developed as part of the TBC Academy React course selection process. This is [TBC x Usaid webpage](https://www.tbcacademy.ge/usaid) clone with identical functionality.
The decision to use vanilla JS was made in response to the test task, where it was considered advantageous. Otherwise, I could also easily implemented this project using React.
All the functionality is custom, no other libraries used. The only additional tool installed is liveserver, which ensures proper handling of ES6 modules.

## Table of Contents

1. [About](#tbc-academy-technical-task)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Functionality](#functionality)
5. [Installation](#installation)

## Tech Stack

- HTML
- CSS
- JS
- live-server npm package (for proper handling of ES6 modules)

## Project Structure

- **assets:** Contains folders for fonts, icons, and images used in the project.

- **css:** Holds individual CSS files for different sections of webpage and a main CSS file (`index.css`) for overall styling.

- **js:** Holds individual JavaScript modules for various logical tasks and a main JavaScript file (`index.js`).

- **data:** Contains JavaScript files with data used in the project.

- **.gitignore:** Specifies files and directories that should be ignored by git.

- **index.html:** The main HTML file for project.

- **package.json:** Configuration file for npm, where you can define installed packages and added scripts.

- **README.md:** The documentation file you are currently reading.

## Functionality

- Made reusable builder functions, allowing to reuse them with another data or DOM nodes. e.g - (accordion, courses, popup, slider).
- Created reusable functions for click outside and focus trap, enhancing user experience, particularly in popup interactions.
- Used `picture` tag to handle both webp and jpg formats if old device or browser has no accesibility with webp format.
- Fully responsive web design.
- Tested on multiple PC browsers and several mobile devices via browserstack.com.
- Supported by relatively old devices (Ios/Safari 12.5.7 +).
- Added burger and terms/conditions popups with fully same visuality and functionality.
- Used `title` and `meta description` tags inside head for better seo optimisation

## Installation

1. Clone this repository to your local machine.
2. Install dependencies - `npm install`
3. Start the project - `npm start`
