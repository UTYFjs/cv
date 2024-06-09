import { ProjectDataType } from '~/constants/projects-constants';
import { Button } from '../button/Button';
import styles from './project-text-card.module.scss';
import cn from 'classnames';

type ProjectCardProps = ProjectDataType & {
  className?: string;
};

export const ProjectTextCard = ({
  title,
  src,
  shortDescription,
  description,
  linkDeploy,
  linkCode,
  stack,
  className,
}: ProjectCardProps) => {
  const containerClassNames = cn(styles['project-text-card'], className);
  return (
    <div className={containerClassNames}>
      <div className={styles['title-wrapper']}>
        <h2>{title}</h2>
        <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>
      </div>
      <div className={styles['description-wrapper']}>
        <p>{description}</p>
        <Button className={styles.btn} onClick={() => window.open(linkCode)} >
          Code{' '}
        </Button>
      </div>
    </div>
  );
};
