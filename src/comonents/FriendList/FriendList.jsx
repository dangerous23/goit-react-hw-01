import style from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';

export default function FriendList({ friends }) {
    const FriendList = friends.map((friend) => {
        return (
            <li key={friend.id} >
                <FriendItem image={friend.avatar} name={friend.name} status={friend.isOnline} />
            </li>
        );
    });

    return <ul className={style.friendsList}>{FriendList}</ul>;
}
