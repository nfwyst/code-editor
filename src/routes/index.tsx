import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';

import ProtectedRoute from 'auth/protected-route';
import Loading from 'components/common/loading';

import paths from './paths';

const Home = lazy(() => import('pages/home'));
const CodeEditor = lazy(() => import('pages/code-editor'));

const Index = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }

  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor} />} />
    </Routes>
  )
}

export default Index;
