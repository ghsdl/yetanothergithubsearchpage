import React from 'react';
import { string } from 'prop-types';
import './Message.scss';

const Message = ({ message }) => {
  return (
    <div className='message'>
      <h1 className='message__content'>{message}</h1>
    </div>
  );
};

Message.propTypes = {
  message: string.isRequired,
};

export default Message;
