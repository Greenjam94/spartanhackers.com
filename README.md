# Spartan Hackers Website

This repo is archived since it's no longer actively used for the website. When another webmaster took over, they redid the wedsite entirely and this repo hasn't been used since.

This project was modeled after [Rich McLaughlin](https://github.com/RichMcL) and [Kevin McGinty](https://github.com/atomicframeworks) Vertafore Skill-Up 2015 East Lansing workshop 

# REST endpoints
- workshops
  - {id}
    - attendees
- hackathons
  - {id}
    - attendees
- login

# Static Pages
- About
- Home (Index)
- Local Hack Day LHD
- Contact

# Dev Instructions
- Install [NodeJS](https://nodejs.org/) 
  - This will include npm
- Download [git](http://git-scm.com/downloads) to use the CLI
  - Or use the GitHub client for [Mac](https://mac.github.com/) / [Windows](https://windows.github.com/)
- Clone this repository
  - <code>git clone https://github.com/toBeDetermined</code> -- downloads to working directory
  - Or download and extract the [ZIP](https://github.com)
  - Or if you installed the GitHub client you can click the "Clone in Desktop" button on the right side of the [repo](https://github.com).
- Run <code>npm install</code> from the root of the project
  -  Optional - Run <code>npm install -g nodemon</code> to install [nodemon](http://nodemon.io/)
    - Watches for changes to automatically restart server
- Run <code>node server</code> without nodemon
  - Optional - Run <code>nodemon server.js</code> instead if you installed nodemon
- Visit [http://localhost:6669/](http://localhost:6669/) in the browser

# Notes
- Windows users may have to [update their path environment setting](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=windows%20adding%20to%20path&es_th=1)
 - Windows XP- %USERPROFILE%\Application Data\npm\node_modules
 - Windows 7- %AppData%\npm\node_modules
 - Or wherever npm ends up installing the modules on your machine
 - Basically use a mac and keep it really simple
