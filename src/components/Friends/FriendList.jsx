import { Friend } from "./Friend";
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (
        <div>
            <ul className={styles.FriendList}>
                {friends.map(({ avatar, name, isOnline, id }) => <Friend key={id} avatar={avatar} name={name} online={isOnline}/>)}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}
