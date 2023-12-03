import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from '../UpBar/UpBar';

import { LayoutBox } from './layOut.styled';

export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};
