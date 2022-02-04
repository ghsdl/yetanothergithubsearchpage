import React from 'react';
import { string } from 'prop-types';
import { Card } from 'react-rainbow-components';

const Repositories = ({ imageURL, name, user, description }) => {
  return (
    <div className='repositories'>
      <Card>
        <img src={imageURL} className='' alt='github' />
        <header>{name}</header>
        <span>{user}</span>
        <p>{description}</p>
      </Card>
    </div>
  );
};

Repositories.propTypes = {
  imageURL: string.isRequired,
  name: string.isRequired,
  user: string.isRequired,
  description: string,
};

export default Repositories;
