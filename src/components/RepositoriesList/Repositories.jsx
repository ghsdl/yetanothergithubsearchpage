import React from 'react';
import github from '../../assets/images/github-test.jpg';
import { Card } from 'react-rainbow-components';

const Repositories = () => {
  return (
    <div className='repositories'>
      <Card>
        <img src={github} className='' alt='github' />
        <header>Github Name</header>
        <span>Joined in 2022</span>
        <p>Description</p>
      </Card>
    </div>
  );
};

export default Repositories;
