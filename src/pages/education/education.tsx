import { EducationCard } from '~/components/education-card/education-card';
import styles from './education.module.scss';
import { nanoid } from 'nanoid';

export type CertificateType = {
  id: string;
  imgSrc: string;
  link: string;
  title: string;
  schoolLink: string;
};
const certificate: CertificateType[] = [
  {
    id: nanoid(),
    imgSrc: './image/education/algo-5.0.webp',
    link: 'https://certify.s3.yandex.net/young-yandex/c1f747d9-e377-4f81-bb67-3e72d31660c1/8d44af91-4899-4efa-9a53-204f0c2157d1.pdf?m-message-key-id=-207165574941442048&m-message-click-id=0ed18715-5825-40ba-9b24-84b765389c2a&utm_source=mindbox&utm_medium=email&utm_campaign=training5&utm_content=certificate',
    title: 'Тренировки по алгоритмам 5.0 / Yandex',
    schoolLink: '',
  },
  {
    id: nanoid(),
    imgSrc: './image/education/marathon.webp',
    link: 'https://drive.google.com/file/d/1-GZgimSdZRsDWnkMi5WdG24Eqllr5DBA/view',
    title: 'Frontend Marathon / Clevertech',
    schoolLink: '',
  },
  {
    id: nanoid(),
    imgSrc: './image/education/nodejs.webp',
    link: 'https://app.rs.school/certificate/ax1nhr0f',
    title: 'NodeJS / RSSchool',
    schoolLink: '',
  },
  {
    id: nanoid(),
    imgSrc: './image/education/react.webp',
    link: 'https://app.rs.school/certificate/pi9lql0v',
    title: 'React / RSSchool',
    schoolLink: '',
  },
  {
    id: nanoid(),
    imgSrc: './image/education/frontend-javascript.webp',
    link: 'https://app.rs.school/certificate/os3uap3f',
    title: 'Frontend/Javascript / RSSchool',
    schoolLink: '',
  },
];

export const Education = () => (
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
  </div>
);
