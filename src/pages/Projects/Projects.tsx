import { ProjectCard } from '~/components/project-card/project-card';
import styles from './Projects.module.scss';
import { PROJECT_REACT_DATA } from '~/constants/projects-constants';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const ProjectsPage = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  const cardClassnames = cn(styles.card, animation && styles.show);

  return (
    <div className={styles['projects_react']}>
      {PROJECT_REACT_DATA.map(({ id, title, src, shortDescription, description, linkDeploy, linkCode, stack }) => (
        <ProjectCard
          key={id}
          className={cardClassnames}
          title={title}
          src={src}
          shortDescription={shortDescription}
          description={description}
          linkDeploy={linkDeploy}
          linkCode={linkCode}
          stack={stack}
          size={'medium'}
        />
      ))}
    </div>
  );
};
