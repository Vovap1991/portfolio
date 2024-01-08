import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { ToastOptions } from '../StyledComponents/ToastOption';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster toastOptions={ToastOptions} />
    </>
  );
};
