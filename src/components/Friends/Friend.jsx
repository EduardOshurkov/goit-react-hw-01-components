import PropTypes from 'prop-types';
import styles from './Friend.module.css'

export const Friend = ({ avatar, name, isOnline, id }) => {
    return (
  <li className={styles.friendBox}>
           <span className={styles.status} style={{backgroundColor:  isOnline ? "green" : "red"}}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={styles.friendsName}>{name}</p>
        </li>
        
    )
}

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}