# React Nbyula Terraformers (Client-Side)

Alone we can do so little; together we can do so much. With Nbyula growing exponentially, terraformers are looking forward to expanding their team. Could you help them build a customizable job board?

## Objectives

- Terraformers and applicants should be able to sign up and login to the app.
- Terraformers should be able to post a job listing on a common job board shared between other terraformers.
  - The listing should contain: title, description (markdown support is a plus), location, deadline, contact phone number and contact email.
  - Note that these job listings should be presented as cards on a board.
  - Based upon how far the job listing is from the deadline, the cards should have a color. For simplicity, the listing which are due in more than 21 days should be green, less than 14 days should be yellow and less than 3 days should be red.
- Terraformers should be able to rearrange the cards on the board by drag and drop to help them modify the order in which they’re displayed to the applicants.
- Terraformers should be able to archive a job listing.
- Applicants should be able to mark their interest on any available and active job listing.
- Terraformers should be able to see interested applicants.

## Technologies

- React
- TailwindCSS/Flowbite React
- Redux/ReduxToolkit

## Important

Before deploying the app, please make sure:

- Copy and paste `.env.example` file and rename it: `.env.production.local`
- In `.env.production.local`, set your own API server address.

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
