import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isBeingLoggedIn = useSelector(authSelectors.getIsBeingLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
      {!isLoggedIn && !isBeingLoggedIn ? <AuthNav /> : <UserMenu />}
    </nav>
  );
};

export default Navigation;
