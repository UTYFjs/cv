import { EducationCard } from '~/components/education-card/education-card';
import styles from './education.module.scss';
import { useEffect, useRef } from 'react';
import { certificate } from '~/constants/education-contants';

export type CertificateType = {
  id: string;
  imgSrc: string;
  link: string;
  title: string;
  schoolLink: string;
};

export const Education = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((item) => {
        console.log(item);
        if (item.intersectionRatio > 0.1) {
          console.log(item);
          item.target.classList.add(styles['in-viewport']);
        }
      });
    };
    const element = elementRef.current;
    if (element) {
      const observer = new IntersectionObserver(callback);
      observer.observe(element);
    }
  }, []);

  return (
    <div className={styles.education}>
      <p className={styles.title}> Образование и курсы</p>
      <div className={styles['education-wrapper']}>
        {certificate.map((item) => (
          <EducationCard
            key={item.id}
            cardData={item}
            onClick={() => {
              console.log('helloworld');
            }}
          />
        ))}
      </div>
      <div className={styles['high-education-wrapper']} ref={elementRef}>
        <div>
          <span className={styles['year-start']}>2007</span> <span className={styles['year-end']}>2012</span>
        </div>
        <div>
          <p className={styles.university}> Белорусский Государственный Университет</p>
          <p className={styles.speciality}> Инженер-геолог</p>
          <p className={styles.speciality}> Геология и разведка месторождений полезных ископаемых</p>
        </div>
        <div className={styles.blur}></div>
      </div>
    </div>
  );
};
