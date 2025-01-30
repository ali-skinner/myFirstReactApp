import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'reaact-router-dom';

import GiphySearchPage from './Components/GiphySearchPage';
import Navigation from './Components/Navigation';
import LoginPage from './Components/LoginPage';
import FavoritesPage from './Components/FavoritesPage'

function App() {
  return (
    <div className="App">
      <GiphySearchPage/>
    </div>
  );
}

export default App;
// set up routes for my 3 pages (login, search, favs)
//login page needs username and password -- store these values in state
//once logged in, set value to true
// set up the search page with fetch similiar function
// search  bar to search for gifs
// fetch the gifs that match the query
// button to mark gifs as favorites
// mark favs and store on the favs page
// add api giphy key
// find the giphy url - verify
//https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=9


//bonus: pre-existing favorites for different users that are hard coded into the application. Once you do that, add the following functionality:

// Allow someone to go to: /user/username and based off the username, pull that user's favorites from the pre-built list.
// Strip out any code to different files as needed and think about how you might protect against any errors that might pop up.