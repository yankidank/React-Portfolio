## Demo

View a demo on my portfolio website: https://ericheikkinen.com

![EricHeikkinen.com](https://user-images.githubusercontent.com/18619/129461132-5c0d74ce-ff73-4b58-bfae-1e140899b5bf.jpeg)


# Setup

## Easybase Database

This project utilizes [Easybase](https://easybase.io/) to store and serve portfolio project data. Review [this tutorial](https://easybase.io/react/) for instructions on how to setup your own Easybase project. To connect with your own Easybase project, replace the 'ebconfig.js' file in the 'src' directory with your own projects configuration file.

Seed the Easybase content table using the file /src/HEIKKINEN-CONTENT.json

![Content Table](https://user-images.githubusercontent.com/18619/133128231-d63b7df4-95a2-47b0-8650-6e856dccf6db.png)

Images are stored in a second table with 3 columns: post, image, and displayorder. You will need to manually add this table and data, no seed is provided.

![Image Table](https://user-images.githubusercontent.com/18619/133128225-abdba701-f418-4e70-8480-e1ebce282360.png)

## Installation

Run `npm i` to install required node_modules

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Create build for deployment.

### `serve -s build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## PM2

If your server doesn't have it yet, install PM2. Navigate to the root directory and run the following commands to keep the app running using PM2.

```chmod +x server.sh```

```npm run deploy```
