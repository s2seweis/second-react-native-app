# Second-React-Native-App
- Title: MealsToGo
- Practise Native Development

## Table of Contents
- [Features](#features)
- [Element Inspector](#element-inspector)
- [Interisting](#interisting)
- [Eslint](#eslint)
- [Important](#important)
- [Commands](#commands)

## Features
- Firebase Authentication
- Camera
- Using Local Storage on the phone
- Native Navigation 
- useContext, provides a way to pass data through the component tree without having to pass props down

 ***app.json controls the metadata from the application like name in the store, icon on the phone, splashscreen and so on***

## React Native for
- Mobile & Web, here mainly the focus on mobile

## Element Inspector
```
- cmd + ctrl + z
```
## Interisting
- We can rename the imports by as, for example: import { StatusBar as ExpoStatusbar } from 'expo-status-bar'
- <></> = React Fragement, Fragments are a way to group multiple React elements without adding extra nodes to the DOM.
- <></> = <React.Fragment></React.Fragement>
- Code => Preferences => Setting => "format on save" => check box, Format on Save

# Eslint
***ESLint (find and fix Problems)***
1. 
```
npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import --save-dev
```
2. 
```
npx eslint --init
```
3. define .eslintrc according to your needs

## Extension:
- ESlint, allows to see the inline rule breaks from ESlint

## Important
- Enforce our consistency throughout the project
- Auto format on saving, industry looking for it
- Naming conevention also an industry standard 

## Commands:
- npx create-expo-app --template
- expo-cli publish
