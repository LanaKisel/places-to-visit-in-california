# Places to visit

## Skills I used to create a React single-page application
In this application, I applied knowledge of components, props, and state management, and incorporated client-side routing. Created a db.json file, which enabled json-server to make both a GET and a POST request.

### How it works
This application is about places you can visit in the state of California. 

The first thing you see is a Home page, which welcomes you with information about this application. In the top left corner, I have my navigation: NavLinks.They are: "Home", "About" and "Califonia Places". By clicking on each you'll be navigated to their respective routes. 
About component renders information about the "Visit California" organization, its mission along the reason for its existence. 

The "California Places" component renders links to the landmarks you might be interested in visiting. The names of the links are titles of the places. By clicking on it, React Router renders the Place.js component which consists of the title, description and image. 

Below the links in "California Places", there's a button named "Click the button to add new place". Click event fires, after clicking the button which will navigate to the Form component. Here you can add a name, description, and an image file for your place. After submitting,the route navigation will be updated to the California Places view and be able to see the link to your just-added place below all the original places. This application is a single page, with 9 components which are rendered in App.js using BrowserRouter. 

### Credits
Beautiful pictures and descriptions of destinations were used from https://travel.usnews.com/rankings/best-places-to-visit-in-california/

Home page photo gallery: https://www.npmjs.com/package/react-photo-gallery


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
