import React from 'react';
import { arrayOf, shape, number } from 'prop-types';
import Repositories from './Repositories';

import './Repositories.scss';

const RepositoriesList = ({ list }) => {
  return (
    <div className='repositories-list'>
      {list.map((repository) => (
        <Repositories key={repository.id} {...repository} />
      ))}
    </div>
  );
};

RepositoriesList.propTypes = {
  results: arrayOf(
    shape({
      id: number.isRequired,
    }),
  ).isRequired,
};

export default RepositoriesList;
