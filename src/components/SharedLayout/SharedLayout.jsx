import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Link to="/">home</Link>
        <Link to="tweets">tweets</Link>
      </header>
      <main>
        <Suspense fallback={<p>loader</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
