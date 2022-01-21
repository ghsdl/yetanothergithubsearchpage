import React from 'react';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Message from '../Message/Message.jsx';
import RepositoriesList from '../RepositoriesList/RepositoriesList.jsx';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <SearchBar />
      <Message />
      <RepositoriesList />
    </div>
  );
};

export default App;
