# Restaurant Finder

Find restaurants in your city via the OpenTable API.

[find-restaurant.netlify.app](https://find-restaurant.netlify.app/)

Please take a look at the latest production app I worked on: [OMEN.com](https://www.omen.com/us/en.html).

## Yarn Commands

- `yarn start` Starts the development server.
- `yarn build` Bundles the app into static files for production.

## Questions

__How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.__
- About 8 hours.
- Pagination, form error handling UI, animations, PropTypes, Jest testing, a map.

__What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.__
I used my favorites throughout this app, such as:
- Array helper functions `.map` ([here](src/components/Results.js)) and `.forEach` ([here](src/actions/restaurantsActions.js)) because they reduce the amount of logic you need to write making your code more readable.
- The `const` and `let` variable keywords because of their block scoping.
- Template stings for inline expressions i.e toggling of classes depending on state with a Ternary operator ([here](src/components/Restaurant.js)).

__How would you track down a performance issue in production? Have you ever had to do this?__
With Chrome Dev Tools: Sources, Network, Performance, and Audit (Lighthouse) tabs.

__How would you improve the API that you just used?__
- Tags to categorize food types, actual images and/or an array of images, restaurant URLs.

__Please describe yourself using JSON.__
An array of appendages, a torso object containing an array of internal organs, a brain with a collection of attributes.
