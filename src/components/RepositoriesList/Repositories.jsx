import React from 'react';
import { string } from 'prop-types';
import { Card } from 'react-rainbow-components';
import { HiUserCircle } from 'react-icons/hi';

const Repositories = ({ imageURL, name, user, description }) => {
  return (
    <Card className='repositories'>
      <div>
        <a href={imageURL}>
          <img src={imageURL} alt='github' className='repositories__image' />
        </a>
      </div>
      <h1 className='repositories__name'>{name}</h1>
      <p className='repositories__description'>{description}</p>
      <div className='repositories__border'></div>
      <footer className='repositories__footer'>
        <HiUserCircle className='repositories__icon' />
        <p className='repositories__user'>{user}</p>
      </footer>
    </Card>
  );
};

Repositories.propTypes = {
  imageURL: string.isRequired,
  name: string.isRequired,
  user: string.isRequired,
  description: string,
};

export default Repositories;
