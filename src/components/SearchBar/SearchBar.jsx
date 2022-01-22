import React from 'react';
import { Input } from 'react-rainbow-components';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className='search'>
      <div className='rainbow-align-content_center rainbow-p-vertical_x-large rainbow-flex_wrap'>
        <Input
          type='search'
          label='application component search'
          hideLabel
          className='rainbow-p-around_medium search__input'
          style={styles}
          placeholder='Search for repositories or users'
          isCentered
          iconPosition='right'
          icon={<BiSearchAlt className='rainbow-color_gray-3 search__icon' />}
        />
      </div>
    </div>
  );
};

export default SearchBar;
