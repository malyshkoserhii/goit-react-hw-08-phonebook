import { useSelector } from 'react-redux';
import Navigation from '../Navigation/';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isBeingLoggedIn = useSelector(authSelectors.getIsBeingLoggedIn);

  return (
    <header className={s.header}>
      <>
        <Navigation />
        {!isLoggedIn && !isBeingLoggedIn ? <AuthNav /> : <UserMenu />}
      </>
    </header>
  );
}
