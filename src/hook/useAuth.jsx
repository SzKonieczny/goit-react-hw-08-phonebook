import { useSelector } from 'react-redux';
import {
  getIsLoggedIn,
  getIsRefreshing,
  getUsername,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUsername);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
