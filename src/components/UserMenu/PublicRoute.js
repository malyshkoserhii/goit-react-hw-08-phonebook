import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const redirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {redirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
