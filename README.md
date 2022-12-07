# frontend-engineer-assignment

Displaying the top 10 rated TV shows and the top 10 movies, a search function for both, and a detailed view for individual items.

# Application description

When the app loads, the TV SHOWS tab is selected.
Clicking on a tab loads the top 10 MOVIES/TV SHOWS depending on the selected tab.

The search field is live and react to any change in the input field.
The search fires request on the search endpoint from TMDB and not filter the top 10 results.
The search is performed only when there are 3 or more characters in the search bar and it should be triggered only one second after the user has stopped typing.
When there are fewer than 3 characters in the search bar, the content reverts back to the top 10 MOVIES/TV SHOWS.
When the search is performed, results appear under the search box.
Switching between tabs while searching triggers the search again with the same search term for the selected tab and updates the results.

When the user clicks on a specific MOVIE/TV SHOW, he is taken to the details view.

The Detailed View of the Movie/TV Show shows the cover image on top and in the case of Movies/TV Shows which have a trailer shows the trailer video instead of the cover image. Below the image/trailer is some basic information regarding the selected Movie/TV Show.

The Back Button returns the user back to where he was and with the same state before clicking to see more information about a Movie/TV Show.
(This means that the correct tab is selected and if the user came from a search - the search result with the search term is there. 


# Application main features:

Display of top 10 results
Search Bar
Tabs foe switching between Movies and TV Shows
Display of detailed description
Easy to integrate
Responsive

# Technologies

Buillt with:
HTML
CSS
Typescript
React
TMDB Api
Axios
Redux Toolkit


# How to clone, install and start application:
​
-To get a local copy up and running follow these simple example steps:
​
1. First step is to clone the repository:
​
https://github.com/NaninSultan/frontend-engineer-assignment.git
​
2. Second step is to install NPM packages:
​
npm install

3. Third step is to create .env file in the root directory containing:

    REACT_APP_API_KEY="**Your tmdb api key**"

    REACT_APP_API_URL="https://api.themoviedb.org/3/"

    REACT_APP_IMG_URL="https://image.tmdb.org/t/p/original"
​
4. Fourth step is to start the project:
​
npm start