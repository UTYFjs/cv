import { ProjectDataType } from '~/constants/projects-constants';
import { Button } from '../button/Button';
import styles from './project-card.module.scss';
import cn from 'classnames';
import React, { ReactNode } from 'react';

type ProjectCardProps = Omit<ProjectDataType, 'id'> & {
  className?: string;
};

export const ProjectCard = ({
  title,
  src,
  shortDescription,
  description,
  linkDeploy,
  linkCode,
  stack,
  className,
}: ProjectCardProps) => {
  const containerClassNames = cn(styles['project-card'], className);
  return (
    <div className={containerClassNames}>
      <h2>[{title}]</h2>
      <p>{shortDescription}</p>
      <div className={styles['img-wrapper']}>
        {' '}
        <img className={styles.img} src={src} alt="image-superboards"></img>
        {description && <div className={styles['project-card_description']}> {description}</div>}
      </div>
      <div className={styles.stack}> [ {stack.map((item) => item + ', ')} ]</div>
      <div className={styles.btns}>
        {' '}
        <Button onClick={() => window.open(linkDeploy)}>Deploy</Button>
        <Button onClick={() => window.open(linkCode)} reverseBg={true}>
          Code{' '}
        </Button>
      </div>
    </div>
  );
};
