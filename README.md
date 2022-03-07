# Tech Stack

Following technologies are used in this project

1. Expo
2. React Native
3. Firebase Realtime Database
4. Typescript

# Find Missing Word

Find Missing word is a react native project in which there are different exercises, Each excercise have a english phrase and an equivalent prhase in german language with one of the word missing, user has to guess the word from one of the four options given. The app will display the result upon checking the selected answer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

- Clone the repository

```
git clone https://github.com/EngFaisalWaleed/missing-word.git
cd missing-word
```

- Node version
  v16.14.0

- Install Node version using NVM

```
nvm install v16.14.0
nvm use v16.14.0
```

- Install Expo Cli

```
yarn add global expo-cli
```

- Install packages

```
yarn install
```

- Run app locally

```
yarn start

or

expo start
```

It will run the metro server and display a QR code. Scan the QR code in expo app in your mobile device

- Install expo app in mobile device.

  - Open playstore /App store type "Expo" install the app

- How to debug the app

  Shake your mobile device, it will deisplay developer menu, select Debug js remotely.
  it will then automatically open developer console in the default browser of your computer.
  Inspect in the tab to see console messages and network requests

### Workflow and functionality

- User can see exercises one by one upon running the app
- User can check the answer by selecting one of the four options given
- User can continue to the next exercise without having to respond to current exercise by pressing continue button
- User can de-select the selected option by touching anywhere on screen where there is no content

# Note:

- Your mobile device and computer should be connected to same network in order to run app on expo
