import s from './friendListItem.module.css';
import PropTypes from "prop-types";

export const FriendListItem = ({friends}) => {
    const {avatar, name, isOnline} = friends;
    // console.log(avatar);
    return (
<li className={s.item}>
  <span className={isOnline ? s.avaliable : s.unavaliable}></span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
</li>
    )};

    FriendListItem.propTypes = {
      friends: PropTypes.shape({avatar: PropTypes.symbol, name: PropTypes.string, isOnline: PropTypes.bool}),
    };