## Demo

View a demo on my portfolio website: https://ericheikkinen.com

![EricHeikkinen.com](https://user-images.githubusercontent.com/18619/82945368-9fc6e180-9f51-11ea-9ab7-7d3a12438dba.jpg)


# Setup

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