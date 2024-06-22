import styles from './education.module.scss';

export const Education = () => (
  <div>
    <p className={styles.title}> Образование и курсы</p>
    <div className={styles['education-wrapper']}></div>
  </div>
);
