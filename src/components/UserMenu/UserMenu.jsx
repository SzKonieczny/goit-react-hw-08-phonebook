import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hook';
import { contactsApi } from '..//..//redux/spliceContacts';

import { UserBox, UserName } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox>
      <UserName>Welcome, {user.name} </UserName>
      <button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => {
              contactsApi.util.resetApiState();
            })
        }
      >
        Logout
      </button>
    </UserBox>
  );
};
