import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(routeProps);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
