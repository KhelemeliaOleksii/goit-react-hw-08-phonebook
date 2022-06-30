import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from './PivateRoute';
import Layout from './Layout'
import PublicRoute from './PublicRoute';

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
            <Navigate replace to='/contacts' />
          } />
          <Route path='/contacts' element={
            <PrivateRoute redirectTo='/login'>
              <ContactsView />
            </PrivateRoute>
          } />
          <Route path='/register' element={
            <PublicRoute restricted redirectTo='/contacts'>
              <RegisterView />
            </PublicRoute>
          } />
          <Route path='/login' element={
            <PublicRoute restricted redirectTo='/contacts'>
              <LoginView />
            </PublicRoute>
          } />
          <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
