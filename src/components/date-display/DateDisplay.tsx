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
    }, 1000);

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
