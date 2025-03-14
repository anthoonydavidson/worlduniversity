### Access the website:

[Visit World University](https://anthoonydavidson.github.io/worlduniversity/)

# World University

World University is a React-based web application that provides information about various countries around the world. The application leverages the REST Countries API to fetch and display data about countries, including their population, area, currencies, and more.

## Features

- **Home Page**: Displays the top 10 most populous countries with a hero section and cards for each country.
- **Search Functionality**: Allows users to search for countries by name, filter by region, and filter by independence status.
- **Country Details**: Provides detailed information about a selected country, including its flag, population, area, currencies, and a link to its location on Google Maps.
- **About Page**: Contains information about the application and its purpose.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Pages

- **Home**: The main landing page that shows the top 10 most populous countries.
- **Search**: A page where users can search for countries and apply filters.
- **Details**: A detailed view of a selected country with comprehensive information.
- **About**: A page that provides information about the application.

## Components

- **Navbar**: The navigation bar at the top of the application.
- **Footer**: The footer section of the application.
- **Hero**: The hero section on the home page.
- **Card**: A card component used to display country information.
- **SearchBar**: A search bar component used on the search page.
- **DropDown**: A dropdown component used for filtering countries.
- **ScrollToTop**: A component that scrolls the page to the top on route change.

## Context

- **DataContext**: Provides the context for managing and accessing country data throughout the application.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/anthoonydavidson/worlduniversity.git
cd worlduniversity
npm install
```

To run the application in development mode:

```sh
npm start
```

To create a production build:

```sh
npm run build
```

## Dependencies

- React
- React Router
- Axios
- Tailwind CSS
- REST Countries API
