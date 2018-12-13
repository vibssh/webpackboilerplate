# Webpack v4

## Requirements
* Node >= 8.14
* NPM >= 6.5.0
* Yarn >= 1.12.3 - Yarn is much faster package manager than NPM. Ironically Yarn uses NPM registry yet its faster hence the choice is made of yarn
* KSS >= 3.0.0 - This package is required to build living styleguide

## Setup 
* Main webpack configuration is in the root of the project folder 'webpack.config.js' should you want to add any additional plugins or configuration it should be added to this file
* The following is the folder structure for the project - Main folder is 'src' folder at the root of the project.
* Index.html is the base file that is served with the dynamic content build from webpack
* SCSS folder holds all the Sass files for the Project. SCSS folder holds 'homepage.md' file which is used only for 'styleguide'. That is the landing / introduction content for Styleguide
* JS folder holds all Javascript files for the project
* Folder structure
  src
   - js
     -modules
       * moduleOne.js
       * moduleTwo.js
   - scss
     - Base
        * _typography.scss
        * _reset.scss
        * _basic.scss
        * _index.scss

     - Utilities
        * _helpers.scss
        * _index.scss

     - Objects
        * _grids.scss
        * _index.scss

     - Components
        * _buttons.scss
        * _tabs.scss
        * _accordian.scss
        * _carousel.scss

     - State
        * _states.scss
        * _index.scss

     - Themes
        * _theme-primary.scss
        * _index.scss
     main.scss ( This is the main sass file which outputs the css. This file imports all the '_index.scss' files from the scss folders)

   -  index.html - { This is the Base file which gets served }
   - styleguide - { This folder is generated via kss command (below in the commands section) from commandline }

* Naming Conventions ( SCSS - replace '{}' with the Object itself )
  * Object : 'jf-o-{object}'
  * Component: 'jf-c-{component}'
  * State: 'jf-is-{state} or jf-has-{state}'
  * Theme: 'jf-t-{theme}
  * Utility: 'jf-u-{utility}'
  * JS-Hooks: 'jf-js-{hooks}'

* Commands 
  * Initial Run - (After cloning the repo ) 
    * `yarn install`
  * To Run the Project in Development mode and watch the files for change
    * `yarn dev`
  * To build the Project for production 
    * `yarn prod` - [This will create a 'dist' folder deploy that to the production environment when you are ready]

* Living Styleguide
  * Living styleguide uses kss-3.0 to generate styles as you compile your sass files
  * To create a component for styleguide from the sass files follow the steps below :
    * `Example button.scss file
      // Buttons
      //
      // A majorities of buttons in the site are built from the same base class.
      //
      // Markup:
      // <a href="#" class="button {{modifier_class}}">Link Button</a>
      // <button class="button {{modifier_class}}">Button Element</button>
      // <input type="button" class="button {{modifier_class}}" value="input[type='button']"/>
      //
      // .button--primary   - Use this class to indicate that the button is the primary
      //              feature of this form.
      // :hover     - Highlight the button when hovered.
      //
      // Styleguide components.buttons 
    `
    It uses commenting structure to generate styleguide
    
  * Custom Theme ['michelangelo'] is installed inside node_modules folder and that is used to serve the styleguide template
  * Any structure change that needs to be done to the Styleguide template it needs to be done here 
    `./node_modules/michelangelo/kss-styleguide/custom-template/index.hbs` It uses handlebars templating engine.
  * To reflect the changes done to the structure and or styling of the styleguide template please run this command `kss --source ./src/scss/ --destination ./src/styleguide --css ./style.css  --builder ./node_modules/michelangelo/kss_styleguide/custom-template`