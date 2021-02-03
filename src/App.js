import { Layout } from 'antd';
import { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';
import './App.css';
import AppBar from './components/AppBar';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';
import Spinner from './components/Spinner';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "homepage-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: " contacts-page-view" */),
);

const App = () => {
  const dispatch = useDispatch();
  const isBeingLoggedIn = useSelector(authSelectors.getIsBeingLoggedIn);
  const { Header, Content } = Layout;

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isBeingLoggedIn && (
      <Layout>
        <Layout>
          <Header>
            <AppBar />
          </Header>
        </Layout>
        <Content>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute exact path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute
                  exact
                  path="/login"
                  redirectTo="/contacts"
                  restricted
                >
                  <LoginView />
                </PublicRoute>
                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              </>
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    )
  );
};

export default App;
