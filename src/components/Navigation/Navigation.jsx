import { useAuth } from 'hook';
import { HomeNavLink } from './navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <HomeNavLink to="/">Home</HomeNavLink>
      {isLoggedIn && <HomeNavLink to="/phonebook">Phone Book</HomeNavLink>}
    </nav>
  );
};
