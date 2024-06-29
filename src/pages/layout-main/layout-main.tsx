import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '~/components/button/Button';
import { Drawer } from '~/components/drawer/drawer';

import { Header } from '~/components/header/Header';
import { Menu } from '~/components/menu/Menu';

export const LayoutMain = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    console.log('isdrawerOpen', isDrawerOpen);
  }, [isDrawerOpen]);
  return (
    <>
      {' '}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} direction={'top'}>
        {' '}
        <Menu />
      </Drawer>
      <Button onClick={() => setIsDrawerOpen((state) => !state)}>Open Drawer2</Button>
      <Header />
      <Outlet />
    </>
  );
};
