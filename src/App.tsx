import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import { ROUTES } from './resources/routes-constants';
import 'normalize.css';
import './styles/main.scss';
import { persistor, store } from './store/store';
import moment from 'moment';
import 'moment/locale/ru';
import { PDFCv } from './pages/Pdf-cv/PDFCv';

const App: React.FC = () => {
  moment.locale('ru', {
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path={ROUTES.PDF_CV} element={<PDFCv />} />
            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<MainPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
