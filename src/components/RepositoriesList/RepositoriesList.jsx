import React from 'react';
import Repositories from './Repositories';

import './Repositories.scss';

const RepositoriesList = () => {
  return (
    <div className='repositories-list'>
      <Repositories />
      <Repositories />
    </div>
  );
};

export default RepositoriesList;
