import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './constants/routes-constants';
import 'normalize.css';
import './styles/main.scss';
import { persistor, store } from './store/store';
import moment from 'moment';
import 'moment/locale/ru';
import { ProjectsPage } from './pages/Projects/Projects';

const App: React.FC = () => {
  moment.locale('ru', {
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<MainPage />} />
            <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
