import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import s from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Welcome, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </>
  );
}
