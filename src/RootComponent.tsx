import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './resources/routes-constants';
import 'normalize.css';
import './styles/main.scss';

const RootComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default RootComponent;
