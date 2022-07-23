import PropTypes from 'prop-types';
import style from './Profile.module.css'


export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className={style.profile}>
  <div className={style.description}>
    <img
    src={avatar}
    alt="User avatar"
    className={style.avatar}
    width={56}
    />
    <p className={style.nameProfile}>{username}</p>
    <p className={style.tagProfile}>{tag}</p>
    <p className={style.locationProfile}>{location}</p>
  </div>

  <ul className={style.statsProfile}>
    <li className={style.statsProfileLink}>
      <span className={style.labelProfile}>Followers</span>
      <span className={style.quantityProfile}>{followers}</span>
    </li>
    <li className={style.statsProfileLink}>
      <span className={style.labelProfile}>Views</span>
      <span className={style.quantityProfile}>{views}</span>
    </li>
    <li className={style.statsProfileLink}>
      <span className={style.labelProfile}>Likes</span>
      <span className={style.quantityProfile}>{likes}</span>
    </li>
  </ul>
</div>
    )
}


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number, 
};