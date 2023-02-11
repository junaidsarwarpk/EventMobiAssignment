#### EventMobi code challenge

### ****Note: This project was created from scratch up using CRA and no 3rd party library (i.e.) ANTD/React Bootstrap/ React Material was used, nor any css/layout helper like bootstrap/tailwind etc was used, the structure and the layout was build from scratch by @junaidsarwarpk****

### What is covered

- Load gists by username
- Render gist card with details: \
   -- Description \
   -- Author avatar \
   -- Author name with link to author's profile \
   -- Files list with known files having specific color and generic files with a generic color \
   -- Link on file tag (which takes you to file path) \
   -- Feature to load last 3 forks \
   -- Last 3 forks with username linked to user's profile and user's avatar (activated by clicking the label in the card) \
   -- Basic error handling (400 http errors etc)

### How to setup the app

- Clone the app
- Run `npm install` on root folder
- After that run npm run start \
- After the local server starts, go to `http://localhost:3000/` and enter the username
- Click `Get last 3 forks` to load the last 3 users who forked this gist

### What was not covered / future work
Some of the optional functions/improvements were not covered in this project due to time limitation, few are mentioned below:

- Pagination in gists \
    -- Gists API supports pagination and returns pagination information in `link` response header, we can extract that information and implement the lazy loading/pagination controls on the search screen
- Store \
    -- Even though the role of store in this project scope is debatable but it was left out due to time limitation, I would write the store to cache the gists per user in order to avoid calls to network if the same user is searched again
- Design improvements \
    -- The core focus of this solution is to build up a mini-application explain how a flexible project structure can be built, hence, the design kept minimalistic and further improvements can be made in the design \
- Forks page \
    -- We can have a dedicated page to display the fork details, the idea was skipped due to time limitation and the scope of the project


### Structure in bird eye view

- `src/layouts`: A directory where you can define the layouts of the project, for now, there is only one layout: `MainLayout`, the layout can be used to house the application with some global controls/design which will remain the same throughout the application, for example, a navigation can be defined inside the layout. The layout further loads the routes inside with `Outlet`.
- `src/modules`: A directory to house the the different modules of the application, right now, we only have `search` module but we can define further modules inside this directory.
- `src/modules/{moduleX}/components`: A directory per module where you can keep module-specific components, for example `SearchForm`.
- `src/modules/{moduleX}/screens`: A directory per module where you can define the screens related to the module `{moduleX}`, for now, we only have `search` module and `SearchScreen`, further screens related to `search` module can be added here.
- `src/styles`: A directory where we can keep the shared styles i.e. mixins, scss variables etc.
- `src/Utilities`: A shared directory to house the general utilities like adapters, helper functions etc.
- `src/global.scss`: A scss file where you can define the global styles, all other `scss` files in the project are modular files which are used to define the scoped-styles, hence, you don't need to worry about one `scss` file overriding the styles of another.
- `src/routeScreens.ts`: A file which exports all the lazily loaded screens which can be further passed to the routes.

#### PRs for further improvements are welcomed.
#### For further questions please reach out to me @ junaidsarwar.com / junaidsarwar001@gmail.com
