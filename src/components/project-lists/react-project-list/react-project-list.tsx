import { useEffect, useState } from 'react';
import styles from './react-project-list.module.scss';
import cn from 'classnames';
import { ProjectCard } from '~/components/project-card/project-card';
import { PROJECT_REACT_DATA } from '~/constants/projects-constants';

export const ReactProjectList = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
    return () => {
      setAnimation(false);
    };
  }, []);
  const cardClassnames = cn(styles.card, animation && styles.show);

  return (
    <div className={styles['projects_react']}>
      {PROJECT_REACT_DATA.map(
        ({ id, title, src, shortDescription, description, sprints, linkDeploy, linkCode, stack }) => (
          <ProjectCard
            key={id}
            className={cardClassnames}
            title={title}
            src={src}
            shortDescription={shortDescription}
            description={description}
            sprints={sprints}
            linkDeploy={linkDeploy}
            linkCode={linkCode}
            stack={stack}
          />
        )
      )}
    </div>
  );
};
