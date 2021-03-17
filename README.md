# Budget Calculator

A simple budget calculator that allows a user to choose items from different categories and see if the total cost falls within their budget.

## Stories

- [ ] As a user, I want to see a list of available items and item types, so that I can choose the items I'm interested in.
- [ ] As a user, when I add an item, then I want my subtotal to update, so that I can see my order total.
- [ ] As company, we only allow one item per type to be selected at a given time.
- [ ] As a user, I want to enter my budget, so that I can see if my preferences match my budget.
- [ ] As a user, when my selections exceed my budget, then I want to see a warning, so that I know I need to adjust my preferences.
- [ ] As a user, I want to save my budget, so that I can keep my budget preferences in my profile.

## Tasks

- [ ] Pull item data from Firebase and make available via a service/ hook
- [ ] Create a top level budget calculator component
- [ ] Create a component to display the entire item options
- [ ] Create a component to display items from a particular given type
- [ ] Create a component to display a single item
- [ ] Create a context/reducer or state to save the selected items
- [ ] When an item in a given type is clicked, add it to the state for that item type
- [ ] When an item in a given type is unchecked, remove it from the state for that item type
- [ ] If a different item from a given type is clicked, replace the item with the existing item
- [ ] Display live minimum total of all items selected
- [ ] Display live maximum total of all items selected
- [ ] Display list of all items currently selected by user
- [ ] Allow user to set a budget
- [ ] Color code budget based on whether selected items are above/ below/ or within range
- [ ] Allow user to edit their budget
- [ ] Allow user to submit their item preferences and budget
- [ ] Iterate on design

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
