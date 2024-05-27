import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styles from './date-display.module.scss';
import cn from 'classnames';

type DateDisplayProps = {
  className?: string | CSSModuleClasses;
};
export const DateDisplay = ({ className }: DateDisplayProps) => {
  const [date, setDate] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format('HH:mm:ss'));
      //setDate(moment().toDate().toString());
    }, 1000);
    //console.log(Geolocation);
    console.log(navigator.geolocation.getCurrentPosition);
    // navigator.geolocation.getCurrentPosition(function (location) {
    //   console.log('location', location.coords.latitude);
    //   console.log(location.coords.longitude);
    //   console.log(location.coords.accuracy);
    // })();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(styles['date-display'], className)}>
      {' '}
      <span className={styles['day-of-week']}>{moment().format('dddd')}</span>
      <span className={styles.time}>{date}</span>
      <span className={styles.date}>{moment().format('DD-MM-YYYY')}</span>
    </div>
  );
};
