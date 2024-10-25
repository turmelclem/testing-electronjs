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

## chapter three : Using Preload Scripts

addding a preload script to expose node, chrome versions, and electron versions in variables, loading it in the window and injecting them throught the index DOM using renderer.js

adding a method 'ping' called throuht ipcRenderer via preload

## chapter four : Adding Features

n/a

## chapter five : Packaging Your Application

installing Electron Forge's CLI :

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

after those two commands, app has been converted to a Electron Forge format.

to create a distribuable : `npm run make`

it produce a out directory with `my-electron-app-1.0.0 Setup.exe` in make directory

and also deprecationWarnings :

`(node:3144) [DEP0174] DeprecationWarning: Calling promisify on a function that returns a Promise is likely a mistake.`

for me, after installing the application using the `my-electron-app-1.0.0 Setup.exe` from out/make the applications is installed in :
```
C:\Users\[username]\AppData\Local\my_electron_app
```
