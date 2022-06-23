import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import s from './friendList.module.css';

export const FriendList = ({friends}) => {
    return (
<ul className={s.friendList}>
{friends.map((el) => (
          <FriendListItem key={el.id} friends={el} />
        ))}
</ul>
)};

