import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import FavoritesList from './components/FavoritesList';

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Header = styled.header`
    background-image: linear-gradient(to right, #184680, #005a8b, #006b83, #00786c, #1f824f);
    height: 15%;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const Title = styled.div`
    color: white;
    font-size: 2.5em;
    font-weight: 700;
`;

const ListsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
            <Title>Toronto Waste Lookup</Title>
        </Header>
        <SearchBar />
        <ListsContainer>
            <ResultsList />
            <FavoritesList />
        </ListsContainer>
      </AppContainer>
    );
  }
}

export default App;
