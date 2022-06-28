import { Routes, Route } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from './PivateRoute';
import Layout from './Layout'
import PublicRoute from './PublicRoute';
import Navigation from './Navigation';

const HomeView = lazy(() => import('../Views/HomeView' /*webpackChunkName: 'home-page' */));
const ContactsView = lazy(() => import('../Views/ContactsView' /* webpackChunkName: 'contactList-page' */));
const RegisterView = lazy(() => import('../Views/RegisterView' /* webpackChunkName: 'register-page' */));
const LoginView = lazy(() => import('../Views/LoginView' /* webpackChunkName: 'login-page' */));

function App() {
  const dispatch = useDispatch();

  useEffect(() => { dispatch(authOperations.fetchCurrentUser()) }, [dispatch]);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  return !isFetchingCurrentUser && (
    <Suspense fallback={<div>'Loading...'</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <PublicRoute>
              <HomeView />
            </PublicRoute>
          } />
          <Route path='contacts' element={
            <PrivateRoute redirectTo='/login'>
              <ContactsView />
            </PrivateRoute>
          } />
          <Route path='register' element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          } />
          <Route path='login' element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          } />
          <Route path='*' element={<Navigation replace to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
