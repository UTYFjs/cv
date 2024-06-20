import { Link } from 'react-router-dom';
import styles from './skill-card.module.scss';
import cn from 'classnames';

type SkillCardProps = {
  icon: JSX.Element;
  title: string;
  link: string;
  className?: string;
};

export const SkillCard = ({ icon, title, link, className }: SkillCardProps) => {
  const containerClassNames = cn(styles['skill-card'], className);
  return (
    <Link className={containerClassNames} to={link} target="_blank " relative="path">
      {icon}
      <p className={styles.title}>{title}</p>
    </Link>
  );
};
