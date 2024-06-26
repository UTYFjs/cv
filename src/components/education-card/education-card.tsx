import { CertificateType } from '~/pages/education/education';
import styles from './education-card.module.scss';
import { Link } from 'react-router-dom';

type EducationCardProps = {
  cardData: CertificateType;
  onClick: () => void;
};

export const EducationCard = ({ cardData, onClick }: EducationCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <Link className={styles.wrapper} to={cardData.link} target="_blank">
        <img className={styles.img} src={cardData.imgSrc} />
        <p className={styles.title}>{cardData.title} </p>
        <div className={styles.blur}> </div>
      </Link>
    </div>
  );
};
