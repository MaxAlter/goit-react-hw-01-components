import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendListItem = ({ friend, alt }) => (
  <li className={style.item}>
    <span className={friend.isOnline === true ? style.onLine : style.offLine} />
    <img className={style.avatar} src={friend.avatar} alt={alt} width="80" />
    <p className={style.name}>{friend.name}</p>
  </li>
);

FriendListItem.defaultProps = {
  friend: {},
  alt: 'avatar',
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
  alt: PropTypes.string,
};

export default FriendListItem;
