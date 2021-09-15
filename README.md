# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![./screenshot.jpg]

### Links

- Solution URL: [https://rest-countries-app-seanred.herokuapp.com/]
- Live Site URL: [https://github.com/seanred360/rest-countries-api]

## My process

### Built with

- [REST Countries API] (https://restcountries.eu/)
- [React](https://reactjs.org/) - JS library
- [React Router] (https://reactrouter.com/) - For routing a multi page app
- [Heroku: Cloud Application Platform] (https://www.heroku.com) - For hosting
- [Styled Components](https://styled-components.com/) - For styles
- [SASS] (https://sass-lang.com/) - For styles
- [react-icons] (https://react-icons.github.io/react-icons/) - For icons as React components

- [React controlled component workflow] - A component that controls part of the state should control all of it. Most of the event handlers and state variables were raised to the <HomePage> component. This is one way to reduce coupling between components. Each component reports to the <HomePage> component and is agnostic to other components.

### What I learned

This is my first time deploying an app with React. This is also my first multi page app.

#### Using react-router-dom

I learned a lot about routing. The <Switch> component selects which component to render based on the current URL. The routes should be organized from the most specific to the least specific. For example: <Route> first looks for "/not-found" then "/:id"(:id is a dynamic variable therefore less specific), if it cannot find either, it will default to the "/" <HomePage>.

```js
<Switch>
  <Route exact path="/not-found" component={NotFound}></Route>
  <Route
    path="/:id"
    render={(props) => <SingleCountryPage {...props} />}
  ></Route>
  <Route exact path="/" component={HomePage}></Route>
</Switch>
```

###### <Route> props

<Route> will pass the history, location and match props objects to the component it renders. A match object contains information about how a <Route path> matched the URL. When the user goes to "https://whateverwebsiteurl.com/USA", the match object stores "/USA' in match.params.id. I put this value in the axios request to the API to get the data about the specific country. When the user puts an invalid url such as, "https://whateverwebsiteurl.com/wfwe3e1e32434c33" the axios request will fail. "/not-found" replaces the current entry on the history stack in the history object mentioned earlier. This immediatly redirects the user to the "not-found" page.

For more information about <Route> props see (https://reactrouter.com/web/api/history). For more information about how to fetch data from the REST Countries API see (https://restcountries.eu/#api-endpoints-code).

```js
useEffect(() => {
  setIsLoaded(false);
  axios
    .get(`https://restcountries.eu/rest/v2/alpha/${routeMatch.params.id}`)
    .then((response) => {
      setCountry(response.data);
      setIsLoaded(true);
    })
    .catch((error) => {
      setError(error);
      setIsLoaded(true);
      // redirect the user to the not found page
      history.replace("/not-found");
    });
}, [history, routeMatch.params.id]);
```

##### Theme switcher

![./theme-switcher.gif]

I used styled-components to switch between dark mode and light mode. It was a much cleaner and scaleable way to toggle between themes.

- styled-components allow us to extend styling properties using the props parameter, commonly used in React — thus, dynamically affecting the feel of a component via the application’s state.

- In the rendering tree, all styled-components will have access to the provided theme, even when they are multiple levels deep.

- styled-components generates unique class names for your styles. You’ll never have to worry about misspellings or using class names that have no meaning.

- Supports Sass syntax which allows us to use mixins and nested styles

##### How the theme switcher works

My theme switcher is made up of the following

- Themes
  This contains the color properties of our light and dark themes.
- GlobalStyles
  This contains the global styles for the entire document.
- ThemeToggler
  This holds the button element that toggles the functionality.
- useDarkMode
  This custom hook handles the logic behind the change of theme and the persistence of our theme in localStorage.

To make a component change themes, you only need to add the class I created "foreground-color" and the background colors and font colors will change with whatever theme and color you want. For this project I only did light and dark mode. Another theme could easily be created in minutes. Just define your colors in Themes.jsx like this---

```js
export const lightTheme = {
  backgroundColor: "#F2F2F2",
  foregroundColor: "white",
  text: "black",
  searchBarText: "#848484",
  paginationActiveText: "#FAFAFA",
  paginationBtnActive: "black",
};
export const darkTheme = {
  backgroundColor: "#202C36",
  foregroundColor: "#2B3844",
  text: "#FAFAFA",
  searchBarText: "white",
  paginationActiveText: "#202C36",
  paginationBtnActive: "white",
};
```

The useDarkMode custom hook I created will inject the current theme into the DOM. As mentioned earlier, all components will have access to the current theme regardless of how deep in the render tree it is.

```js
const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <nav className="navbar flex flex-jc-sb flex-ai-c foreground-color">
          <span className="title">Where in the world?</span>
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        </nav>
        <div className="App">
          <Main />
        </div>
      </>
    </ThemeProvider>
  );
};
```

### Continued development

I would like to add some data visualization to the page. Such as weather or covid tracking and other statics. The REST Countries API includes some localization/translations. I would like to try adding different lanuage options to the page for non English speakers.

### Useful resources

- [Code With Mosh](https://codewithmosh.com/) - The "Mastering React" course was invaluable. Mosh is excellent at explaining complicated concepts. I was able to quckly pickup the controlled component workflow and clean coding practices from this course. This course really was an all-in-one package. Mosh covered components, passing props, react-routes, pagination/filtering/sorting, forms, calling backend services, deployment, and much more.
- [Blessing Krofegha](https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/) - This is an amazing article which helped me understand how to use styled components to make togglable themes for my webpages.
- [Real Favicon Generator](https://realfavicongenerator.net/) - This tool can generate a favicon for every platform including iOS safari, Android chrome, Windows 8 and 10, Mac OS X El Capitan Safari, and Classic, desktop browsers. It also has a tool to check if your favicon is loading correctly on all those platforms. You do not need to have each of these devices on hand.

## Author

- GitHub - [Sean Redmon](https://github.com/seanred360)
- Frontend Mentor - [@seanred360](https://www.frontendmentor.io/profile/seanred360)
