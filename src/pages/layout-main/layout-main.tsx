import { Outlet } from 'react-router-dom';
import './layout-main.module.scss';
import { Header } from '~/components/header/Header';

export const LayoutMain = () => (
  <>
    {' '}
    <Header />
    <Outlet />
  </>
);
