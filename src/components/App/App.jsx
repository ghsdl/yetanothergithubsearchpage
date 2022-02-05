import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Message from '../Message/Message.jsx';
import RepositoriesList from '../RepositoriesList/RepositoriesList.jsx';
import Loader from '../Loader/Loader.jsx';
import { getRepositories } from './AppUtils.js';
import './App.scss';

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const loadRepositories = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        const cleanRepositories = getRepositories(response.data.items);
        setRepositories(cleanRepositories);
        setMessage(
          `${response.data.total_count} repositories found for ${search}`,
        );
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
        setSearch('');
      });
  };

  return (
    <div className='app'>
      <Header />
      <SearchBar
        input={search}
        onChange={setSearch}
        onSubmit={loadRepositories}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {message && <Message message={message} />}
          <RepositoriesList list={repositories} />
        </>
      )}
    </div>
  );
};

export default App;
