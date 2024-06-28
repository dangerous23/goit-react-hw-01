import style from './Profile.module.css';

const Profile = ( {username, tag, location, avatar, stats : {followers, views, likes } } ) => {
 
    return (
    <div className = {style.profileContainer}>
      <div className={style.center}>
        <img className= {style.imgStyle}
          src={avatar}
          alt="User avatar"
        />
        <p className={style.nameUser}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.tag}>{location}</p>
      </div>

      <ul className={style.statsList}>
        <li >
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li >
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li >
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
