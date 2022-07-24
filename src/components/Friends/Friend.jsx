import PropTypes from 'prop-types';
import { FriendBox, FriendStatus, Avatar, FriendsName} from './Friend.styled';

export const Friend = ({ avatar, name, isOnline, id }) => {
    return (
        <FriendBox>
            <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <FriendsName>{name}</FriendsName>
        </FriendBox>
        
    )
};

Friend.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

