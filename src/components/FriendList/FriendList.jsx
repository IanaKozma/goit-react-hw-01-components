import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListCard>
            {friends.map((friend) => {
                return (
                    <FriendListItem
                        key={friend.id}
                        name={friend.name}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                    />
                );
            })}
        </FriendListCard>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};