import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import s from './friendList.module.css';
import PropTypes from "prop-types";

export const FriendList = ({friends} = {friends: []}) => {
    return (
<ul className={s.friendList}>
{friends.map((el) => (
          <FriendListItem key={el.id} friends={el} />
        ))}
</ul>
)};

FriendList.propTypes = {
  friends: PropTypes.shape({avatar: PropTypes.symbol.isRequired, name: PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired}),
};