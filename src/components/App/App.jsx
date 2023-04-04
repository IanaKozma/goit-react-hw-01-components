import { ProfileCard } from 'components/Profile/Profile';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ProfileCard
        /* username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} */
      />
    </Container>
  )
}

/* export const App = () => {
  return (
    {<div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>}
  );
}; */
