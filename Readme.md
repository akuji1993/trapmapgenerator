# The Trap Map Generator 

This generator is meant to generate maps used for trap markers in Pen & Paper quests. With this tool you can quickly generate dangerous paths through a maze, that the players have to run through. The different danger levels can be interpreted differently by the DM. For example: 

* High Danger: Roll a 15 or higher to escape 
* Medium Danger: Roll a 10 or higher to escape 
* Low Danger: Roll a 5 or higher to escape 
* No Danger: You don't have to make a roll 

This way, if your players enter a trap that has paths such as this generator can make, you can just adjust the values at the top and press "generate" to get a map ready to let your players bite their nails to survive on. 

# Usage 
You can either pull this repository and use a tool like [npm serve](https://www.npmjs.com/package/serve) or an Apache server to host it locally and just run it. 

Or you can check it out right here: [http://akuji.de/trapmapgenerator/](http://akuji.de/trapmapgenerator/)

The Generator is written with HTML5, CSS3 (including Flexbox) and ES6 Javascript, so it should run in all modern Browsers (Current version of Chrome, Firefox and Edge). It will NOT run in Internet Explorer probably, since ES6 is not supported, yet and Flexbox won't make that easier either. I cannot vouch for Safari to work, since I haven't tested it there. If you absolutely have to support those browsers, feel free to fork this project and add the support for it. 

# TODO 
* Give the user the option to download the generated map as png, see https://github.com/tsayen/dom-to-image
* To support the save png feature, add node_modules and add webpack to pack all the stuff into a bundle.js