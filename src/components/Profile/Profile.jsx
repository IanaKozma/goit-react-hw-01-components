import user from '../../user.json';
import PropTypes from 'prop-types';
import { Profile, Description, Name, Tag, Location, Stats, Label, Quantity } from './Profile.styled';

export const ProfileCard = ({ user }) => {
    return (
        <Profile>
            <Description>
                <Avatar>
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                </Avatar>
                <Name>{user.username}</Name>
                <Tag>{user.tag}</Tag>
                <Location>{user.location}</Location>
            </Description>

            <Stats>
                <li>
                    <Label>Followers</Label>
                    <Quantity>{user.stats.followers}</Quantity>
                </li>
                <li>
                    <Label>Views</Label>
                    <Quantity>{user.stats.views}</Quantity>
                </li>
                <li>
                    <Label>Likes</Label>
                    <Quantity>{user.stats.likes}</Quantity>
                </li>
            </Stats>
        </Profile>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.any,
    stats: PropTypes.number.isRequired,
};