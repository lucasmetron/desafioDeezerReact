import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MostPlayed from './components/MostPlayed/MostPlayed';
import Favorites from './components/Favorites/Favorites';
import { createGlobalStyle } from 'styled-components';
import favoriteListReducer from './store/reducers/favoriteListreducer';
import musicsReducer from './store/reducers/musicsReducer';
import selectedMusicReducer from './store/reducers/selectedMusicReducer';
import isRequestReducer from './store/reducers/isRequestReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';




const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif; ;
}
`;



function App() {

  const allReducers = combineReducers({
    allMusics: musicsReducer,
    favoritList: favoriteListReducer,
    selectedMusic: selectedMusicReducer,
    isRequest: isRequestReducer,
  })

  const store = createStore(allReducers)


  return (
    <div>
      <GlobalStyle />

      <Router>
        <Provider store={store}>
          <Header></Header>

          <Switch>


            <Route exact path='/' component={MostPlayed} />
            <Route exact path='/musicas-favoritas' component={Favorites} />
            <Route path='*'>
              <h1>Página não encontrada /: </h1>
            </Route>


          </Switch>
        </Provider>
      </Router>


    </div>
  );
}

export default App;
