import React, { useState } from 'react';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Message from '../Message/Message.jsx';
import RepositoriesList from '../RepositoriesList/RepositoriesList.jsx';
import repos from '../../data/repos.js';
import { getRepositories } from './AppUtils.js';
import './App.scss';

const App = () => {
  const cleanRepositories = getRepositories(repos.items);
  const [repositories, setRepositories] = useState(cleanRepositories);
  const [message, setmessage] = useState('');
  const [search, setSearch] = useState('');
  return (
    <div className='app'>
      <Header />
      <SearchBar input={search} onChange={setSearch} onSubmit={() => {}} />
      <Message message={message} />
      <RepositoriesList list={repositories} />
    </div>
  );
};

export default App;
