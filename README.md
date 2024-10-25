this project goal is to test electron js

folowing [this tutorial from electron js website](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites) 

## chapter one : prerequisites

`node -v` v22.9.0

`npm -v` 10.8.3

## chapter two : Building your First App

```
mkdir my-electron-app && cd my-electron-app
npm init
```
put entry point as main.js

`npm install electron --save-dev`

got package.json updated with : 
```
  "devDependencies": {
    "electron": "^33.0.2"
  }
```

adding .gitignore [from node template](https://github.com/github/gitignore/blob/main/Node.gitignore)

adding a main.js with a console.log

adding `"start": "electron .",` in scripts section of package.json (it will look for the main script of the current directory)

command `npm run start` run Electron and show the log that I wrote in main.js

create a `index.html` file and replacing `main.js` code to load html page in a browserWindow 

`npm run start`  now open a window with the content of index.html

adding a `.vscode/launch.json` for debug