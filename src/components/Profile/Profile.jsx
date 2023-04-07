import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: {followers, likes, views},
}) => {
    return (
        <ProfileCard>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar">
                </Avatar>
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};