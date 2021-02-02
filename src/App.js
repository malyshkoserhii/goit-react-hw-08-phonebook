import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/register">
          <RegisterView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default App;
