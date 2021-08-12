import './App.css';
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MostPlayed from './components/MostPlayed/MostPlayed';
import Favorites from './components/Favorites/Favorites';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif; ;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path='/' component={MostPlayed} />
          <Route exact path='/musicas-favoritas' component={Favorites} />
          <Route path='*'>
            <h1>Página não encontrada /: </h1>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
