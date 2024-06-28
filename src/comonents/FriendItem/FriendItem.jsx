import style from  './FriendListItem.module.css';


export default function friendItem({ image, name, status }) {
    return (
        <div >
            <img  src={image} alt="Avatar" width="48" />
            <p className={style.nameFriends}>{name}</p>
            {status ? <p className={style.online}>Online</p> : <p className={style.offline} >Offline</p>}
        </div>
    );
}