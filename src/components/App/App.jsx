import { SharedLayout } from 'components/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('page/HomePage'));
const TweetsPage = lazy(() => import('page/TweetsPage'));
const NotFoundPage = lazy(() => import('page/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
