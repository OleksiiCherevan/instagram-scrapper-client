import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Main from './components/Main';
import { getDataAboutUser } from './http';

import users from './store/users';
export default observer(
  function App() {
    return (
      <div className="App">
        <Header />
        <Container >
          <Main />
        </Container>
      </div>
    );
  })


